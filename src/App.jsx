import { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Lenis from 'lenis'

import SiteBackground from './components/SiteBackground'
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
import Contact from './pages/Contact'

/* Reset scroll on every route change, and lock scrolling on the home screen
   so the index stays a single, no-scroll viewport. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const isHome = pathname === '/'
    document.body.classList.toggle('home-lock', isHome)
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

/* The home screen is a single no-scroll viewport, so it gets no footer. */
function ConditionalFooter() {
  const { pathname } = useLocation()
  if (pathname === '/') return null
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
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><Home /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef(0)

  // Lenis smooth scrolling, wired to drive the 3D background parallax.
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
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
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      <SiteBackground scrollRef={scrollRef} />
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
