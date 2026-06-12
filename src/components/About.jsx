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
    <div ref={ref} className="mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="flex justify-between mb-1">
        {/* Fixed Label Color: Uses text-main for explicit visibility in both themes */}
        <span className="text-sm font-semibold transition-colors duration-200" style={{ color: 'var(--color-text-main)' }}>
          {label}
        </span>
        <span className="text-sm text-[var(--color-primary)] font-bold">{percent}%</span>
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
  { label: 'Python & Pandas',     percent: 90 },
  { label: 'Machine Learning',    percent: 82 },
  { label: 'Data Visualisation',  percent: 88 },
  { label: 'SQL & Databases',    percent: 78 },
  { label: 'Power BI / Tableau',  percent: 85 },
];

const EXPERTISE_PILLARS = [
  {
    title: "Sales & Product Performance Analytics",
    desc: "Evaluating baseline transaction health, engineering retail performance metrics, and delivering macro revenue visibility. I map pricing intelligence and product-level trends directly to high-impact automated reporting frameworks.",
    skills: ["E-commerce Sales Analysis", "Product Revenue Breakdown", "Sales Team Performance", "Retail Performance Tracking", "Pricing Analytics", "Executive C-suite Reporting"]
  },
  {
    title: "Advanced Machine Learning & Predictive Systems",
    desc: "Deploying regression, time-series forecasting, and classification algorithms where basic dashboards reach their analytical limits. I isolate risk metrics to proactively capture retention indicators and structural market shifts.",
    skills: ["Sales Forecasting", "Customer Churn Prediction", "Customer Lifetime Value (CLV)", "Competitive Pricing Intelligence", "Financial Services & Insurance Risk"]
  },
  {
    title: "Marketing, Funnel & Attribution Optimization",
    desc: "Auditing multi-channel promotional investments and traffic mechanics. I dissect conversion drop-offs from entry points to pipeline velocity markers, providing empirical backing to performance marketing budgets.",
    skills: ["Marketing Campaign ROI", "Paid Ad Attribution Models", "Web Traffic & Conversion Funnels (GA4)", "Lead Funnel Analysis", "Restaurant & Food Menu Engineering"]
  },
  {
    title: "Logistics, Supply Chain & Social Intelligence",
    desc: "Mapping physical fulfillment overhead alongside digital audience behavior. I build tracking workflows to counter route frictions, balance inventory limits, and extract qualitative product feedback directly from source code scrapers.",
    skills: ["Inventory & Supply Chain Analysis", "Logistics & Delivery Tracking", "Social Media Engagement & Sentiment", "Real Estate Geospatial Analytics"]
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding transition-colors duration-300" style={{ background: 'var(--color-bg)', fontFamily: "'Poppins', sans-serif" }}>
      <div className="container-custom max-w-6xl mx-auto px-4">

        {/* ── Heading ─────────────────────────────────── */}
        <RevealSection>
          <p className="text-[var(--color-primary)] text-sm font-mono tracking-widest uppercase mb-2">
            Who I Am
          </p>
          <h2 className="section-title text-4xl font-extrabold mb-12 transition-colors duration-200" style={{ color: 'var(--color-text-main)' }}>
            About <span className="text-[var(--color-primary)]">Me</span>
          </h2>
        </RevealSection>

        {/* ── Top Section: Core Philosophy & Info ─────── */}
        <div className="grid md:grid-cols-5 gap-10 items-start mb-16">
          
          {/* Left: Philosophy Bio */}
          <div className="md:col-span-3 space-y-4">
            <RevealSection delay={0.1}>
              <p className="text-lg font-medium leading-relaxed transition-colors duration-200" style={{ color: 'var(--color-text-main)' }}>
                I approach commercial ecosystems from First Principles. 
                Rather than treating data as isolated numbers, I reconstruct it to reveal the true underlying mechanics of your business metrics.
              </p>
              <p className="text-base leading-relaxed mt-2 transition-colors duration-200" style={{ color: 'var(--color-text-muted)' }}>
                Specializing in the alignment of sales pipelines, logistics architecture, customer behavior analytics, and performance advertising metrics. I design technical systems that turn fragmented data loops into streamlined commercial growth levers.
              </p>
            </RevealSection>

            {/* Streak Highlights Banner */}
            <RevealSection delay={0.15}>
              <div 
                className="p-5 border-l-4 border-[var(--color-primary)] rounded-r-md mt-6 transition-all duration-300 bg-gray-50 dark:bg-[#141414] border border-y-[var(--color-dark-border)] border-r-[var(--color-dark-border)]"
              >
                <span className="text-[var(--color-primary)] font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                  Engineering Execution
                </span>
                <p className="text-sm transition-colors duration-200 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Currently running an active, continuous 100-Day Machine Learning Streak in cloud-hosted development environments, committing automated data preprocessing and predictive pipeline scripts daily.
                </p>
              </div>
            </RevealSection>
          </div>

          {/* Right: Technical Metadata Bars */}
          <div 
            className="md:col-span-2 p-6 rounded-lg border transition-all duration-300 bg-gray-50 dark:bg-[#141414]" 
            style={{ borderColor: 'var(--color-dark-border)' }}
          >
            <RevealSection delay={0.2}>
              <h3 
                className="text-xs font-mono tracking-widest uppercase mb-6 pb-2 border-b transition-colors duration-200 font-bold" 
                style={{ color: 'var(--color-text-main)', borderColor: 'var(--color-dark-border)' }}
              >
                Core Metrics
              </h3>
              {SKILLS.map((s, i) => (
                <SkillBar key={s.label} {...s} delay={i * 0.05} />
              ))}
            </RevealSection>
          </div>

        </div>

        {/* ── Bottom Section: Capability Grid ── */}
        <RevealSection delay={0.25}>
          <div className="mb-6">
            <p className="text-[var(--color-primary)] text-sm font-mono tracking-widest uppercase mb-2">
              Strategic Solutions
            </p>
            <h4 className="text-2xl font-bold mb-8 transition-colors duration-200" style={{ color: 'var(--color-text-main)' }}>
              Commercial Focus Areas
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {EXPERTISE_PILLARS.map((pillar) => (
              <div 
                key={pillar.title} 
                className="p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between bg-gray-50 dark:bg-[#111111] hover:shadow-md dark:hover:border-[var(--color-primary)]/40"
                style={{ borderColor: 'var(--color-dark-border)' }}
              >
                <div>
                  <h5 className="text-lg font-bold mb-3 transition-colors duration-200" style={{ color: 'var(--color-text-main)' }}>
                    {pillar.title}
                  </h5>
                  <p className="text-sm leading-relaxed mb-6 transition-colors duration-200" style={{ color: 'var(--color-text-muted)' }}>
                    {pillar.desc}
                  </p>
                </div>
                
                {/* Clean, Legible Tag Badges */}
                <div 
                  className="flex flex-wrap gap-2 pt-4 border-t transition-colors duration-200" 
                  style={{ borderColor: 'var(--color-dark-border)' }}
                >
                  {pillar.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-[11px] font-medium font-mono px-2.5 py-1 rounded-md border transition-all duration-200 bg-white dark:bg-[#1c1c1c]"
                      style={{ 
                        borderColor: 'var(--color-dark-border)', 
                        color: 'var(--color-text-main)' 
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* ── Quick Contact Metadata Footer ── */}
        <RevealSection delay={0.3}>
          <div className="mt-16 pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 transition-colors duration-200" style={{ borderColor: 'var(--color-dark-border)' }}>
            {[
              ['Profile Name', 'Umoh ISAAC'],
              ['Direct Contact', 'isaacujay@gmail.com'],
              ['Current Base', 'Lagos, Nigeria'],
              ['Availability', 'Open to Engagements'],
            ].map(([key, val]) => (
              <div key={key} className="flex flex-col">
                <span className="text-[10px] uppercase font-mono tracking-widest mb-0.5 transition-colors duration-200" style={{ color: 'var(--color-text-muted)' }}>{key}</span>
                <span className="text-sm font-semibold transition-colors duration-200" style={{ color: 'var(--color-text-main)' }}>{val}</span>
              </div>
            ))}
          </div>
        </RevealSection>

      </div>
    </section>
  );
}