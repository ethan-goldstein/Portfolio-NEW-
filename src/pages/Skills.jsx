import { motion } from 'framer-motion'
import { skills } from '../content/data'
import TiltedCard from '../components/TiltedCard'
import FluidText from '../components/FluidText'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'

export default function Skills() {
  return (
    <section className="skills-page">
      <header className="skills-head">
        <p className="page-index">03 — Skills</p>
        <h1 className="skills-title"><FluidText text="The Toolkit" /></h1>
      </header>

      <div className="skills-grid">
        {skills.cards.map((c, i) => (
          <motion.div
            className="skill-card"
            key={c.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 + i * 0.035 }}
          >
            <div className="skill-card-tilt">
              <TiltedCard
                imageSrc={`${DEVICON_BASE}/${c.icon}.svg`}
                altText={c.name}
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.12}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
            <span className="skill-label">{c.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
