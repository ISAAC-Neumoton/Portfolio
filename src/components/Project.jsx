import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';
// import projects from '../../data/projects.json';
import projects from "../data/projects.json";

/* ── Reveal wrapper ────────────────────────────────────── */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Project Card ──────────────────────────────────────── */
function ProjectCard({ title, description, image, tags, projectLink, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="card group block h-full"
        aria-label={`Open project: ${title}`}
      >
        {/* Image area */}
        <div
          className="relative h-44 overflow-hidden bg-[#222]"
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          ) : (
            /* Placeholder gradient when image is missing */
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)' }}
            >
              <span
                className="text-4xl opacity-20"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: 'var(--color-primary)' }}
              >
                {title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}

          {/* Hover overlay with external link icon */}
          <div className="absolute inset-0 bg-[rgba(255,107,0,0.12)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <FiExternalLink size={28} color="#FF6B00" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-dark-border)] text-[var(--color-text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">

        {/* Heading */}
        <Reveal>
          <p className="text-[var(--color-primary)] text-sm font-mono tracking-widest uppercase mb-2">
            — My Work
          </p>
          <h2 className="section-title mb-4">
            Featured <span>Projects</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-lg mb-12">
            Click any project to view the source code or live demo.
          </p>
        </Reveal>

        {/* Grid — auto-fills from projects.json */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}