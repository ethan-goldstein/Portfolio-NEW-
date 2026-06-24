import { Link } from 'react-router-dom'
import { nav } from '../content/data'

/* Prev / next page navigation, derived from the nav order. */
export default function Pager({ current }) {
  const idx = nav.findIndex((n) => n.path === current)
  const prev = nav[idx - 1]
  const next = nav[idx + 1]
  return (
    <div className="pager container">
      {prev ? (
        <Link to={prev.path} className="prev">
          <span className="lbl">← Prev {prev.id}</span>
          {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to={next.path} className="next">
          <span className="lbl">Next {next.id} →</span>
          {next.label}
        </Link>
      ) : (
        <Link to="/" className="next">
          <span className="lbl">Back to ↑</span>
          Home
        </Link>
      )}
    </div>
  )
}
