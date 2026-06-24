import { motion, useReducedMotion } from 'framer-motion'
import { skills } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'
import Marquee from '../components/Marquee'
import Pager from '../components/Pager'

function SkillRow({ name, level }) {
  const reduce = useReducedMotion()
  return (
    <div className="skill-row">
      <div className="top">
        <span>{name}</span>
        <span className="pct">{level}%</span>
      </div>
      <div className="skill-bar">
        {reduce ? (
          <i style={{ width: `${level}%` }} />
        ) : (
          <motion.i
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <>
      <div className="page container">
        <header className="page-header">
          <Reveal>
            <p className="page-index">03 — Skills</p>
            <h1 className="display"><FluidText text="The" /><br /><FluidText className="l2" text="Toolkit" /></h1>
            <p className="lead mt-2">What I bring to the table — and how deep it runs.</p>
          </Reveal>
        </header>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="grid cols-3" style={{ alignItems: 'start' }}>
            {skills.groups.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 0.12}>
                <div className="skill-group">
                  <h3>{group.title}</h3>
                  {group.items.map((s) => (
                    <SkillRow key={s.name} name={s.name} level={s.level} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <Marquee items={skills.tags} duration={30} />

      <div className="container section">
        <Reveal>
          <p className="page-index">Also in the mix</p>
          <div className="tag-cloud mt-2">
            {skills.tags.map((t) => (
              <span className="tag" key={t} data-cursor="hover">{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
      <Pager current="/skills" />
    </>
  )
}
