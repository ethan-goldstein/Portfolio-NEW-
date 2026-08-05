import { Link } from 'react-router-dom'
import { experience } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'
import GradualBlur from '../components/GradualBlur'

/* Work + education merged, newest first (ongoing entries sort to the top),
   then shown as side-by-side pairs down the timeline. */
const entries = [
  ...experience.work.map((w) => ({ ...w, kind: 'Work', title: w.role })),
  ...experience.school.map((s) => ({ ...s, kind: 'Education', title: s.degree })),
]

const endYear = (e) => {
  if (/present/i.test(e.period)) return 9999
  const m = /(\d{4})\s*$/.exec(e.period)
  return m ? Number(m[1]) : 0
}

const sorted = [...entries].sort((a, b) => endYear(b) - endYear(a))
const pairs = []
for (let i = 0; i < sorted.length; i += 2) pairs.push(sorted.slice(i, i + 2))

export default function Experience() {
  return (
    <section className="bgd bgd--xp">
      <div className="bgd-hero">
        <p className="page-index">05 · Experience</p>
        <h1 className="bgd-hero-title bgd-hero-title--sm">
          <FluidText text="The Journey" />
        </h1>
        <p className="bgd-hero-loc">Work &amp; education, scroll through the timeline.</p>
        <div className="bgd-scroll-cue" aria-hidden="true">
          SCROLL
          <span />
        </div>
      </div>

      {pairs.map((pair, pi) => (
        <div className="bgd-section bgd-section--duo" id={`xp-${pi}`} key={pi}>
          <div className="bgd-pair">
            {pair.map((e, ci) => (
              <Reveal key={`${e.org}-${e.title}`} delay={ci * 0.18} y={46} className="bgd-pair-slot">
                <article className="bgd-card">
                  <p className="bgd-kicker">{e.kind} · {e.period}</p>
                  <h2 className="bgd-xp-role">{e.title}</h2>
                  <p className="bgd-xp-org">{e.org} · {e.location}</p>
                  <ul className="bgd-points">
                    {e.points.map((p, j) => (
                      <li key={j}>
                        <div>{p}</div>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
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
            Next: Resume →
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
