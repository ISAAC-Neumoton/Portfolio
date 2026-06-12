import React from 'react';
import SocialIcons from './SocialIcons';
import { scrollToSection } from '../utils/scrollTo';

export default function Footer() {
  return (
    <footer
      className="border-t py-12 text-center"
      style={{ borderColor: 'var(--color-dark-border)', background: 'var(--color-bg)' }}
    >
      <div className="container-custom max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        
        {/* Navigational Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            ['Home', 'hero'],
            ['About', 'about'],
            ['Projects', 'projects'],
            ['Contact', 'contact']
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="hover:text-white transition-colors duration-200 font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Integrated Social Media Icons */}
        <div className="opacity-80 hover:opacity-100 transition-opacity duration-200">
          <SocialIcons size={16} />
        </div>

        {/* Copyright Metadata */}
        <p className="text-xs font-mono tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
          &copy; {new Date().getFullYear()} Umoh ISAAC. All rights reserved.
        </p>

      </div>
    </footer>
  );
}