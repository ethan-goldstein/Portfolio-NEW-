import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { interests } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'
import Pager from '../components/Pager'

/* A card that tilts in 3D toward the pointer. */
function TiltCard({ item, index }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 15 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        ref={ref}
        className="card"
        data-cursor="hover"
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, transformStyle: 'preserve-3d' }}
      >
        <span className="emoji" style={{ transform: 'translateZ(40px)' }}>{item.emoji}</span>
        <h3 style={{ transform: 'translateZ(28px)' }}>{item.title}</h3>
        <p style={{ transform: 'translateZ(18px)' }}>{item.text}</p>
      </motion.div>
    </Reveal>
  )
}

export default function Interests() {
  return (
    <>
      <div className="page container">
        <header className="page-header">
          <Reveal>
            <p className="page-index">02 — Interests</p>
            <h1 className="display"><FluidText text="What" /><br /><FluidText className="l2" text="Fuels Me" /></h1>
            <p className="lead mt-2">The obsessions outside the canvas that feed everything I make.</p>
          </Reveal>
        </header>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="grid cols-3">
            {interests.map((item, i) => (
              <TiltCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </section>
      </div>
      <Pager current="/interests" />
    </>
  )
}
