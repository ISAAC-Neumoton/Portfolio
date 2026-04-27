import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload } from 'react-icons/fi';
import SocialIcons from './SocialICons';
import { scrollToSection } from '../utils/scrollTo';
import heroGlobe from '../assets/hero_ujay.jpeg';

/* ── Fade-up animation helper ───────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:    { y: 40, opacity: 0 },
  animate:    { y: 0,  opacity: 1 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 'var(--navbar-height)' }}
    >

      {/* ── Decorative background ─────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* Orange glow — top left */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #FF6B00 0%, transparent 70%)' }}
        />

        {/* Orange glow — bottom right */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #FF6B00 0%, transparent 70%)' }}
        />

        {/* Dark geometric triangles — right side */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-30"
          viewBox="0 0 600 700"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="600,0 600,700 200,0"   fill="#1a1a1a" />
          <polygon points="600,0 600,400 400,0"   fill="#222222" />
          <polygon points="600,200 600,700 350,700" fill="#141414" />
        </svg>
      </div>

      {/* ── Main content ──────────────────────────────── */}
      <div className="container-custom w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* ── LEFT: Text ──────────────────────────────── */}
          <div className="flex-1 max-w-xl">

            {/* Greeting */}
            <motion.p
              {...fadeUp(0.1)}
              className="text-sm tracking-widest uppercase mb-1"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Hi I am
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-3xl md:text-4xl font-semibold text-white mb-2"
            >
              Umoh ISAAC
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              {...fadeUp(0.3)}
              className="mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '2px' }}
            >
              <span
                className="text-5xl md:text-6xl lg:text-7xl"
                style={{ color: 'var(--color-primary)' }}
              >
                <TypeAnimation
                  sequence={[
                    'Machine Learning', 1800,
                    'Data Analytics',   1800,
                    'Dashboarding',     1800,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={65}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </motion.div>

            {/* Social icons */}
            <motion.div {...fadeUp(0.45)} className="mb-8">
              <SocialIcons size={16} />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.55)}
              className="flex items-center gap-4 flex-wrap"
            >
              <button
                className="btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </button>

              <a
                href="/assets/cv.pdf"
                download
                className="btn-outline"
                aria-label="Download CV"
              >
                <FiDownload size={16} />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Globe image ───────────────────────── */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1,   opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative"
          >
            {/* Pulsing orange ring around the circle */}
            <div
              className="absolute inset-0 rounded-full animate-pulse-slow"
              style={{
                border: '2px solid var(--color-primary)',
                transform: 'scale(1.06)',
                borderRadius: '50%',
                opacity: 0.25,
              }}
            />

            {/* Globe image in circular crop */}
            <div className="hero-img-circle">
              <img
                src={heroGlobe}
                alt="Circuit globe representing data and machine learning"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* ── Stats bar ─────────────────────────────────── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg"
        >
          {[
            { value: '1+', label: 'Years Experience' },
            { value: '3+', label: 'Projects Done'    },
            { value: '3+', label: 'Happy Clients'    },
          ].map(({ value, label }) => (
            <div key={label} className="stat-card">
              <p
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color:      'var(--color-primary)',
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                {value}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}