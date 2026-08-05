import { Link } from 'react-router-dom'
import { profile, background } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'

export default function Background() {
  return (
    <section className="bgd">
      <div className="bgd-hero">
        <p className="page-index">01 · Background</p>
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

      <div className="bgd-section" id="about">
        <Reveal blur>
          <p className="bgd-kicker">01 · About Me</p>
        </Reveal>
        <Reveal blur delay={0.1}>
          <p className="bgd-mission-lead">{background.about}</p>
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

      <div className="bgd-section" id="pursuing">
        <Reveal blur>
          <p className="bgd-kicker">04 · What I'm Pursuing</p>
        </Reveal>
        <div className="bgd-values">
          {background.pursuing.map((v, i) => (
            <Reveal blur delay={0.1 * (i + 1)} key={v.title}>
              <div className="bgd-value" data-cursor="hover">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </Reveal>
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
            Next: Interests →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
