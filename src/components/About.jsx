import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/* ── Animated section wrapper ──────────────────────────── */
function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Skill bar ─────────────────────────────────────────── */
function SkillBar({ label, percent, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-sm text-[var(--color-primary)]">{percent}%</span>
      </div>
      <div className="h-1.5 bg-[var(--color-dark-border)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--color-primary), #FF9A3C)' }}
        />
      </div>
    </div>
  );
}

const SKILLS = [
  { label: 'Python & Pandas',    percent: 90 },
  { label: 'Machine Learning',   percent: 82 },
  { label: 'Data Visualisation', percent: 88 },
  { label: 'SQL & Databases',    percent: 78 },
  { label: 'Power BI / Tableau', percent: 85 },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">

        {/* ── Heading ─────────────────────────────────── */}
        <RevealSection>
          <p className="text-[var(--color-primary)] text-sm font-mono tracking-widest uppercase mb-2">
            — Who I Am
          </p>
          <h2 className="section-title mb-12">
            About <span>Me</span>
          </h2>
        </RevealSection>

        {/* ── Two-column layout ───────────────────────── */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left: bio */}
          <div>
            <RevealSection delay={0.1}>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                Hi, I'm a passionate <span className="text-white font-medium">Data Analyst &amp; Machine Learning engineer</span> with
                over 1 year of hands-on experience turning raw data into actionable
                insights. I specialise in building end-to-end ML pipelines, interactive
                dashboards, and data-driven products.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                I enjoy working at the intersection of statistics, programming, and
                design — making complex data approachable and beautiful.
              </p>
            </RevealSection>

            {/* Highlights */}
            <RevealSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['Name',       'Umoh ISAAC'         ],
                  ['Email',      'issacujay@gmail.com'     ],
                  ['Location',   'Lagos, Nigeria'     ],
                  ['Availability', 'Open to work'    ],
                ].map(([key, val]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-0.5">{key}</span>
                    <span className="text-sm font-medium text-white">{val}</span>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>

          {/* Right: skills */}
          <div>
            <RevealSection delay={0.15}>
              <h3 className="text-lg font-semibold text-white mb-6">
                Technical Skills
              </h3>
              {SKILLS.map((s, i) => (
                <SkillBar key={s.label} {...s} delay={i * 0.08} />
              ))}
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}