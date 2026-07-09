import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { experience } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'
import { lenisRef } from '../lib/lenis'

/* Work + education merged into one cinematic scroll journey. */
const entries = [
  ...experience.work.map((w) => ({ ...w, kind: 'Work', title: w.role })),
  ...experience.school.map((s) => ({ ...s, kind: 'Education', title: s.degree })),
]

/* Short pill labels for the sticky jump nav. */
const PILL_LABELS = {
  'Oxford Government Consulting': 'GovCIO',
  'The Baseball Zone': 'Baseball Zone',
  'University of South Carolina': 'USC',
  'Thomas S. Wootton High School': 'Wootton',
}

const SECTIONS = entries.map((e, i) => ({
  id: `xp-${i}`,
  label: PILL_LABELS[e.org] ?? e.org.split(' ')[0],
}))

export default function Experience() {
  const [active, setActive] = useState(SECTIONS[0].id)
  const [tabsOn, setTabsOn] = useState(false)

  // Track the section crossing mid-viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (obs) => {
        obs.forEach((e) => {
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

  // Reveal the jump nav once the hero is mostly scrolled past.
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
    <section className="bgd bgd--xp">
      <div className="bgd-hero">
        <p className="page-index">05 — Experience</p>
        <h1 className="bgd-hero-title bgd-hero-title--sm">
          <FluidText text="The Journey" />
        </h1>
        <p className="bgd-hero-loc">Work &amp; education — scroll through the timeline.</p>
        <div className="bgd-scroll-cue" aria-hidden="true">
          SCROLL
          <span />
        </div>
      </div>

      <nav className={`bgd-tabs${tabsOn ? ' on' : ''}`} aria-label="Experience entries">
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

      {entries.map((e, i) => (
        <div className="bgd-section" id={`xp-${i}`} key={`${e.org}-${i}`}>
          <Reveal>
            <p className="bgd-kicker">
              {String(i + 1).padStart(2, '0')} · {e.kind} — {e.period} · {e.location}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="bgd-xp-role">{e.title}</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="bgd-xp-org">{e.org}</p>
          </Reveal>
          <ul className="bgd-points">
            {e.points.map((p, j) => (
              <Reveal as="li" delay={0.18 + j * 0.06} key={j}>
                {p}
              </Reveal>
            ))}
          </ul>
        </div>
      ))}

      <div className="bgd-end">
        <Reveal>
          <span className="bgd-end-mark" aria-hidden="true">
            EG
          </span>
        </Reveal>
        <Reveal delay={0.12}>
          <Link className="bgd-next" to="/resume" data-cursor="hover">
            Next — Resume →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
