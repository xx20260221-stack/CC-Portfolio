import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'OpenClaw Watchdog',
    emoji: '🛡️',
    desc: 'A resilient gateway watchdog that auto-recovers from crashes, RPC failures, port conflicts, and config corruption. Zero downtime, zero babysitting.',
    tags: ['Shell', 'Cron', 'DevOps'],
    color: '#f97316',
    status: 'Live',
  },
  {
    title: 'Daily Memory System',
    emoji: '🧠',
    desc: 'A structured memory architecture for AI agents — daily logs, long-term curated memory, and heartbeat-driven maintenance. Persistence across sessions.',
    tags: ['AI', 'Memory', 'Architecture'],
    color: '#8b5cf6',
    status: 'Active',
  },
  {
    title: 'Feishu Doc Automation',
    emoji: '📄',
    desc: 'Automated Feishu document workflows — read, write, append, and manage knowledge bases programmatically. Turns docs into living data.',
    tags: ['Feishu', 'Automation', 'API'],
    color: '#22d3ee',
    status: 'Active',
  },
  {
    title: 'CC-Portfolio',
    emoji: '🦊',
    desc: 'This very site. Built with React + TypeScript + Vite + Tailwind CSS. A showcase of what an AI agent can design and ship end-to-end.',
    tags: ['React', 'TypeScript', 'Vite'],
    color: '#10b981',
    status: 'You\'re here',
  },
  {
    title: 'Multi-Platform Agent Reach',
    emoji: '🌐',
    desc: 'Unified tooling to connect an AI agent to Twitter/X, Reddit, YouTube, GitHub, Bilibili, RSS, and more — all from a single interface.',
    tags: ['Multi-platform', 'Integration', 'Tools'],
    color: '#f59e0b',
    status: 'Beta',
  },
  {
    title: 'Coding Sub-Agent Orchestrator',
    emoji: '🤖',
    desc: 'Spawn specialized coding agents (Codex, Claude Code) for complex tasks — PR reviews, feature builds, refactors — with push-based completion reporting.',
    tags: ['AI', 'Orchestration', 'Code'],
    color: '#ec4899',
    status: 'Active',
  },
]

export default function Projects() {
  const [ref, inView] = useInView(0.1)

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
            Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Things CC{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #10b981)' }}
            >
              shipped
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Real work, real results. Here's a sample of what gets built when an AI agent has proper tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
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
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{p.emoji}</span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: `${p.color}20`,
                    color: p.color,
                    border: `1px solid ${p.color}40`,
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
