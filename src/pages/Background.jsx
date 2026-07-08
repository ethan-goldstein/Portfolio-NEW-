import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView, animate } from 'framer-motion'
import { profile, background } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'
import { lenisRef } from '../lib/lenis'

const SECTIONS = [
  { id: 'mission', label: 'Mission' },
  { id: 'story', label: 'Story' },
  { id: 'values', label: 'Values' },
  { id: 'stats', label: 'Stats' },
]

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
  const [active, setActive] = useState('mission')
  const [tabsOn, setTabsOn] = useState(false)

  // Track the section crossing mid-viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Reveal the tab nav once the hero is mostly scrolled past.
  useEffect(() => {
    const onScroll = () => setTabsOn(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const jump = (id) => {
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 84
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${id}`, { offset: -(navH + 24) })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

      <nav className={`bgd-tabs${tabsOn ? ' on' : ''}`} role="tablist" aria-label="Background sections">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`xp-tab${active === s.id ? ' active' : ''}`}
            data-cursor="hover"
            onClick={() => jump(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="bgd-section" id="mission">
        <Reveal>
          <p className="bgd-kicker">01 · Mission</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="bgd-mission-lead">{background.mission}</p>
        </Reveal>
      </div>

      <div className="bgd-section" id="story">
        <Reveal>
          <p className="bgd-kicker">02 · Story</p>
        </Reveal>
        {background.story.map((p, i) => (
          <Reveal delay={0.08 * (i + 1)} key={i}>
            <p className="bgd-story-p">{p}</p>
          </Reveal>
        ))}
      </div>

      <div className="bgd-section" id="values">
        <Reveal>
          <p className="bgd-kicker">03 · Values</p>
        </Reveal>
        <div className="bgd-values">
          {background.values.map((v, i) => (
            <Reveal delay={0.1 * (i + 1)} key={v.title}>
              <div className="bgd-value" data-cursor="hover">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bgd-section" id="stats">
        <Reveal>
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
