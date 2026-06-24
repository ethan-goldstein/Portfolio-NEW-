import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { profile, nav } from '../content/data'
import FluidText from '../components/FluidText'
import Magnetic from '../components/Magnetic'

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.12 },
  }),
}

export default function Home() {
  // a couple of key chapters surfaced as "enter" links
  const quick = nav.filter((n) => ['/projects', '/background', '/contact'].includes(n.path))

  return (
    <section className="home">
      <motion.div variants={fade} custom={0} initial="hidden" animate="show" className="home-eyebrow">
        <span className="dot" />
        <span className="eyebrow">{profile.role} — {profile.availability}</span>
      </motion.div>

      <motion.h1 variants={fade} custom={1} initial="hidden" animate="show" className="home-title">
        <FluidText as="span" text="ETHAN" />
        <br />
        <FluidText as="span" className="l2" text="GOLDSTEIN" />
      </motion.h1>

      <motion.p variants={fade} custom={2} initial="hidden" animate="show" className="home-tagline">
        {profile.tagline}
      </motion.p>

      {/* bottom HUD corners */}
      <motion.div variants={fade} custom={3} initial="hidden" animate="show" className="home-hud bl">
        <div>{profile.location}</div>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </motion.div>

      <motion.div variants={fade} custom={3} initial="hidden" animate="show" className="home-hud br">
        <div className="home-enter">
          {quick.map((n) => (
            <Magnetic key={n.path} strength={0.3}>
              <Link to={n.path}>
                <span className="num">{n.id}</span> {n.label} →
              </Link>
            </Magnetic>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
