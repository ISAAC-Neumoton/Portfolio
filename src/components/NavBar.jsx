import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/scrollTo";
import { useTheme } from "../hooks/useTheme";

const NAV_LINKS = [
  { label: 'Home',     id: 'hero'     },
  { label: 'About',    id: 'about'    },
  { label: 'Projects', id: 'projects' },
  { label: 'Stats',    id: 'stats'    },
  { label: 'Contact',  id: 'contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { theme, toggleTheme }    = useTheme();
  const activeSection             = useActiveSection(NAV_LINKS.map(l => l.id));

  // Add shadow on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const handler = () => setMenuOpen(false);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [menuOpen]);

  const handleNav = (id) => {
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 300);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-[var(--color-bg)] border-b border-[var(--color-dark-border)] shadow-sm'
          : 'bg-[var(--color-bg)]'
        }
      `}
      style={{ height: 'var(--navbar-height)' }}
    >
      <div className="container-custom h-full flex items-center justify-between px-4">

        {/* Logo */}
        <button
          onClick={() => handleNav('hero')}
          className="font-display text-2xl tracking-widest text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors duration-200"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '3px' }}
        >
          integral <span style={{ color: 'var(--color-primary)' }}>di</span>
        </button>

        {/* Right controls */}
        <div className="flex items-center gap-3">

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleNav(id)}
                  className={`
                    nav-link text-sm font-medium tracking-wide transition-colors duration-200
                    relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px]
                    after:bg-[var(--color-primary)] after:transition-all after:duration-300
                    ${activeSection === id
                      ? 'text-[var(--color-primary)] after:w-full'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] after:w-0 hover:after:w-full'
                    }
                  `}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[var(--color-dark-border)] text-[var(--color-text-main)] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark'
              ? <FiSun  size={16} className="text-orange-500" />
              : <FiMoon size={16} className="text-gray-600"   />
            }
          </button>

          {/* Hire Me — DESKTOP ONLY */}
          <button
            onClick={() => handleNav('contact')}
            className="btn-primary hidden md:inline-flex"
          >
            Hire Me
          </button>

          {/* Hamburger — MOBILE ONLY */}
          <button
            className={`md:hidden flex flex-col gap-[6px] p-2 hamburger-button ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line bg-[var(--color-text-main)] h-[2px] w-6 block transition-all duration-300" />
            <span className="hamburger-line bg-[var(--color-text-main)] h-[2px] w-6 block transition-all duration-300" />
            <span className="hamburger-line bg-[var(--color-text-main)] h-[2px] w-6 block transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-b border-[var(--color-dark-border)]"
            style={{ backgroundColor: 'var(--color-bg)' }}
          >
            <ul className="flex flex-col py-4">
              {NAV_LINKS.map(({ label, id }, i) => (
                <motion.li
                  key={id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleNav(id)}
                    className={`
                      w-full text-left px-6 py-3 text-sm font-medium
                      border-l-2 transition-all duration-200
                      ${activeSection === id
                        ? 'border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/5'
                        : 'border-transparent text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]'
                      }
                    `}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}

              {/* Hire Me at bottom of drawer */}
              <li className="px-6 pt-4 pb-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-primary w-full justify-center"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}