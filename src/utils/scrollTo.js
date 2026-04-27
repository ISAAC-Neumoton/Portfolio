/**
 * Smoothly scroll to an element by id.
 * @param {string} id       - The element id (without #).
 * @param {number} offset   - Additional top offset in pixels (default: 70 for navbar).
 */
export function scrollToSection(id, offset = 70) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}