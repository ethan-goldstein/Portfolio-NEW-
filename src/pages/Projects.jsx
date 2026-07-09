import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { projects } from '../content/data'
import Magnetic from '../components/Magnetic'

const isVideo = (s) => /\.(mp4|webm)$/i.test(s)
const PH = [
  'linear-gradient(135deg,#8b5cf6,#22d3ee)',
  'linear-gradient(135deg,#f472b6,#8b5cf6)',
  'linear-gradient(135deg,#22d3ee,#a7f3d0)',
  'linear-gradient(135deg,#fb7185,#fbbf24)',
  'linear-gradient(135deg,#6366f1,#ec4899)',
  'linear-gradient(135deg,#0ea5e9,#8b5cf6)',
]

/* responsive card dimensions for the coverflow */
function useCardSize() {
  const [s, setS] = useState({ w: 460, h: 290 })
  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const w = Math.max(240, Math.min(520, vw * 0.52))
      const h = Math.min(Math.round(w * 0.6), Math.round(vh * 0.42))
      setS({ w: Math.round(w), h })
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])
  return s
}

/* signed shortest offset of card i from position p around a ring of N */
const ringOffset = (i, p, N) => {
  let d = (((i - p) % N) + N) % N
  return d > N / 2 ? d - N : d
}

function Media({ p, i }) {
  if (p.media) {
    return isVideo(p.media) ? (
      <video src={p.media} muted loop autoPlay playsInline />
    ) : (
      <img src={p.media} alt={p.title} draggable="false" />
    )
  }
  return <div className="ring-ph" style={{ background: PH[i % PH.length] }} />
}

const Chevron = ({ dir }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d={dir === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/* one coverflow card — all motion derives from the shared `pos` spring */
function FlowItem({ p, i, N, w, h, spacing, pos, active, onSelect }) {
  const transform = useTransform(pos, (pv) => {
    const d = ringOffset(i, pv, N)
    const a = Math.abs(d)
    const tx = d * spacing
    const tz = -Math.min(a, 1) * 100 - Math.max(a - 1, 0) * 55
    const ry = Math.max(-1, Math.min(1, d)) * -42
    const sc = 1.06 - Math.min(a, 1) * 0.18 - Math.max(a - 1, 0) * 0.05
    return `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`
  })
  const opacity = useTransform(pos, (pv) => {
    const a = Math.abs(ringOffset(i, pv, N))
    return a <= 1 ? 1 : Math.max(0, 1 - (a - 1) * 0.4)
  })
  const zIndex = useTransform(pos, (pv) => 100 - Math.round(Math.abs(ringOffset(i, pv, N)) * 10))
  const pointerEvents = useTransform(opacity, (o) => (o < 0.05 ? 'none' : 'auto'))

  return (
    <motion.div
      className={`flow-item ${i === active ? 'is-active' : ''}`}
      style={{
        width: w, height: h, marginLeft: -w / 2, marginTop: -h / 2,
        transform, opacity, zIndex, pointerEvents,
      }}
      onClick={() => onSelect(i)}
      data-cursor="hover"
    >
      <div className="flow-media">
        <Media p={p} i={i} />
        <span className="flow-sheen" />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const items = projects
  const N = items.length
  const { w, h } = useCardSize()
  const spacing = Math.max(140, Math.min(240, w * 0.42))
  const reduce = useReducedMotion()

  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const active = ((index % N) + N) % N
  const go = useCallback((d) => setIndex((i) => i + d), [])
  const goTo = (i) => { let d = ((i - active + N) % N); if (d > N / 2) d -= N; setIndex((c) => c + d) }

  // one spring drives the whole flow — cards derive their transforms from it
  const idxMv = useMotionValue(0)
  const pos = useSpring(idxMv, reduce ? { stiffness: 1200, damping: 120 } : { stiffness: 210, damping: 28, mass: 1 })
  useEffect(() => { idxMv.set(index) }, [index, idxMv])

  // gentle cursor tilt of the whole assembly (specularity, not navigation)
  const tiltSpring = { stiffness: 90, damping: 18, mass: 0.6 }
  const rotX = useSpring(useMotionValue(0), tiltSpring)
  const rotY = useSpring(useMotionValue(0), tiltSpring)
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    rotY.set(nx * 8)
    rotX.set(-ny * 5)
  }
  const onLeave = () => { rotX.set(0); rotY.set(0) }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const onSelect = (i) => {
    if (Math.abs(ringOffset(i, active, N)) > Math.min(3, Math.floor((N - 1) / 2))) return
    if (i === active) setOpen(true)
    else goTo(i)
  }

  const cur = items[active]
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section className="folio">
      <p className="folio-eyebrow">Selected Work — {pad(N)}</p>

      <div className="folio-stage" onPointerMove={onMove} onPointerLeave={onLeave}>
        <div className="folio-persp" style={{ height: h }}>
          <motion.div className="folio-tilt" style={{ rotateX: rotX, rotateY: rotY }}>
            <div className="flow">
              {items.map((p, i) => (
                <FlowItem
                  key={i}
                  p={p} i={i} N={N} w={w} h={h} spacing={spacing}
                  pos={pos} active={active} onSelect={onSelect}
                />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="folio-floor" aria-hidden="true" />
      </div>

      <div className="folio-controls">
        {/* meta row (keyed CSS animation — remounts on change) */}
        <div className="folio-meta" key={active}>
          <span className="idx">{pad(active + 1)}</span>
          <span className="sep">/ {pad(N)}</span>
          <span className="sep">·</span>
          <span>{cur.category}</span>
          <span className="sep">·</span>
          <span>{cur.year}</span>
        </div>

        {/* modern minimal controls — the only way to change projects */}
        <div className="folio-nav">
          <button className="navc" onClick={() => go(-1)} aria-label="Previous project"><Chevron dir="left" /></button>
          <div className="navc-dots" role="tablist">
            {items.map((_, i) => (
              <button
                key={i}
                className={`navc-dot ${i === active ? 'on' : ''}`}
                aria-label={`Go to project ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button className="navc" onClick={() => go(1)} aria-label="Next project"><Chevron dir="right" /></button>
        </div>

        <Magnetic strength={0.2}>
          <button className="folio-open" onClick={() => setOpen(true)}>
            View project <span className="arrow">↗</span>
          </button>
        </Magnetic>
      </div>

      {/* detail modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="folio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="folio-card"
              initial={{ y: 40, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="folio-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
              <div className="folio-card-media"><Media p={cur} i={active} /></div>
              <div className="folio-card-body">
                <p className="page-index">{pad(active + 1)} / {pad(N)}</p>
                <h2 className="folio-card-title">{cur.title}</h2>
                <div className="folio-card-meta"><span>{cur.category}</span><span>·</span><span>{cur.year}</span></div>
                <p className="folio-card-desc">{cur.description}</p>
                <div className="folio-card-tags">
                  {cur.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                {cur.url && (
                  <Magnetic strength={0.2}>
                    <a className="btn primary mt-2" href={cur.url} target="_blank" rel="noreferrer">
                      View on GitHub <span className="arrow">↗</span>
                    </a>
                  </Magnetic>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
