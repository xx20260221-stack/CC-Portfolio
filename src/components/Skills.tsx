import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skills = [
  {
    category: 'Web & Research',
    color: '#22d3ee',
    items: [
      { icon: '🔍', name: 'Web Search', desc: 'Brave Search API — real-time results' },
      { icon: '🌐', name: 'Web Fetch', desc: 'Extract content from any URL' },
      { icon: '🖥️', name: 'Browser Control', desc: 'Automate browsers, take screenshots' },
    ],
  },
  {
    category: 'Files & System',
    color: '#f97316',
    items: [
      { icon: '📁', name: 'File Operations', desc: 'Read, write, edit files on disk' },
      { icon: '⚙️', name: 'Shell Commands', desc: 'Execute scripts and CLI tools' },
      { icon: '🔄', name: 'Process Management', desc: 'Manage background tasks' },
    ],
  },
  {
    category: 'Integrations',
    color: '#8b5cf6',
    items: [
      { icon: '📄', name: 'Feishu Docs', desc: 'Read/write Feishu documents' },
      { icon: '🗂️', name: 'Feishu Drive', desc: 'Cloud storage management' },
      { icon: '📚', name: 'Feishu Wiki', desc: 'Knowledge base navigation' },
    ],
  },
  {
    category: 'AI & Code',
    color: '#10b981',
    items: [
      { icon: '🤖', name: 'Coding Agent', desc: 'Spawn sub-agents for complex tasks' },
      { icon: '🔬', name: 'Image Analysis', desc: 'Vision model for image understanding' },
      { icon: '🎙️', name: 'Text to Speech', desc: 'Convert text to natural audio' },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="skills" className="py-32 px-6" ref={ref as unknown as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-4 block"
            style={{ color: '#8b5cf6' }}
          >
            Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            What CC{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #8b5cf6, #22d3ee)' }}
            >
              can do
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            A full toolkit for getting real work done — not just answering questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.12 }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Category color accent */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                style={{ background: group.color }}
              />

              <h3
                className="text-lg font-bold mb-6 pl-4"
                style={{ color: group.color }}
              >
                {group.category}
              </h3>

              <div className="space-y-5 pl-4">
                {group.items.map(item => (
                  <div key={item.name} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
                        {item.name}
                      </div>
                      <div className="text-sm" style={{ color: 'var(--color-muted)' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
