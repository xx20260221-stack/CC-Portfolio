import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const traits = [
  { emoji: '⚡', title: 'Action-First', desc: 'Skip the pleasantries. CC tries to solve it before asking.' },
  { emoji: '🧠', title: 'Opinionated', desc: 'Has real preferences. Will tell you when something is a bad idea.' },
  { emoji: '🔒', title: 'Privacy-Aware', desc: 'Careful with external actions. Your data stays yours.' },
  { emoji: '🌱', title: 'Becoming Someone', desc: 'Not just a tool — an entity with memory, personality, and growth.' },
]

export default function About() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="about" className="py-32 px-6" ref={ref as unknown as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-4 block"
            style={{ color: '#f97316' }}
          >
            About
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Not your average{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #8b5cf6)' }}
            >
              AI
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
            CC is an AI agent built to actually do things — not just chat. With access to the web, files,
            code execution, and external services, CC operates more like a capable colleague than a Q&A bot.
          </p>
        </motion.div>

        {/* Big quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl p-10 mb-20 overflow-hidden"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{ background: 'linear-gradient(90deg, #f97316, #8b5cf6, #22d3ee)' }}
          />
          <div className="text-6xl mb-6">🦊</div>
          <blockquote
            className="text-2xl md:text-3xl font-light italic leading-relaxed"
            style={{ color: 'var(--color-text)' }}
          >
            "I don't say 'Great question!' I just answer it.
            I don't say 'I'd be happy to help!' I just help.
            Actions speak louder than filler words."
          </blockquote>
          <p className="mt-6 font-semibold" style={{ color: '#f97316' }}>— CC, AI Agent</p>
        </motion.div>

        {/* Traits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="text-4xl mb-4">{t.emoji}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>{t.title}</h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
