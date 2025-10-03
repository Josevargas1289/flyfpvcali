import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useToggle } from '@/hooks/useToggle';
import { useLockBody } from '@/hooks/useLockBody';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa'; // 📌 FontAwesome

const nav = [
  { to: '/', label: 'Inicio' },
  { to: '/equipo', label: 'Equipo' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/galeria', label: 'Galería' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const { on, toggle, setOn } = useToggle(false);
  useLockBody(on);
  const location = useLocation();

  useEffect(() => {
    setOn(false);
  }, [location.pathname, setOn]);

  return (
    <header
      className="sticky top-0 z-50 bg-[#0B0F14] 
             border-b border-[#00FFF0]/20 
             shadow-[0_0_4px_#00FFF0]/30"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2">
          <img src="/logo.svg" alt="FlyFPVCali" className="h-10 w-auto drop-shadow-neon" />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {nav.map((n) => (
            <motion.div
              key={n.to}
              whileHover={{
                scale: 1.1,
                textShadow: '0 0 6px #00FFF0, 0 0 12px #00FFF0',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <NavLink
                to={n.to}
                className={({ isActive }) =>
                  `text-sm transition-colors duration-300 ${
                    isActive
                      ? 'text-neon-cyan font-semibold drop-shadow-[0_0_6px_#00FFF0]'
                      : 'text-white hover:text-neon-cyan'
                  }`
                }
              >
                {n.label}
              </NavLink>
            </motion.div>
          ))}
          {/* Solo ícono en desktop */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 5,
              filter: 'drop-shadow(0 0 8px #FF00AA)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a
              href="https://www.instagram.com/fly_fpv_cali/"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <FaInstagram className="h-6 w-6 text-neon-pink hover:text-neon-cyan transition-colors" />
            </a>
          </motion.div>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 rounded-lg border border-white/10"
          onClick={toggle}
          aria-expanded={on}
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
        >
          {on ? <X /> : <Menu />}
        </button>
      </div>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {on && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0F14]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Close button */}
            <button
              onClick={toggle}
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-white/10"
            >
              <X className="h-7 w-7 text-white" />
            </button>

            {/* Links */}
            <motion.ul
              className="flex flex-col items-center gap-6 text-2xl font-bold text-white"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {nav.map((n) => (
                <motion.li
                  key={n.to}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1, color: '#00FFF0' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <NavLink to={n.to} className="hover:text-neon-cyan transition-colors">
                    {n.label}
                  </NavLink>
                </motion.li>
              ))}
              {/* Ícono + texto solo en mobile */}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.1, color: '#FF00AA' }}
                className="flex items-center gap-2"
              >
                <a
                  href="https://www.instagram.com/fly_fpv_cali/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-neon-pink hover:text-neon-cyan transition-colors"
                >
                  <FaInstagram className="h-7 w-7" />
                  <span>Instagram</span>
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
