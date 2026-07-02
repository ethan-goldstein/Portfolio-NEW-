import { motion } from 'framer-motion'
import { profile } from '../content/data'

export default function Resume() {
  return (
    <section className="resume-page">
      <motion.div
        className="resume-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="resume-head">
          <p className="page-index">06 — Resume</p>
          <a className="me-resume" href={profile.resumeUrl} download data-cursor="hover">
            ↓ Download PDF
          </a>
        </div>

        <div className="resume-frame">
          <object data={profile.resumeUrl} type="application/pdf" aria-label={`${profile.name} resume`}>
            {/* Fallback for browsers without inline PDF support (most mobile) */}
            <div className="resume-fallback">
              <p>Your browser can't display the PDF inline.</p>
              <a className="me-resume" href={profile.resumeUrl} download data-cursor="hover">
                ↓ Download Resume
              </a>
            </div>
          </object>
        </div>
      </motion.div>
    </section>
  )
}
