import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiFileText, FiArrowRight } from 'react-icons/fi';
import SocialIcons from './SocialIcons';
import { scrollToSection } from '../utils/scrollTo';
import heroGlobe from '../assets/hero_ujay.jpeg';
import myCv from '../data/cv.pdf'; // 👈 Vite imports your CV securely from your src/data folder

/* ── Fade-up animation helper ───────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:     { y: 40, opacity: 0 },
  animate:     { y: 0,  opacity: 1 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden py-16 md:py-24 transition-colors duration-300 min-h-[85vh]"
      style={{ background: 'var(--color-bg)', paddingTop: 'calc(var(--navbar-height) + 2rem)' }}
    >

      {/* ── Decorative background lighting ─────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Orange glow — top left */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.06] dark:opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
        />

        {/* Dark geometric background design (Triangles on right side) */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 dark:opacity-30"
          viewBox="0 0 600 700"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="600,0 600,700 200,0"   fill="#1a1a1a" />
          <polygon points="600,0 600,400 400,0"   fill="#222222" />
          <polygon points="600,200 600,700 350,700" fill="#141414" />
        </svg>
      </div>

      {/* ── Main content layout container ─────────────────── */}
      <div className="container-custom w-full relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── LEFT: Informational Content Stack ────────────── */}
          <div className="flex-1 max-w-xl space-y-6">

            {/* Greeting context tag */}
            <motion.p
              {...fadeUp(0.1)}
              className="text-sm tracking-widest uppercase mb-1 font-mono font-semibold"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Hi, I am
            </motion.p>

            {/* Title Name Headliner */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase"
              style={{ color: 'var(--color-text-main)', fontFamily: "'Poppins', sans-serif" }}
            >
              Umoh ISAAC
            </motion.h1>

            {/* Core Domain Badges */}
            <motion.div 
              {...fadeUp(0.25)}
              className="text-xs font-bold tracking-wider uppercase flex flex-wrap gap-x-3 gap-y-1.5 border-b pb-4 border-[var(--color-dark-border)]"
              style={{ color: 'var(--color-text-main)', fontFamily: "'Poppins', sans-serif" }}
            >
              <span>Machine Learning Engineer</span>
              <span style={{ color: 'var(--color-primary)' }}>|</span>
              <span>Data Analyst</span>
              <span style={{ color: 'var(--color-primary)' }}>|</span>
              <span>BI Developer</span>
            </motion.div>

            {/* Specialized Content Narrative Pillars */}
            <motion.div 
              {...fadeUp(0.35)}
              className="grid sm:grid-cols-2 gap-4 text-xs leading-relaxed pt-1"
              style={{ color: 'var(--color-text-muted)', fontFamily: "'Poppins', sans-serif" }}
            >
              <div className="space-y-1">
                <h4 className="font-bold text-sm" style={{ color: 'var(--color-text-main)' }}>Predictive Analytics</h4>
                <p>I build machine learning models that catch customer churn early, automate sales forecasting, and optimize your pricing to safely maximize profit margins.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm" style={{ color: 'var(--color-text-main)' }}>Frictionless Intelligence</h4>
                <p>I connect your sales, marketing ad spend, and delivery pipelines into clear, interactive dashboards so you can audit leaks and find hidden revenue loops instantly.</p>
              </div>
            </motion.div>

            {/* Social Media Grid Link Element */}
            <motion.div {...fadeUp(0.4)} className="pt-1 flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-text-muted)]">Networks</span>
              <div className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <SocialIcons size={16} />
              </div>
            </motion.div>

            {/* Technical Engineering Milestone Metric */}
            <motion.div 
              {...fadeUp(0.45)}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-dashed transition-all duration-300 bg-gray-50 dark:bg-[#141414]"
              style={{ borderColor: 'var(--color-dark-border)' }}
            >
              <div className="bg-[var(--color-primary)] text-white text-[10px] font-bold font-mono px-2 py-0.5 rounded shadow-sm shrink-0">
                ⚡ ACTIVE RUN
              </div>
              <p className="text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>
                100-Day Machine Learning Streak: Programmatically updating automated data pipelines daily.
              </p>
            </motion.div>

            {/* Action Item Controls (Enlarged Target CTAs) */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex items-center gap-4 flex-wrap pt-2"
            >
              {/* Giant Interactive Premium CTA Toggle Button */}
              <button
                className="group relative inline-flex items-center gap-3 bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold text-base tracking-wide shadow-lg hover:shadow-orange-500/20 active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden"
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">Hire Me</span>
                <FiArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Clean Outlined Documentation Target */}
              <a
                href={myCv}
                download="Umoh_Isaac_CV.pdf"
                className="inline-flex items-center gap-2 border-2 px-6 py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] active:scale-[0.98]"
                style={{ borderColor: 'var(--color-dark-border)', color: 'var(--color-text-main)' }}
                aria-label="Download CV"
              >
                <FiFileText size={16} />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Graphic Profiling Framework ──────────── */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1,   opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative mt-6 md:mt-0"
          >
            {/* Ambient halo background ring */}
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-20 dark:opacity-30 scale-95"
              style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
            />

            {/* Profile circular border framing masking clip */}
            <div 
              className="relative overflow-hidden border-2 transition-all duration-300 shadow-xl w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]"
              style={{ 
                borderColor: 'var(--color-dark-border)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
              }}
            >
              <img
                src={heroGlobe}
                alt="System globe representation"
                className="w-full h-full object-cover object-center transform scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}