import { motion, useReducedMotion } from 'framer-motion'

/* Editorial line-mask reveal: text rises out of a clipped box with a slight
   settling rotation — no blur/gloss. Honors prefers-reduced-motion. */
export default function MaskReveal({ children, delay = 0, as = 'div', className = '', ...rest }) {
  const reduce = useReducedMotion()
  const Tag = as

  if (reduce) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <Tag className={className} style={{ overflow: 'hidden', display: 'block' }} {...rest}>
      <motion.div
        style={{ display: 'block', transformOrigin: 'left bottom' }}
        initial={{ y: '115%', rotate: 3.5, opacity: 0.4 }}
        whileInView={{ y: '0%', rotate: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </Tag>
  )
}
