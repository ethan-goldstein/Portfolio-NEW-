import { useState } from 'react'
import { contact, socials, profile } from '../content/data'
import Reveal from '../components/Reveal'
import FluidText from '../components/FluidText'
import Magnetic from '../components/Magnetic'
import Pager from '../components/Pager'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // No backend needed: opens the visitor's email client pre-filled.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'someone'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <div className="page container">
        <header className="page-header">
          <Reveal>
            <p className="page-index">06 — Contact</p>
            <h1 className="display"><FluidText text={contact.headline} /></h1>
            <p className="lead mt-2">{contact.subtext}</p>
          </Reveal>
        </header>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="contact-grid">
            <Reveal>
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" value={form.name} onChange={update('name')} placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={form.email} onChange={update('email')} placeholder="you@email.com" required />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" value={form.message} onChange={update('message')} placeholder="Tell me about your project…" required />
                </div>
                <Magnetic strength={0.2}>
                  <button type="submit" className="btn primary">
                    Send Message <span className="arrow">↗</span>
                  </button>
                </Magnetic>
                <p className="form-note">
                  This opens your email app. Prefer direct?{' '}
                  <a href={`mailto:${contact.email}`} style={{ color: 'var(--accent-2)' }}>{contact.email}</a>
                </p>
              </form>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <p className="eyebrow">Find me</p>
                <div className="contact-list mt-1">
                  {socials.map((s) => (
                    <a key={s.label} href={s.url} target="_blank" rel="noreferrer" data-cursor="hover">
                      <span>{s.label}</span>
                      <span className="h">{s.handle}</span>
                    </a>
                  ))}
                </div>
                <p className="text-dim mt-3">
                  Based in {profile.location}. {profile.availability}.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
      <Pager current="/contact" />
    </>
  )
}
