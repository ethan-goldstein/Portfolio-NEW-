import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, socials } from '../content/data'
import { SOCIAL_ICONS } from '../components/SocialIcons'

// The email button under the nodes: mailto on the left, copy-to-clipboard on
// the right. Same HUD language as the nodes (rim, glass, scanline) stretched
// into a pill, so it reads as part of the same instrument cluster.
function MailButton({ email }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)
  useEffect(() => () => clearTimeout(timer.current), [])

  const Gmail = SOCIAL_ICONS.gmail
  const [c1, c2] = BRAND_COLORS.gmail

  const copy = async () => {
    let ok = false
    try {
      await navigator.clipboard.writeText(email)
      ok = true
    } catch {
      // Clipboard API blocked or absent: the legacy selection path still works
      // in every browser that renders this page.
      const ta = document.createElement('textarea')
      ta.value = email
      ta.setAttribute('readonly', '')
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { ok = document.execCommand('copy') } catch { ok = false }
      ta.remove()
    }
    if (!ok) {
      // Nothing can copy here, so open mail, the only thing the visitor could
      // have wanted anyway.
      window.location.href = `mailto:${email}`
      return
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="me-mail" data-copied={copied || undefined} style={{ '--brand-color': c1, '--brand-color-2': c2 }}>
      {/* glass plate + gloss + scanline; purely decorative */}
      <span className="me-mail-hud" aria-hidden="true" />
      <a className="me-mail-send" href={`mailto:${email}`} data-cursor="hover" aria-label={`Email ${email}`}>
        <span className="me-mail-mark" aria-hidden="true">{Gmail ? <Gmail /> : null}</span>
        <span className="me-mail-addr">{email}</span>
        <span className="me-mail-arrow" aria-hidden="true">↗</span>
      </a>
      <button
        type="button"
        className="me-mail-copy"
        onClick={copy}
        data-cursor="hover"
        aria-label={copied ? 'Copied' : 'Copy email address'}
        title={copied ? 'Copied' : 'Copy address'}
      >
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        )}
      </button>
      <span className="me-mail-toast" role="status" aria-live="polite">{copied ? 'Copied' : ''}</span>
    </div>
  )
}

// Per-platform color pair [primary, accent]. Drives the rotating rim, the
// targeting brackets, and the glow on each HUD node (see .me-social in
// index.css). Second value is the chromatic counter-tone, not a brand color.
const BRAND_COLORS = {
  github: ['#A78BFA', '#22D3EE'],
  x: ['#1DA1F2', '#FFFFFF'],
  linkedin: ['#0A66C2', '#38BDF8'],
  // Not a node any more, but the mail button below the nodes keeps the pair.
  gmail: ['#EA4335', '#FBBC04'],
}
const FALLBACK_COLORS = ['#FFFFFF', '#9CA3AF']

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
            const [c1, c2] = BRAND_COLORS[s.icon] ?? FALLBACK_COLORS
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
                style={{ '--brand-color': c1, '--brand-color-2': c2 }}
              >
                {/* glass plate + gloss + scanline; purely decorative */}
                <span className="me-social-hud" aria-hidden="true" />
                {Icon ? <Icon /> : null}
              </a>
            )
          })}
        </div>

        <MailButton email={profile.email} />

        {profile.resumeUrl && (
          <a className="me-resume" href={profile.resumeUrl} target="_blank" rel="noreferrer" data-cursor="hover">
            ↓ Download Resume
          </a>
        )}
      </motion.div>
    </section>
  )
}
