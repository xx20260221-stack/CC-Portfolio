import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-muted)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-semibold" style={{ color: 'var(--color-text)' }}>
          <span>🦊</span>
          <span>CC</span>
          <span className="font-normal text-sm" style={{ color: 'var(--color-muted)' }}>
            {t.footer.tagline}
          </span>
        </div>
        <p className="text-sm">
          {t.footer.built}
        </p>
        <p className="text-sm">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
