import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { background, profile } from '../content/data'
import FluidText from '../components/FluidText'

const tabs = [
  { id: 'mission', label: 'Mission' },
  { id: 'story', label: 'Story' },
  { id: 'values', label: 'Values' },
]

export default function Background() {
  const [tab, setTab] = useState('mission')

  return (
    <section className="about">
      <div className="about-panel">
        <div className="about-left">
          <p className="page-index">01 — Background</p>
          <h1 className="about-title">
            <FluidText text="WHO" /><br />
            <FluidText className="l2" text="I AM" />
          </h1>
          <p className="about-loc">
            {profile.name} · {profile.location}<br />
            <span className="about-avail">{profile.availability}</span>
          </p>

          <div className="about-facts">
            {background.facts.map((f) => (
              <div className="about-fact" key={f.label}>
                <span className="num gradient-text">{f.value}</span>
                <span className="lbl">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="about-tabs" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`about-tab ${tab === t.id ? 'on' : ''}`}
                onClick={() => setTab(t.id)}
                data-cursor="hover"
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="about-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {tab === 'mission' && <p className="about-lead">{background.mission}</p>}

                {tab === 'story' && (
                  <div className="about-story">
                    {background.story.map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                )}

                {tab === 'values' && (
                  <div className="about-values">
                    {background.values.map((v) => (
                      <div className="about-value" key={v.title} data-cursor="hover">
                        <h3>{v.title}</h3>
                        <p>{v.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
