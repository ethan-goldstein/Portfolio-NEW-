import { Link } from 'react-router-dom'
import { profile, socials } from '../content/data'
import Magnetic from './Magnetic'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="eyebrow">Let's connect</p>
            <Magnetic strength={0.15}>
              <a className="footer-big gradient-text" href={`mailto:${profile.email}`}>
                Say hi →
              </a>
            </Magnetic>
          </div>
          <div className="footer-socials">
            <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>Elsewhere</p>
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>
            <Link to="/">{profile.initials}</Link> · Built with React + Three.js
          </span>
        </div>
      </div>
    </footer>
  )
}
