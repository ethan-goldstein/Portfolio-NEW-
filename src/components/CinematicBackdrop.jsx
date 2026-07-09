import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Scene from './three/Scene'
import Galaxy from './Galaxy'

/* Cinematic page backdrop, mounted by App (outside the routed tree so
   position:fixed isn't re-anchored by PageTransition transforms).

   modes:
   - 'scrub': video.currentTime follows page scroll (Apple-style journey) -
     frame-quantized seeks, lerped for feel, with automatic degrade-to-loop
     if seeks are slow on this machine.
   - 'loop': ambient autoplay loop.

   Both modes get lerped pointer parallax on a wrapper layer (the
   continuous.vc "scene sways toward the cursor" feel), a cursor radial
   light, particle field, film grain, and letterbox bars. */
export default function CinematicBackdrop({
  src,
  sources,            // [{ src, type }] for alpha-channel video (HEVC .mov + VP9 .webm)
  poster,
  mode = 'loop',
  lightColor = 'rgba(180, 150, 255, 0.10)',
  scrollRef,
  galaxy = false,     // interactive starfield instead of the particle Scene
  videoFloat = false, // zoomed-out transparent video (subject floats over the stars)
}) {
  const reduce = useReducedMotion()
  const [videoReady, setVideoReady] = useState(false)
  const [degraded, setDegraded] = useState(false)
  const [coarse] = useState(
    () =>
      typeof window !== 'undefined' &&
      (window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(pointer: coarse)').matches)
  )
  const wrapRef = useRef(null)
  const videoWrapRef = useRef(null)
  const videoRef = useRef(null)
  const m = useRef({
    duration: 0, time: 0, lastFrame: -1,
    nx: 0.5, ny: 0.5, px: 0, py: 0, rz: 0,
    maxScroll: 1, seekTimes: [], lastSeekStart: 0, evaluated: false,
  })

  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 1200], [1.02, 1.08])
  const dim = useTransform(scrollY, [0, 1600], [1, 0.68])
  const barScale = useTransform(scrollY, [0, 600], [1, 0.35])

  const scrub = mode === 'scrub' && !degraded
  const isLoop = mode === 'loop' || degraded
  const showVideo = !reduce && !coarse

  // Pointer position → normalized coords (consumed by the rAF loop below).
  useEffect(() => {
    if (reduce || coarse) return
    const onMove = (e) => {
      m.current.nx = e.clientX / window.innerWidth
      m.current.ny = e.clientY / window.innerHeight
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, coarse])

  // One rAF loop: pointer-parallax lerp + light vars + (scrub mode) frame-quantized seeking.
  useEffect(() => {
    if (reduce || coarse) return
    const s = m.current
    const computeMax = () => {
      s.maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
    }
    computeMax()
    window.addEventListener('resize', computeMax)
    let raf
    const loop = () => {
      raf = requestAnimationFrame(loop)
      const wrap = videoWrapRef.current
      const outer = wrapRef.current
      const tx = (s.nx - 0.5) * 24
      const ty = (s.ny - 0.5) * 16
      const trz = (s.nx - 0.5) * 0.8
      s.px += (tx - s.px) * 0.08
      s.py += (ty - s.py) * 0.08
      s.rz += (trz - s.rz) * 0.08
      if (wrap) wrap.style.transform = `translate3d(${s.px.toFixed(2)}px, ${s.py.toFixed(2)}px, 0) rotate(${s.rz.toFixed(3)}deg) scale(1.03)`
      if (outer) {
        outer.style.setProperty('--mx', `${(s.nx * 100).toFixed(2)}%`)
        outer.style.setProperty('--my', `${(s.ny * 100).toFixed(2)}%`)
      }
      const v = videoRef.current
      if (scrub && v && s.duration > 0) {
        const scroll = scrollRef?.current ?? window.scrollY
        const progress = Math.min(1, Math.max(0, scroll / s.maxScroll))
        const target = progress * (s.duration - 0.05)
        s.time += (target - s.time) * 0.15
        const f = Math.round(s.time * 24)
        if (f !== s.lastFrame && !v.seeking) {
          s.lastFrame = f
          s.lastSeekStart = performance.now()
          v.currentTime = f / 24
        }
      }
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', computeMax)
    }
  }, [reduce, coarse, scrub, scrollRef])

  // Degraded scrub → start looping playback.
  useEffect(() => {
    if (degraded && videoRef.current) {
      videoRef.current.loop = true
      videoRef.current.play().catch(() => {})
    }
  }, [degraded])

  const onLoadedMetadata = (e) => {
    const v = e.currentTarget
    m.current.duration = v.duration || 0
    // Safari primer: one play/pause warms the decode pipeline for seeking.
    if (mode === 'scrub') v.play().then(() => v.pause()).catch(() => {})
  }

  // Measure real seek latency over the first ~12 seeks; degrade if slow.
  const onSeeked = () => {
    const s = m.current
    if (s.evaluated || !s.lastSeekStart) return
    s.seekTimes.push(performance.now() - s.lastSeekStart)
    if (s.seekTimes.length >= 12) {
      s.evaluated = true
      const sorted = [...s.seekTimes].sort((a, b) => a - b)
      if (sorted[6] > 90) setDegraded(true)
    }
  }

  return (
    <motion.div
      ref={wrapRef}
      className="bgd-backdrop"
      style={{ '--bgd-light-color': lightColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {showVideo && galaxy && (
        <div className="bgd-galaxy">
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0.15}
            hueShift={250}
            twinkleIntensity={0.3}
            rotationSpeed={0.05}
            repulsionStrength={2}
            starSpeed={0.5}
            speed={1}
          />
        </div>
      )}

      {showVideo ? (
        <div className="bgd-video-wrap" ref={videoWrapRef}>
          <motion.video
            ref={videoRef}
            className={`bgd-video${videoFloat ? ' bgd-video--float' : ''}`}
            src={sources ? undefined : src}
            poster={poster}
            muted
            playsInline
            preload="auto"
            autoPlay={isLoop}
            loop={isLoop}
            onLoadedMetadata={onLoadedMetadata}
            onCanPlay={() => setVideoReady(true)}
            onSeeked={mode === 'scrub' ? onSeeked : undefined}
            style={videoFloat ? { opacity: dim } : { scale, opacity: dim }}
            data-ready={videoReady ? 'true' : 'false'}
          >
            {sources?.map((s) => (
              <source key={s.src} src={s.src} type={s.type} />
            ))}
          </motion.video>
        </div>
      ) : (
        <motion.img
          className={`bgd-video${reduce ? '' : ' kenburns'}`}
          src={poster}
          alt=""
          style={reduce ? undefined : { opacity: dim }}
        />
      )}

      {showVideo && !galaxy && (
        <div className="bgd-particles">
          <Scene scrollRef={scrollRef} />
        </div>
      )}

      <div className="bgd-light" />

      {!reduce ? (
        <>
          <motion.div className="bgd-letterbox top" style={{ scaleY: barScale }} />
          <motion.div className="bgd-letterbox bottom" style={{ scaleY: barScale }} />
          <div className="bgd-grain" />
        </>
      ) : (
        <>
          <div className="bgd-letterbox top" />
          <div className="bgd-letterbox bottom" />
        </>
      )}
    </motion.div>
  )
}
