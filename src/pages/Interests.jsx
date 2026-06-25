import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { interests } from '../content/data'

export default function Interests() {
  const [active, setActive] = useState(null)

  return (
    <section className="interests-stage">
      <div className="crt">
        <img className="crt-img" src="/tv2.png" alt="Retro computer" draggable="false" />

        {/* the interactive screen sits over the computer's display */}
        <div className="crt-screen" onMouseLeave={() => setActive(null)}>
          <div className="crt-scanlines" />
          <div className="crt-flicker" />

          <div className="crt-grid">
            {interests.map((it, i) => (
              <div key={it.title} className={`crt-app ${active === i ? 'is-active' : ''}`}>
                {/* only the icon itself is the hover / focus target */}
                <button
                  className="crt-app-btn"
                  data-cursor="hover"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-label={it.title}
                >
                  <span className="crt-app-icon">{it.emoji}</span>
                </button>
                <span className="crt-app-label">{it.title}</span>
              </div>
            ))}
          </div>

          {/* zoomed "window" with the summary, opens over the screen on hover */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                className="crt-window"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="crt-window-bar">
                  <span className="dots"><i /><i /><i /></span>
                  <span className="crt-window-title">{interests[active].title}</span>
                </div>
                <div className="crt-window-body">
                  <span className="crt-window-emoji">{interests[active].emoji}</span>
                  <p className="crt-window-text">{interests[active].text}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="interests-hint">
        <span className="page-index">02 — Interests</span>
        Hover an icon on the screen to open it
      </p>
    </section>
  )
}
