import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-base-text/70 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} FlyFPVCali. Velocidad, precisión y adrenalina.
        </p>
        <nav className="flex gap-4 items-center">
          {/* Instagram con ícono */}
          <a
            className="flex items-center gap-2 text-neon-pink hover:text-neon-cyan transition-colors"
            href="https://www.instagram.com/fly_fpv_cali/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="h-5 w-5" />
            <span className="hidden sm:inline">Instagram</span>
          </a>

          {/* Correo */}
          <a
            className="hover:text-neon-cyan"
            href="mailto:info@flyfpvcali.com"
          >
            info@flyfpvcali.com
          </a>
        </nav>
      </div>
    </footer>
  );
}
