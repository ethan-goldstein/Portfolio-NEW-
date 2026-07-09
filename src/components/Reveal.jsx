import { motion, useReducedMotion } from 'framer-motion'

/* Scroll-into-view reveal. Wrap anything to fade + rise it on scroll.
   Pass `blur` for a cinematic focus-pull (blurred + risen → sharp in place).
   Honors prefers-reduced-motion: in that mode content renders fully visible
   with no animation, so it can never be left hidden. */
export default function Reveal({ children, delay = 0, y = 28, blur = false, as = 'div', className = '', ...rest }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: blur ? y + 14 : y, ...(blur ? { filter: 'blur(10px)' } : {}) }}
      whileInView={{ opacity: 1, y: 0, ...(blur ? { filter: 'blur(0px)' } : {}) }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: blur ? 0.95 : 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
