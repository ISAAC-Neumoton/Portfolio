import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
// import SocialIcons from '../SocialIcons/SocialIcons';
import SocialIcons from "./SocialICons";
import { socialLinks } from "../data/socialLinks";
// import { socialLinks } from '../../data/socialLinks';

/* ── Reveal wrapper ────────────────────────────────────── */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Form submission ────────────────────────────────────── */
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "0ac3873b-db33-4345-8f87-db9d6168e35a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const emailLink = socialLinks.find(s => s.id === 'email')?.url?.replace('mailto:', '') || 'your@email.com';
  const whatsappUrl = socialLinks.find(s => s.id === 'whatsapp')?.url || '#';

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    try {
      const ok = await submitForm(form);
      setStatus(ok ? 'success' : 'error');
      if (ok) setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">

        {/* Heading */}
        <Reveal>
          <p className="text-[var(--color-primary)] text-sm font-mono tracking-widest uppercase mb-2">
            — Get In Touch
          </p>
          <h2 className="section-title mb-4">
            Contact <span>Me</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-md mb-12">
            Have a project in mind? Let's talk. Fill out the form or reach me directly.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left: contact info */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${emailLink}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-primary)] transition-colors duration-200">
                  <MdEmail size={18} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm text-white group-hover:text-[var(--color-primary)] transition-colors duration-200">{emailLink}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-primary)] transition-colors duration-200">
                  <FaWhatsapp size={18} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-sm text-white group-hover:text-[var(--color-primary)] transition-colors duration-200">Message me directly</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] flex items-center justify-center flex-shrink-0">
                  <MdLocationOn size={18} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-sm text-white">Nigeria</p>
                </div>
              </div>

              {/* Social icons */}
              <div className="pt-2">
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-3">Follow me</p>
                <SocialIcons size={16} />
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-1.5" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="input-field resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-400 text-center"
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}