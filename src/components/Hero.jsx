import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiArrowRight } from 'react-icons/fi';
import SocialIcons from './SocialIcons';
import { scrollToSection } from '../utils/scrollTo';
import heroGlobe from '../assets/hero_ujay.jpeg';
import myCv from '../data/cv.pdf';

const fadeUp = (delay = 0) => ({
  initial:    { y: 40, opacity: 0 },
  animate:    { y: 0,  opacity: 1 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden transition-colors duration-300 min-h-screen"
      style={{
        background:     'var(--color-bg)',
        paddingTop:     'calc(var(--navbar-height) + 4rem)',
        paddingBottom:  '4rem',
      }}
    >
      {/* Background lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.06] dark:opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
        />
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 dark:opacity-30"
          viewBox="0 0 600 700"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="600,0 600,700 200,0"     fill="#1a1a1a" />
          <polygon points="600,0 600,400 400,0"     fill="#222222" />
          <polygon points="600,200 600,700 350,700" fill="#141414" />
        </svg>
      </div>

      {/* Main container */}
      <div className="container-custom w-full relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* LEFT: Content */}
          <div className="flex-1 max-w-xl flex flex-col gap-5 w-full">

            {/* Greeting */}
            <motion.p
              {...fadeUp(0.1)}
              className="text-sm tracking-widest uppercase font-mono font-semibold"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Hi, I am
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-tight"
              style={{ color: 'var(--color-text-main)', fontFamily: "'Poppins', sans-serif" }}
            >
              Umoh ISAAC
            </motion.h1>

            {/* Role Badges */}
            <motion.div
              {...fadeUp(0.25)}
              className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b pb-4 border-[var(--color-dark-border)]"
            >
              <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: 'var(--color-text-main)' }}>Machine Learning Engineer</span>
              <span className="text-[11px] font-bold px-1" style={{ color: 'var(--color-primary)' }}>|</span>
              <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: 'var(--color-text-main)' }}>Data Analyst</span>
              <span className="text-[11px] font-bold px-1" style={{ color: 'var(--color-primary)' }}>|</span>
              <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: 'var(--color-text-main)' }}>BI Developer</span>
            </motion.div>

            {/* Summary */}
            <motion.p
              {...fadeUp(0.35)}
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-text-muted)', fontFamily: "'Poppins', sans-serif" }}
            >
              I bridge machine learning and business intelligence to track ad spend leaks, optimize supply chain logistics, and deploy predictive models that catch customer churn early — protecting your profit margins before they erode.
            </motion.p>

            {/* Social Icons */}
            <motion.div {...fadeUp(0.4)} className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-text-muted)]">Networks</span>
              <div className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <SocialIcons size={16} />
              </div>
            </motion.div>

            {/* Active Run */}
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

            {/* CTA Buttons — always side by side */}
            <motion.div
              {...fadeUp(0.5)}
              className="grid grid-cols-2 gap-3 w-full"
            >
              <button
                className="group relative inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-4 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden"
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">Hire Me</span>
                <FiArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <a
                href={myCv}
                download="Umoh_Isaac_CV.pdf"
                className="inline-flex items-center justify-center gap-2 border-2 px-4 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] active:scale-[0.98]"
                style={{ borderColor: 'var(--color-dark-border)', color: 'var(--color-text-main)' }}
                aria-label="Download CV"
              >
                <FiFileText size={15} />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Profile Image */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1,    opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative mt-4 md:mt-0"
          >
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-20 dark:opacity-30 scale-95"
              style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
            />
            <div
              className="relative overflow-hidden border-2 transition-all duration-300 shadow-xl w-[260px] h-[260px] sm:w-[340px] sm:h-[340px]"
              style={{
                borderColor:  'var(--color-dark-border)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              }}
            >
              <img
                src={heroGlobe}
                alt="Umoh Isaac profile"
                className="w-full h-full object-cover object-center transform scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}