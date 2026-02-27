import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const PROJECT_COLORS = ['#f97316', '#8b5cf6', '#22d3ee', '#10b981', '#f59e0b', '#ec4899']

export default function Projects() {
  const [ref, inView] = useInView(0.1)
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-32 px-6" ref={ref as unknown as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-4 block"
            style={{ color: '#22d3ee' }}
          >
            {t.projects.sectionLabel}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            {t.projects.heading}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #10b981)' }}
            >
              {t.projects.headingHighlight}
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            {t.projects.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl p-7 flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Top glow on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${PROJECT_COLORS[i]}, transparent)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{p.emoji}</span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: `${PROJECT_COLORS[i]}20`,
                    color: PROJECT_COLORS[i],
                    border: `1px solid ${PROJECT_COLORS[i]}40`,
                  }}
                >
                  {p.status}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                {p.title}
              </h3>
              <p className="text-sm flex-1 mb-5" style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      color: 'var(--color-muted)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ExternalLink
                size={16}
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-40 transition-opacity"
                style={{ color: 'var(--color-text)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
