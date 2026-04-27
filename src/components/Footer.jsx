import React from 'react';
import SocialIcons from './SocialICons';

export default function Footer() {
  return (
    <footer
      className="border-t py-8 text-center"
      style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}
    >
      <div className="container-custom flex flex-col items-center gap-4">
        {/* Copyright */}
        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
          © {new Date().getFullYear()} Umoh ISAAC. All rights reserved.
        </p>

      </div>
    </footer>
  );
}