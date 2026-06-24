import { background, profile } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'
import Pager from '../components/Pager'

export default function Background() {
  return (
    <>
      <div className="page container">
        <header className="page-header">
          <Reveal>
            <p className="page-index">01 — Background</p>
            <h1 className="display"><FluidText text="Who" /><br /><FluidText className="l2" text="I Am" /></h1>
          </Reveal>
        </header>

        {/* Mission */}
        <section className="section" style={{ paddingTop: 0 }}>
          <Reveal>
            <p className="eyebrow">Mission</p>
            <p className="lead mt-1" style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)', color: 'var(--fg)', maxWidth: '24ch' }}>
              {background.mission}
            </p>
          </Reveal>
        </section>

        {/* Facts */}
        <section className="section" style={{ paddingTop: 0 }}>
          <Reveal>
            <div className="facts">
              {background.facts.map((f) => (
                <div className="fact" key={f.label}>
                  <div className="num gradient-text">{f.value}</div>
                  <div className="lbl">{f.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Story */}
        <section className="section">
          <div className="split">
            <Reveal>
              <p className="page-index">My Story</p>
              <h2 className="section-title">The Long<br />Version</h2>
              <p className="text-dim mt-2">Based in {profile.location}.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="stack">
                {background.story.map((para, i) => (
                  <p key={i} className="lead">{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="section">
          <Reveal>
            <p className="page-index">How I Work</p>
            <h2 className="section-title">Principles</h2>
          </Reveal>
          <div className="grid cols-3 mt-3">
            {background.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="card">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
      <Pager current="/background" />
    </>
  )
}
