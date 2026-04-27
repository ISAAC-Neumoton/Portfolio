import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// import { useCountUp } from '../../hooks/useCountUp';
import { useCountUp } from "../hooks/useCountUp";
import projects from "../data/projects.json";
// import projects from '../../data/projects.json';

/* ── Config (update yearly) ────────────────────────────── */
const YEARS_EXPERIENCE = 1;   // ← update each year

/* ── Animated stat item ────────────────────────────────── */
function StatItem({ label, value, suffix = '+', delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="
        text-center p-8 rounded-2xl relative overflow-hidden
        bg-[var(--color-dark-card)] border border-[var(--color-dark-border)]
        hover:border-[var(--color-primary)] transition-all duration-300
        group
      "
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,107,0,0.06) 0%, transparent 70%)' }}
      />

      <p
        className="text-5xl font-bold mb-2 relative z-10"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: 'var(--color-primary)',
          letterSpacing: '2px',
        }}
      >
        {count}{suffix}
      </p>
      <p className="text-sm text-[var(--color-text-muted)] font-medium uppercase tracking-widest relative z-10">
        {label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  // Happy clients = number of projects (auto-updates)
  const happyClients = projects.length;

  const stats = [
    { label: 'Years Experience', value: YEARS_EXPERIENCE, suffix: '+' },
    { label: 'Projects Done',    value: projects.length,  suffix: '+'  },
    { label: 'Happy Clients',    value: happyClients,     suffix: '+'  },
    { label: 'Technologies',     value: 12,               suffix: '+'  },
  ];

  return (
    <section id="stats" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,107,0,0.02) 50%, transparent 100%)' }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[var(--color-primary)] text-sm font-mono tracking-widest uppercase mb-2">
            — Numbers
          </p>
          <h2 className="section-title mb-12">
            My <span>Stats</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}