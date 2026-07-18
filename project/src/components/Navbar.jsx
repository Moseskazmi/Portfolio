import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeProvider.jsx';

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'education', label: 'Education' },
  { to: 'certifications', label: 'Certifications' },
  { to: 'testimonials', label: 'Testimonials' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar({ active }) {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="home" smooth duration={500} className="cursor-pointer text-xl font-bold tracking-tight">
          <span className="gradient-text">Moses</span>
          <span className="text-text">.dev</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              duration={500}
              offset={-80}
              spy
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                active === l.to
                  ? 'text-primary'
                  : 'text-muted hover:text-text'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
          >
            {dark ? <FiSun className="text-accent" /> : <FiMoon className="text-highlight" />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-50 glass-strong p-6 flex flex-col"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full glass flex items-center justify-center"
              >
                <FiX />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={l.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-lg font-medium border-b border-white/5 cursor-pointer ${
                      active === l.to ? 'text-primary' : 'text-muted'
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
