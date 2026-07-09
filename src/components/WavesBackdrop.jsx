import { motion } from 'framer-motion'
import Waves from './Waves'

/* Experience-page backdrop: the interactive perlin wave lines, standalone
   (replaces the LiquidEther fluid on this route). Fixed at the global
   backdrop z-level, mounted by App outside the routed tree so
   PageTransition transforms can't re-anchor it. Props per the reactbits
   usage example. */
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
        lineColor="#ffffff"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.0125}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </motion.div>
  )
}
