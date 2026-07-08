import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Scene from './three/Scene'

const VIDEO_SRC = import.meta.env.BASE_URL + 'assets/monolith.mp4'
const POSTER_SRC = import.meta.env.BASE_URL + 'assets/monolith-poster.jpg'

/* Cinematic backdrop for the Background page: the Higgsfield monolith loop
   with scroll parallax, a cursor-reactive light, drifting particles, film
   grain, and letterbox bars. Mounted by App (outside the routed tree) so
   position:fixed isn't re-anchored by PageTransition's transforms. */
export default function MonolithBackdrop({ scrollRef }) {
  const reduce = useReducedMotion()
  const [videoReady, setVideoReady] = useState(false)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  )
  const wrapRef = useRef(null)

  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 1200], [1.06, 1.18])
  const y = useTransform(scrollY, [0, 1200], ['0%', '-5%'])
  const dim = useTransform(scrollY, [0, 1200], [1, 0.55])
  const barScale = useTransform(scrollY, [0, 600], [1, 0.35])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const onChange = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Cursor-reactive light: rAF-throttled pointermove drives --mx/--my.
  useEffect(() => {
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return
    let raf = 0
    const onMove = (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const el = wrapRef.current
        if (!el) return
        el.style.setProperty('--mx', `${(e.clientX / window.innerWidth) * 100}%`)
        el.style.setProperty('--my', `${(e.clientY / window.innerHeight) * 100}%`)
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reduce])

  const showVideo = !reduce && !isMobile

  return (
    <motion.div
      ref={wrapRef}
      className="bgd-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {showVideo ? (
        <motion.video
          className="bgd-video"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          style={{ scale, y, opacity: dim }}
          data-ready={videoReady ? 'true' : 'false'}
        />
      ) : (
        <motion.img
          className={`bgd-video${reduce ? '' : ' kenburns'}`}
          src={POSTER_SRC}
          alt=""
          style={reduce ? undefined : { opacity: dim }}
        />
      )}

      {showVideo && (
        <div className="bgd-particles">
          <Scene scrollRef={scrollRef} />
        </div>
      )}

      <div className="bgd-light" />

      {!reduce ? (
        <>
          <motion.div className="bgd-letterbox top" style={{ scaleY: barScale }} />
          <motion.div className="bgd-letterbox bottom" style={{ scaleY: barScale }} />
          <div className="bgd-grain" />
        </>
      ) : (
        <>
          <div className="bgd-letterbox top" />
          <div className="bgd-letterbox bottom" />
        </>
      )}
    </motion.div>
  )
}
