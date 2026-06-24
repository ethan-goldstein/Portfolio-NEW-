import { useLocation } from 'react-router-dom'
import Scene from './three/Scene'
import LiquidEther from './LiquidEther'

/* The home landing page uses the LiquidEther fluid background; every other
   page keeps the interactive particle field. */
export default function SiteBackground({ scrollRef }) {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return (
      <div
        className="bg-canvas"
        style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      >
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B497CF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    )
  }

  return <Scene scrollRef={scrollRef} />
}
