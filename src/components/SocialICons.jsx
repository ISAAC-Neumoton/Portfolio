import React from 'react';
import {
  FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// import { socialLinks } from '../../data/socialLinks';
import { socialLinks } from "../data/socialLinks";

const ICON_MAP = {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  MdEmail,
};

/**
 * Renders a row of social icon links.
 * @param {string}  size      - Icon size (e.g. "18px")
 * @param {boolean} showLabel - Whether to show text labels
 */
export default function SocialIcons({ size = 18, showLabel = false }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {socialLinks.map(({ id, label, url, icon }) => {
        const Icon = ICON_MAP[icon];
        return (
          <a
            key={id}
            href={url}
            target={id === 'email' ? '_self' : '_blank'}
            rel= {id === 'email' ? undefined : 'noopener noreferrer'}
            aria-label={label}
            title={label}
            className="
              flex items-center gap-2
              w-9 h-9 rounded-full
              border border-[var(--color-dark-border)]
              bg-[var(--color-dark-card)]
              justify-center
              text-[var(--color-text-muted)]
              hover:text-[var(--color-primary)]
              hover:border-[var(--color-primary)]
              hover:bg-[rgba(255,107,0,0.08)]
              transition-all duration-200
              text-sm
            "
            style={{ fontSize: size }}
          >
            {Icon && <Icon />}
            {showLabel && <span className="text-xs font-medium">{label}</span>}
          </a>
        );
      })}
    </div>
  );
}