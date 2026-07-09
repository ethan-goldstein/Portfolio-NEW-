import { motion } from 'framer-motion'
import { profile, socials } from '../content/data'
import { SOCIAL_ICONS } from '../components/SocialIcons'

// Per-platform brand color, drives each icon's glossy glow.
const BRAND_COLORS = {
  github: '#A78BFA',
  x: '#1DA1F2',
  linkedin: '#0A66C2',
  gmail: '#EA4335',
  tiktok: '#25F4EE',
}

export default function Contact() {
  return (
    <section className="me">
      <motion.div
        className="me-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="me-photo">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} draggable="false" />
          ) : (
            <div className="me-photo-ph">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span>Add your photo<br />profile.photo</span>
            </div>
          )}
        </div>

        <p className="page-index">07 · Contact</p>
        <h1 className="me-name">{profile.name}</h1>
        <p className="me-role">{profile.role} · {profile.location}</p>

        <div className="me-socials">
          {socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.icon]
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="me-social"
                aria-label={s.label}
                title={s.label}
                data-cursor="hover"
                style={{
                  '--brand-color': BRAND_COLORS[s.icon],
                  ...(s.icon === 'tiktok' ? { '--brand-color-2': '#FE2C55' } : {}),
                }}
              >
                {Icon ? <Icon /> : null}
              </a>
            )
          })}
        </div>

        <a className="me-email" href={`mailto:${profile.email}`} data-cursor="hover">
          {profile.email}
        </a>

        {profile.resumeUrl && (
          <a className="me-resume" href={profile.resumeUrl} target="_blank" rel="noreferrer" data-cursor="hover">
            ↓ Download Resume
          </a>
        )}
      </motion.div>
    </section>
  )
}
