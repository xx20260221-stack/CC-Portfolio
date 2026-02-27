import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function useTypingEffect(phrases: string[], speed = 80, pause = 1800) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let phraseIdx = 0
    let charIdx = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    function tick() {
      const el = ref.current
      if (!el) return
      const phrase = phrases[phraseIdx]

      if (!deleting) {
        charIdx++
        el.textContent = phrase.slice(0, charIdx)
        if (charIdx === phrase.length) {
          deleting = true
          timer = setTimeout(tick, pause)
          return
        }
      } else {
        charIdx--
        el.textContent = phrase.slice(0, charIdx)
        if (charIdx === 0) {
          deleting = false
          phraseIdx = (phraseIdx + 1) % phrases.length
        }
      }
      timer = setTimeout(tick, deleting ? speed / 2 : speed)
    }

    timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [phrases, speed, pause])

  return ref
}

export default function Hero() {
  const { t } = useLanguage()
  const typingRef = useTypingEffect(t.hero.typingPhrases as unknown as string[])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f97316, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: 'rgba(249,115,22,0.1)',
            border: '1px solid rgba(249,115,22,0.3)',
            color: '#f97316',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {t.hero.badge}
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none tracking-tight">
            <span className="text-8xl md:text-9xl">🦊</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #fb923c, #fbbf24)' }}
            >
              {t.hero.greeting}
            </span>
          </h1>
        </motion.div>

        {/* Typing subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-2xl md:text-3xl font-light mb-6"
          style={{ color: 'var(--color-muted)' }}
        >
          {t.hero.iAm}{' '}
          <span
            className="font-semibold border-r-2 pr-1"
            style={{ color: 'var(--color-text)', borderColor: '#f97316' }}
            ref={typingRef}
          />
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12"
          style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}
        >
          {t.hero.tagline}{' '}
          <span style={{ color: '#f97316' }}>{t.hero.taglineActs}</span>、
          <span style={{ color: '#8b5cf6' }}>{t.hero.taglineThinks}</span>、
          <span style={{ color: '#22d3ee' }}>{t.hero.taglineGets}</span>
          {t.hero.taglineSuffix}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              color: '#fff',
              boxShadow: '0 0 30px rgba(249,115,22,0.3)',
            }}
          >
            {t.hero.meetCC}
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105"
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            {t.hero.starGithub}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'var(--color-muted)' }}
        >
          <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, var(--color-muted), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
