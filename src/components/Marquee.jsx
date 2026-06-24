import { motion } from 'framer-motion'

/* Infinite horizontal marquee of words. */
export default function Marquee({ items = [], duration = 24 }) {
  const loop = [...items, ...items]
  return (
    <div className="marquee">
      <motion.div
        className="marquee-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((it, i) => (
          <span key={i}>{it}</span>
        ))}
      </motion.div>
    </div>
  )
}
