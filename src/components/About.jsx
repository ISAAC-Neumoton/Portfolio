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
  { label: 'Python',        percent: 90 },
  { label: 'Excel/Spreadsheet',        percent: 80 },
  { label: 'Machine Learning',       percent: 75 },
  { label: 'Data Visualisation and Reporting',     percent: 80 },
  { label: 'SQL & Databases',        percent: 70 },
  { label: 'Power BI / Tableau',     percent: 80 },
  { label: 'Automation & AI Workflows', percent: 50 },
  { label: 'Cloud', percent: 50 },
  { label: 'Software/AI systems', percent: 50 },
];

const EXPERTISE_PILLARS = [
  {
    title: "Sales Intelligence & Automation",
    desc: "Building the analytical backbone for sales teams — from lead scoring to pipeline visibility. I engineer forecasting models and CRM-integrated intelligence that surface which deals close, which stall, and where automation removes manual effort.",
    skills: ["Lead Scoring Models", "Sales Forecasting", "Customer Segmentation (RFM)", "Pipeline & Funnel Analytics", "CRM Intelligence (HubSpot/Salesforce)", "Win-Rate & Deal Velocity", "Sales Process Automation", "Territory & Quota Planning"]
  },
  {
    title: "Marketing Intelligence",
    desc: "Turning fragmented campaign data into a single source of truth. I audit customer behavior, model multi-touch attribution, and build recommendation logic that ties ad spend directly to pipeline and revenue outcomes.",
    skills: ["Customer Analytics & Personas", "Campaign Performance Analysis", "Attribution Modeling", "Audience Targeting & Segmentation", "Recommendation Systems", "Marketing Automation Workflows", "A/B Testing & Experimentation", "Channel ROI Analysis"]
  },
  {
    title: "Finance & Revenue Analytics",
    desc: "Bridging finance and growth. I build revenue forecasting models, pricing and profitability frameworks, and risk models that give leadership a real-time, data-backed view of financial decision-making.",
    skills: ["Revenue Forecasting", "Financial Analytics & Reporting", "Pricing Strategy", "Profitability & Margin Analysis", "Risk & Credit Modeling", "Financial Decision Support", "Budget Variance Analysis", "Cash Flow Modeling"]
  },
  {
    title: "Data, AI & Automation Engineering",
    desc: "The technical layer underneath every solution above — data engineering, statistical modeling, and applied AI/ML, packaged into automated systems rather than one-off reports.",
    skills: ["Data Analytics & Engineering", "Data Science & Statistical Modeling", "AI/ML Model Development", "ETL Pipeline Design", "Process Automation Software", "Cloud Data Platforms", "Power BI / Tableau Dashboards", "Python & SQL Development"]
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
                I'm a Revenue Intelligence & AI Engineer. I build data, AI, analytics, and automation solutions for sales, marketing, and finance teams — helping businesses acquire customers, grow revenue, optimize operations, and make better decisions.
              </p>
              <p className="text-base leading-relaxed mt-2 transition-colors duration-200" style={{ color: 'var(--color-text-muted)' }}>
                Rather than treating data as isolated numbers, I reconstruct it to reveal the true mechanics behind sales pipelines, marketing spend, and financial performance — then engineer systems that turn fragmented data loops into streamlined commercial growth levers.
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
                  Currently running an active, continuous 100-Day Machine Learning Streak in cloud-hosted development environments, committing automated data preprocessing and predictive pipeline scripts daily. Applied Data Science student at WQU (WorldQuant University), alongside a 400 Level Computer Science degree at the Federal University of Technology, Akure (FUTA).
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