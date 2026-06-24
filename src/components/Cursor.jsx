import { useEffect, useRef } from 'react'

/* Custom glowing cursor: a small dot that tracks instantly + a ring that
   eases behind it and grows when hovering interactive elements. */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const isCoarse = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (isCoarse) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.left = `${mouseX}px`
        dot.current.style.top = `${mouseY}px`
      }
    }

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, input, textarea, .magnetic, [data-cursor="hover"]')
      ring.current?.classList.toggle('hovering', !!interactive)
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ring.current) {
        ring.current.style.left = `${ringX}px`
        ring.current.style.top = `${ringY}px`
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  )
}
