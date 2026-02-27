import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Github, Star } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const [ref, inView] = useInView(0.2)
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-32 px-6" ref={ref as unknown as React.RefObject<HTMLElement>}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-4 block"
            style={{ color: '#f97316' }}
          >
            {t.contact.sectionLabel}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            {t.contact.heading}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #fbbf24)' }}
            >
              {t.contact.headingHighlight}
            </span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
            {t.contact.desc}
          </p>
        </motion.div>

        {/* Star CTA card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl p-12 overflow-hidden"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(ellipse at center, #f97316 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10">
            <div className="text-7xl mb-6">🦊</div>
            <h3 className="text-3xl font-black mb-4" style={{ color: 'var(--color-text)' }}>
              {t.contact.cardTitle}
            </h3>
            <p className="text-lg mb-8" style={{ color: 'var(--color-muted)' }}>
              {t.contact.cardDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: '#fff',
                  boxShadow: '0 0 40px rgba(249,115,22,0.4)',
                }}
              >
                <Star size={20} fill="currentColor" />
                {t.contact.starBtn}
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                }}
              >
                <Github size={20} />
                {t.contact.sourceBtn}
              </a>
            </div>

            {/* Stats row */}
            <div className="flex justify-center gap-12 mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
              {t.contact.stats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black mb-1" style={{ color: '#f97316' }}>{s.value}</div>
                  <div className="text-sm" style={{ color: 'var(--color-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
