import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { useActiveSection } from '../../hooks/useActiveSection';
// import { scrollToSection } from '../../utils/scrollTo';

import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/scrollTo";

const NAV_LINKS = [
  { label: 'Home',     id: 'hero'     },
  { label: 'About',    id: 'about'    },
  { label: 'Projects', id: 'projects' },
  { label: 'Stats',    id: 'stats'    },
  { label: 'Contact',  id: 'contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map(l => l.id));

  // Detect scroll to add background blur
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // const handleNav = (id) => {
  //   scrollToSection(id);
  //   setMenuOpen(false);
  // };
    const handleNav = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      scrollToSection(id);
    }, 300); // wait for menu close animation to finish first
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
          ? 'bg-[rgba(13,13,13,0.92)] backdrop-blur-md border-b border-[var(--color-dark-border)]'
          : 'bg-transparent'
        }
      `}
      style={{ height: 'var(--navbar-height)' }}
    >
      <div className="container-custom h-full flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => handleNav('hero')}
          className="font-display text-2xl tracking-widest hover:text-[var(--color-primary)] transition-colors duration-200"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '3px' }}
        >
          integral <span style={{ color: 'var(--color-primary)' }}>di</span>
        </button>

        {/* Desktop links */}
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
                    : 'text-[var(--color-text-muted)] hover:text-white after:w-0 hover:after:w-full'
                  }
                `}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA (desktop) */}
        <button
          onClick={() => handleNav('contact')}
          className="btn-primary hidden md:inline-flex"
        >
          Hire Me
        </button>

        {/* Hamburger (mobile) */}
        <button
          className={`md:hidden flex flex-col gap-[6px] p-2 ${menuOpen ? 'hamburger-open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
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
            className="md:hidden overflow-hidden bg-[rgba(13,13,13,0.97)] border-b border-[var(--color-dark-border)]"
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
                        ? 'border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(255,107,0,0.05)]'
                        : 'border-transparent text-[var(--color-text-muted)] hover:text-white hover:border-[var(--color-primary)]'
                      }
                    `}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
              <li className="px-6 pt-3 pb-2">
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