import { Link } from 'react-router-dom'
import { experience } from '../content/data'
import Reveal from '../components/Reveal'
import MaskReveal from '../components/MaskReveal'
import FluidText from '../components/FluidText'
import GradualBlur from '../components/GradualBlur'

/* Work + education merged into one cinematic scroll journey. */
const entries = [
  ...experience.work.map((w) => ({ ...w, kind: 'Work', title: w.role })),
  ...experience.school.map((s) => ({ ...s, kind: 'Education', title: s.degree })),
]

export default function Experience() {
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

      {entries.map((e, i) => (
        <div className="bgd-section" id={`xp-${i}`} key={`${e.org}-${i}`}>
          <MaskReveal>
            <p className="bgd-kicker">
              {String(i + 1).padStart(2, '0')} · {e.kind} — {e.period} · {e.location}
            </p>
          </MaskReveal>
          <MaskReveal delay={0.08}>
            <h2 className="bgd-xp-role">{e.title}</h2>
          </MaskReveal>
          <MaskReveal delay={0.14}>
            <p className="bgd-xp-org">{e.org}</p>
          </MaskReveal>
          <ul className="bgd-points">
            {e.points.map((p, j) => (
              <MaskReveal as="li" delay={0.18 + j * 0.06} key={j}>
                {p}
              </MaskReveal>
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

      {/* content melts into blur at the bottom edge of the viewport */}
      <GradualBlur
        target="page"
        position="bottom"
        height="7rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
        zIndex={40}
      />
    </section>
  )
}
