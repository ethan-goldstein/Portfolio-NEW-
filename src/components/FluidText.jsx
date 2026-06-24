import { useRef } from 'react'

/* Cursor-reactive heading. Each letter lifts, scales and brightens based on
   how close the cursor is — a smooth fluid "wave" that follows the pointer.
   Words are kept intact so they never break mid-word. */
export default function FluidText({ text, as = 'span', className = '', radius = 150 }) {
  const ref = useRef(null)
  const Tag = as

  const onMove = (e) => {
    const letters = ref.current?.querySelectorAll('[data-l]')
    if (!letters) return
    letters.forEach((l) => {
      const r = l.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const f = Math.max(0, 1 - Math.hypot(dx, dy) / radius)
      l.style.transform = `translateY(${-f * 28}px) scale(${1 + f * 0.38})`
      l.style.color = f > 0.04 ? `rgba(255,255,255,${0.55 + f * 0.45})` : ''
    })
  }

  const reset = () => {
    ref.current?.querySelectorAll('[data-l]').forEach((l) => {
      l.style.transform = ''
      l.style.color = ''
    })
  }

  const words = text.split(' ')

  return (
    <Tag ref={ref} className={`fluid-text ${className}`} onMouseMove={onMove} onMouseLeave={reset}>
      {words.map((word, wi) => (
        <span className="fluid-word" key={wi}>
          {word.split('').map((ch, ci) => (
            <span data-l key={ci}>
              {ch}
            </span>
          ))}
          {wi < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
