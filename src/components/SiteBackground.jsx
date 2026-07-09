import { motion } from 'framer-motion'
import LiquidEther from './LiquidEther'

/* The LiquidEther fluid background is used across the whole site. It lives
   outside the routed pages so it persists (and keeps flowing) during
   navigation instead of restarting on every page. (On /background it's
   swapped for CinematicBackdrop; the motion wrapper gives the crossfade.) */
export default function SiteBackground() {
  return (
    <motion.div
      className="bg-canvas"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
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
    </motion.div>
  )
}
