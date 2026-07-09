import { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Lenis from 'lenis'

import SiteBackground from './components/SiteBackground'
import CinematicBackdrop from './components/CinematicBackdrop'
import WavesBackdrop from './components/WavesBackdrop'
import { lenisRef } from './lib/lenis'

const ASSET = import.meta.env.BASE_URL + 'assets/'
/* Route-specific cinematic backdrops; everything else gets the fluid sim. */
const BACKDROPS = {
  '/background': {
    // true-alpha astronaut cutout: HEVC+alpha for Safari, VP9+alpha for Chrome/Firefox
    sources: [
      { src: ASSET + 'astro-alpha.mov', type: 'video/quicktime' },
      { src: ASSET + 'astro-alpha.webm', type: 'video/webm' },
    ],
    poster: ASSET + 'astro-poster.jpg',
    mode: 'scrub',
    lightColor: 'rgba(180, 150, 255, 0.10)',
    galaxy: true,
    videoFloat: true,
  },
}
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'

import Home from './pages/Home'
import Background from './pages/Background'
import Interests from './pages/Interests'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

/* Reset scroll on every route change, and lock scrolling on the home screen
   so the index stays a single, no-scroll viewport. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const noScroll = ['/', '/interests', '/projects', '/contact'].includes(pathname)
    document.body.classList.toggle('home-lock', noScroll)
    return () => document.body.classList.remove('home-lock')
  }, [pathname])
  return null
}

/* Fade/slide each page in and out. Skips animation under reduced motion. */
function PageTransition({ children }) {
  const reduce = useReducedMotion()
  if (reduce) return <main>{children}</main>
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}

/* Single no-scroll viewports (home + skills) get no footer. */
function ConditionalFooter() {
  const { pathname } = useLocation()
  if (['/', '/skills', '/interests', '/projects', '/background', '/contact', '/experience', '/resume'].includes(pathname))
    return null
  return <Footer />
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/background" element={<PageTransition><Background /></PageTransition>} />
        <Route path="/interests" element={<PageTransition><Interests /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><Home /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef(0)
  const { pathname } = useLocation()

  // Lenis smooth scrolling, wired to drive the 3D background parallax.
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenisRef.current = lenis
    lenis.on('scroll', (e) => {
      scrollRef.current = e.scroll
    })
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenisRef.current = null
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      <AnimatePresence mode="wait">
        {pathname === '/experience' ? (
          <WavesBackdrop key="waves" />
        ) : BACKDROPS[pathname] ? (
          <CinematicBackdrop key={pathname} {...BACKDROPS[pathname]} scrollRef={scrollRef} />
        ) : (
          <SiteBackground key="ether" />
        )}
      </AnimatePresence>
      <div className="bg-vignette" />
      <Cursor />
      <ScrollProgress />

      <div className="app-shell">
        <Navbar />
        <ScrollToTop />
        <AnimatedRoutes />
        <ConditionalFooter />
      </div>
    </>
  )
}
