import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/* -------------------------------------------------------------------------
   Interactive particle grid.
   A field of points laid out in normalized [-1, 1] space (then scaled to fill
   the viewport). The GPU vertex shader pushes points away from the cursor and
   brightens/enlarges the ones nearby, giving a smooth, fluid "wake" that
   follows the mouse. Pure white on black — minimal.
   ------------------------------------------------------------------------- */

const vertex = /* glsl */ `
  uniform float uTime;
  uniform vec2  uMouse;       // cursor in [-1, 1] space
  uniform float uRadius;      // influence radius
  uniform float uStrength;    // push distance
  uniform float uSize;        // base point size (px)
  uniform float uPixelRatio;
  uniform float uScroll;      // page scroll, drives a gentle drift
  attribute float aScale;
  varying float vForce;

  void main() {
    vec3 pos = position;

    // soft ambient wave so the field is never totally static
    pos.z += sin(pos.x * 3.0 + uTime * 0.6) * 0.015
           + cos(pos.y * 3.0 + uTime * 0.5) * 0.015;
    pos.y += sin(uScroll * 0.0006 + pos.x) * 0.01;

    // cursor repulsion
    float d = distance(pos.xy, uMouse);
    float force = smoothstep(uRadius, 0.0, d);
    vec2 dir = normalize(pos.xy - uMouse + vec2(0.0001));
    pos.xy += dir * force * uStrength;
    vForce = force;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aScale * (1.0 + force * 3.5) * uPixelRatio * (1.0 / -mv.z);
  }
`

const fragment = /* glsl */ `
  varying float vForce;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float dist = length(c);
    if (dist > 0.5) discard;
    float edge = smoothstep(0.5, 0.0, dist);
    // dim grey at rest -> bright white near cursor
    vec3 col = mix(vec3(0.42), vec3(1.0), vForce);
    float alpha = edge * (0.32 + vForce * 0.68);
    gl_FragColor = vec4(col, alpha);
  }
`

function ParticleField({ scrollRef }) {
  const points = useRef()
  const { viewport } = useThree()

  const COLS = 120
  const ROWS = 70

  const { positions, scales } = useMemo(() => {
    const count = COLS * ROWS
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    let i = 0
    for (let x = 0; x < COLS; x++) {
      for (let y = 0; y < ROWS; y++) {
        // grid + jitter so it reads as an organic particle cloud, not banded rows
        positions[i * 3] = (x / (COLS - 1)) * 2 - 1 + (Math.random() - 0.5) * 0.014
        positions[i * 3 + 1] = (y / (ROWS - 1)) * 2 - 1 + (Math.random() - 0.5) * 0.02
        positions[i * 3 + 2] = (Math.random() - 0.5) * 0.05
        scales[i] = Math.random() * 0.7 + 0.3
        i++
      }
    }
    return { positions, scales }
  }, [])

  // Canvas is pointer-events:none, so feed the cursor in manually from window.
  const mouse = useRef({ x: 2, y: 2, active: false })
  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
      mouse.current.active = true
    }
    const onLeave = () => { mouse.current.active = false }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerout', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerout', onLeave)
    }
  }, [])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(2, 2) }, // offscreen at start
      uRadius: { value: 0.22 },
      uStrength: { value: 0.07 },
      uSize: { value: 26 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uScroll: { value: 0 },
    }),
    []
  )

  const target = useMemo(() => new THREE.Vector2(2, 2), [])

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime
    uniforms.uScroll.value = scrollRef?.current || 0
    // ease toward the real cursor (kept offscreen until the mouse first moves)
    if (mouse.current.active) {
      target.set(mouse.current.x, mouse.current.y)
    } else {
      target.set(2, 2)
    }
    uniforms.uMouse.value.lerp(target, 0.12)
    // fill the viewport
    if (points.current) {
      points.current.scale.set(viewport.width / 2, viewport.height / 2, 1)
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function Scene({ scrollRef }) {
  return (
    <Canvas
      className="bg-canvas"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
      dpr={[1, 2]}
      resize={{ scroll: false, debounce: { scroll: 0, resize: 50 } }}
      camera={{ position: [0, 0, 3], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ParticleField scrollRef={scrollRef} />
    </Canvas>
  )
}
