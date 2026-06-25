import LiquidEther from './LiquidEther'

/* The LiquidEther fluid background is used across the whole site. It lives
   outside the routed pages so it persists (and keeps flowing) during
   navigation instead of restarting on every page. */
export default function SiteBackground() {
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
