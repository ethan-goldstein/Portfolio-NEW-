import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, profile } from '../content/data'
import Magnetic from './Magnetic'
import MetallicPaint from './MetallicPaint'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Magnetic>
          <Link to="/" className="logo" aria-label="Home">
            <span className="logo-metal" aria-hidden="true">
              <MetallicPaint
                imageSrc="/eg-mark.svg"
                seed={42}
                scale={4}
                patternSharpness={1}
                noiseScale={0.5}
                speed={0.3}
                liquid={0.75}
                mouseAnimation={false}
                brightness={2}
                contrast={0.5}
                refraction={0.01}
                blur={0.015}
                chromaticSpread={2}
                fresnel={1}
                angle={0}
                waveAmplitude={1}
                distortion={1}
                contour={0.2}
                lightColor="#ffffff"
                darkColor="#000000"
                tintColor="#ffffff"
              />
            </span>
            <span className="sr-only">{profile.initials}</span>
          </Link>
        </Magnetic>

        <nav className="nav-links">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span className="num">{item.id}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {nav.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <span className="num">{item.id}</span> {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
