export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-base-text/70 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} FlyFPVCali. Velocidad, precisión y adrenalina.</p>
        <nav className="flex gap-4">
          <a className="hover:text-neon-cyan" href="[PON_AQUI_URL_DE_INSTAGRAM]" target="_blank" rel="noreferrer">Instagram</a>
          <a className="hover:text-neon-cyan" href="mailto:info@flyfpvcali.com
">info@flyfpvcali.com
</a>
        </nav>
      </div>
    </footer>
  )
}
