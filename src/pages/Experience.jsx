import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { experience } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'

/* Combine work + education into one chronological-feeling track. */
const items = [
  ...experience.work.map((w) => ({ ...w, kind: 'Work', title: w.role })),
  ...experience.school.map((s) => ({ ...s, kind: 'Education', title: s.degree })),
]

function FlipCard({ item, index, isLast }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // flip the card in 3D as it travels through the viewport.
  // the last card flips in and then *stays flat* (nothing follows it), so the
  // page comes to rest on it.
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], isLast ? [72, 0, 0] : [72, 0, -72])
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    isLast ? [0.15, 1, 1, 1] : [0.15, 1, 1, 0.15]
  )
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], isLast ? [0.88, 1, 1] : [0.88, 1, 0.88])
  const z = useTransform(scrollYProgress, [0, 0.5, 1], isLast ? [-160, 0, 0] : [-160, 0, -160])

  return (
    <div className="flip-slot" ref={ref}>
      <motion.article
        className="flip-card"
        style={{ rotateX, scale, opacity, z, transformPerspective: 1300 }}
      >
        <div className="flip-top">
          <span className="flip-kind">{item.kind}</span>
          <span className="flip-period">{item.period} · {item.location}</span>
        </div>
        <h2 className="flip-role">{item.title}</h2>
        <p className="flip-org">{item.org}</p>
        <ul className="flip-points">
          {item.points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <span className="flip-num">{String(index + 1).padStart(2, '0')}</span>
      </motion.article>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="xp">
      <header className="xp-head container">
        <Reveal>
          <p className="page-index">05 — Experience</p>
          <h1 className="display"><FluidText text="Where" /><br /><FluidText className="l2" text="I've Been" /></h1>
          <p className="lead mt-2">Scroll to flip through the timeline.</p>
        </Reveal>
      </header>

      <div className="xp-track">
        {items.map((it, i) => (
          <FlipCard key={i} item={it} index={i} isLast={i === items.length - 1} />
        ))}
      </div>
    </div>
  )
}
