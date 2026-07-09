import { motion } from 'framer-motion'
import Waves from './Waves'

/* Experience-page backdrop layer: interactive perlin wave lines rendered
   OVER the site-wide LiquidEther fluid (which stays mounted underneath).
   Fixed at the global backdrop z-level, mounted by App outside the routed
   tree so PageTransition transforms can't re-anchor it. */
export default function WavesBackdrop() {
  return (
    <motion.div
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <Waves
        lineColor="rgba(167, 139, 250, 0.22)"
        backgroundColor="transparent"
        waveSpeedX={0.0125}
        waveSpeedY={0.008}
        waveAmpX={36}
        waveAmpY={18}
        friction={0.925}
        tension={0.008}
        maxCursorMove={120}
        xGap={14}
        yGap={40}
      />
    </motion.div>
  )
}
