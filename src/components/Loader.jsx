import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Strands from './Strands'

const DURATION = 2600 // ms to reach 100%

/* Intro: a loading bar above, glowing Strands in the middle, and
   "Ethan Goldstein — Development" below. Time-based with a hard fallback so it
   can never hang even if requestAnimationFrame is throttled. Press / tap to skip. */
export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const start = performance.now()
    let interval
    let safety
    let finished = false

    const finish = () => {
      if (finished) return
      finished = true
      clearInterval(interval)
      clearTimeout(safety)
      setPct(100)
      setLeaving(true)
      setTimeout(() => onDone?.(), 700)
    }

    interval = setInterval(() => {
      const elapsed = performance.now() - start
      const p = Math.min(100, Math.round((elapsed / DURATION) * 100))
      setPct(p)
      if (p >= 100) finish()
    }, 24)

    safety = setTimeout(finish, DURATION + 1500)

    const skip = () => finish()
    window.addEventListener('keydown', skip)
    window.addEventListener('click', skip)
    return () => {
      clearInterval(interval)
      clearTimeout(safety)
      window.removeEventListener('keydown', skip)
      window.removeEventListener('click', skip)
    }
  }, [onDone])

  const padded = String(pct).padStart(3, '0')

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={leaving ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loader-stack">
        {/* loading bar above */}
        <div className="loader-top">
          <div className="loader-meta">
            <span>Loading</span>
            <span>{padded}</span>
          </div>
          <div className="lbar">
            <i style={{ width: `${pct}%` }} />
          </div>
        </div>

        {/* glowing strands */}
        <div className="loader-strands">
          <Strands
            colors={['#F97316', '#7C3AED', '#06B6D4']}
            count={3}
            speed={0.5}
            amplitude={1}
            waviness={1}
            thickness={0.7}
            glow={2.6}
            taper={3}
            spread={1}
            intensity={0.7}
            saturation={1.5}
            opacity={1}
            scale={1.5}
          />
        </div>

        {/* name below */}
        <div className="loader-name">
          <div className="loader-name-main">Ethan Goldstein</div>
          <div className="loader-name-sub">Development</div>
        </div>
      </div>

      <div className="loader-skip">Press any key or tap to skip</div>
    </motion.div>
  )
}
