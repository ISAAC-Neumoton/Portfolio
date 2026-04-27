import { useState, useEffect } from 'react';

/**
 * useActiveSection
 * Returns the id of the section currently in the viewport.
 * @param {string[]} sectionIds - Array of section ids to track.
 * @param {number}   offset     - Top offset in px (e.g. navbar height).
 */
export function useActiveSection(sectionIds, offset = 80) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset + 10;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActive(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handler, { passive: true });
    handler(); // run once on mount
    return () => window.removeEventListener('scroll', handler);
  }, [sectionIds, offset]);

  return active;
}