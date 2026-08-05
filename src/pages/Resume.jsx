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
          <p className="page-index">06 · Resume</p>
          <a className="me-resume" href={profile.resumeUrl} download={profile.resumeFilename} data-cursor="hover">
            ↓ Download PDF
          </a>
        </div>

        <div className="resume-frame">
          <iframe src={`${profile.resumeUrl}#view=FitH`} title={`${profile.name} resume`} />
        </div>
      </motion.div>
    </section>
  )
}
