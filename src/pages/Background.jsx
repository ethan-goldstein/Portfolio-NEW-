import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useInView, animate } from 'framer-motion'
import { profile, background } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'

/* Count-up stat: leading number animates 0→n on first view, the rest of the
   value ("M+", "%", …) renders as a suffix. Non-numeric values just fade in. */
function StatCount({ value, label }) {
  const ref = useRef(null)
  const numRef = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const match = /^(\d+)(.*)$/.exec(value)

  useEffect(() => {
    if (!inView || !match || !numRef.current) return
    const target = parseInt(match[1], 10)
    const controls = animate(0, target, {
      duration: 1.4,
      ease: 'circOut',
      onUpdate: (v) => {
        if (numRef.current) numRef.current.textContent = Math.round(v)
      },
    })
    return () => controls.stop()
  }, [inView]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bgd-stat" ref={ref}>
      <span className="num gradient-text">
        {match ? (
          <>
            <span ref={numRef}>0</span>
            {match[2]}
          </>
        ) : (
          value
        )}
      </span>
      <span className="lbl">{label}</span>
    </div>
  )
}

export default function Background() {
  return (
    <section className="bgd">
      <div className="bgd-hero">
        <p className="page-index">01 — Background</p>
        <h1 className="bgd-hero-title">
          <FluidText text="WHO" />
          <br />
          <FluidText className="l2" text="I AM" />
        </h1>
        <p className="bgd-hero-loc">
          {profile.name} · {profile.location} / {profile.availability}
        </p>
        <div className="bgd-scroll-cue" aria-hidden="true">
          SCROLL
          <span />
        </div>
      </div>

      <div className="bgd-section" id="mission">
        <Reveal blur>
          <p className="bgd-kicker">01 · Mission</p>
        </Reveal>
        <Reveal blur delay={0.1}>
          <p className="bgd-mission-lead">{background.mission}</p>
        </Reveal>
      </div>

      <div className="bgd-section" id="story">
        <Reveal blur>
          <p className="bgd-kicker">02 · Story</p>
        </Reveal>
        {background.story.map((p, i) => (
          <Reveal blur delay={0.08 * (i + 1)} key={i}>
            <p className="bgd-story-p">{p}</p>
          </Reveal>
        ))}
      </div>

      <div className="bgd-section" id="values">
        <Reveal blur>
          <p className="bgd-kicker">03 · Values</p>
        </Reveal>
        <div className="bgd-values">
          {background.values.map((v, i) => (
            <Reveal blur delay={0.1 * (i + 1)} key={v.title}>
              <div className="bgd-value" data-cursor="hover">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bgd-section" id="stats">
        <Reveal blur>
          <p className="bgd-kicker">04 · By the numbers</p>
        </Reveal>
        <div className="bgd-stats">
          {background.facts.map((f) => (
            <StatCount key={f.label} value={f.value} label={f.label} />
          ))}
        </div>
      </div>

      <div className="bgd-end">
        <Reveal>
          <span className="bgd-end-mark" aria-hidden="true">
            {profile.initials}
          </span>
        </Reveal>
        <Reveal delay={0.12}>
          <Link className="bgd-next" to="/interests" data-cursor="hover">
            Next — Interests →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
