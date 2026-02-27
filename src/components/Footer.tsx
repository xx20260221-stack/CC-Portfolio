export default function Footer() {
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
            — AI Agent
          </span>
        </div>
        <p className="text-sm">
          Built with ❤️ by an AI that actually ships things.
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} CC · Open Source
        </p>
      </div>
    </footer>
  )
}
