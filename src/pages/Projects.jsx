import { motion } from 'framer-motion'
import { projects } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'
import Magnetic from '../components/Magnetic'
import Pager from '../components/Pager'

function ProjectMedia({ media, title, category }) {
  if (!media) {
    return (
      <div className="placeholder">
        <span className="ph-text">{category} · add media in data.js</span>
      </div>
    )
  }
  return /\.(mp4|webm)$/i.test(media) ? (
    <video src={media} autoPlay muted loop playsInline />
  ) : (
    <img src={media} alt={title} />
  )
}

export default function Projects() {
  return (
    <>
      <div className="page container">
        <header className="page-header">
          <Reveal>
            <p className="page-index">04 — Projects</p>
            <h1 className="display"><FluidText text="Selected" /><br /><FluidText className="l2" text="Work" /></h1>
            <p className="lead mt-2">A handful of things I am proud of. Each one taught me something.</p>
          </Reveal>
        </header>

        <section style={{ paddingBottom: '2rem' }}>
          {projects.map((p, i) => (
            <article className="project" key={p.title}>
              <Reveal className="project-media r-image" as="div">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <ProjectMedia media={p.media} title={p.title} category={p.category} />
                </motion.div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <span className="project-index">{String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <div className="meta">
                    <span>{p.category}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                  <p className="text-dim">{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  {p.url && (
                    <div className="mt-2">
                      <Magnetic strength={0.2}>
                        <a className="btn ghost" href={p.url} target="_blank" rel="noreferrer">
                          View Project <span className="arrow">↗</span>
                        </a>
                      </Magnetic>
                    </div>
                  )}
                </div>
              </Reveal>
            </article>
          ))}
        </section>
      </div>
      <Pager current="/projects" />
    </>
  )
}
