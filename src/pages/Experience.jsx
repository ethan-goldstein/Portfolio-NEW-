import { experience, profile } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'
import Magnetic from '../components/Magnetic'
import Pager from '../components/Pager'

function Timeline({ items, kind }) {
  return (
    <div className="timeline">
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 0.08} className="tl-item">
          <div className="tl-period">{it.period} · {it.location}</div>
          <h3 className="tl-role">{kind === 'work' ? it.role : it.degree}</h3>
          <div className="tl-org">{it.org}</div>
          <ul className="tl-points">
            {it.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  )
}

export default function Experience() {
  return (
    <>
      <div className="page container">
        <header className="page-header">
          <Reveal>
            <p className="page-index">05 — Experience</p>
            <h1 className="display"><FluidText text="Where" /><br /><FluidText className="l2" text="I've Been" /></h1>
            <p className="lead mt-2">The work and the education that shaped how I think and create.</p>
          </Reveal>
        </header>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="split">
            <div>
              <Reveal>
                <p className="page-index">Work</p>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}>Experience</h2>
              </Reveal>
              <Timeline items={experience.work} kind="work" />
            </div>
            <div>
              <Reveal>
                <p className="page-index">Education</p>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}>School</h2>
              </Reveal>
              <Timeline items={experience.school} kind="school" />
            </div>
          </div>
        </section>

        {profile.resumeUrl && (
          <section className="section" style={{ paddingTop: 0 }}>
            <Reveal>
              <Magnetic strength={0.2}>
                <a className="btn primary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  Download Résumé <span className="arrow">↗</span>
                </a>
              </Magnetic>
            </Reveal>
          </section>
        )}
      </div>
      <Pager current="/experience" />
    </>
  )
}
