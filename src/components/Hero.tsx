import React from 'react';
import { motion } from 'motion/react';
import {
  FileDown,
  Mail,
  ArrowRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  Code,
  Layers,
  ShieldCheck,
  Zap,
  Github,
  Linkedin,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Headline Row */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-black/10 dark:border-white/10 text-[10px] uppercase font-mono tracking-[0.25em] text-black/60 dark:text-white/60">
          <span>PORTFOLIO // VOL. 2026</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            AVAILABLE FOR HIRE • HYDERABAD & REMOTE
          </span>
          <span className="hidden sm:inline">FRONTEND ENGINEERING & ARCHITECTURE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Main Editorial Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-black dark:text-white leading-[1.05] mb-6">
              Modassir Raja <br />
              <span className="font-serif italic font-light opacity-90">Frontend Developer</span>
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 mb-6 leading-relaxed">
              Crafting accessible, high-performance web applications with semantic precision & modern JavaScript.
            </p>

            {/* Summary Text */}
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xs font-mono font-bold text-[11px] uppercase tracking-[0.2em] text-white bg-black dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs"
              >
                <span>Selected Works</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xs font-mono font-bold text-[11px] uppercase tracking-[0.2em] text-black dark:text-white bg-transparent border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>

              <button
                id="hero-contact-btn"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xs font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </button>
            </div>

            {/* Social / Contact Quick Links */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-neutral-600 dark:text-neutral-400 pt-6 border-t border-black/10 dark:border-white/10 w-full">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500">
                DISPATCH:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-black dark:hover:text-white transition uppercase font-mono tracking-wider text-[11px]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-black dark:hover:text-white transition uppercase font-mono tracking-wider text-[11px]"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 font-mono tracking-wider text-[11px] uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Manifest & Spec Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5"
          >
            {/* Spec Box */}
            <div className="border border-black/15 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.02] rounded-xs font-mono text-xs overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black/40 dark:bg-white/40" />
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-black/80 dark:text-white/80">
                    SPECIFICATION // PROFILE
                  </span>
                </div>
                <div className="text-[10px] tracking-widest text-neutral-500 uppercase">REV 2026.04</div>
              </div>

              {/* Specs Rows */}
              <div className="p-6 space-y-4">
                <div className="border-b border-black/10 dark:border-white/10 pb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 block mb-1">
                    PRIMARY STACK
                  </span>
                  <p className="font-serif italic text-base text-black dark:text-white">
                    HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
                  </p>
                </div>

                <div className="border-b border-black/10 dark:border-white/10 pb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 block mb-1">
                    ENGINEERING PRACTICES
                  </span>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300">
                    Semantic Accessibility (WCAG AA/AAA), Responsive Fluid Design, RESTful API Integration, Git Version Control
                  </p>
                </div>

                <div className="border-b border-black/10 dark:border-white/10 pb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 block mb-1">
                    EXPERIENCE & TRACK RECORD
                  </span>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300">
                    2+ Years hands-on frontend delivery, contributing to robust enterprise platforms & scalable products.
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 block mb-1">
                    PROFESSIONAL MOTTO
                  </span>
                  <p className="font-serif italic text-sm text-black/80 dark:text-white/80">
                    "Clarity over complexity. Performance without sacrifice."
                  </p>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="grid grid-cols-3 divide-x divide-black/10 dark:divide-white/10 border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] py-3 text-center">
                <div>
                  <div className="font-serif italic text-lg font-bold text-black dark:text-white">2+</div>
                  <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono">Years Dev</div>
                </div>
                <div>
                  <div className="font-serif italic text-lg font-bold text-black dark:text-white">100%</div>
                  <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono">Semantic UI</div>
                </div>
                <div>
                  <div className="font-serif italic text-lg font-bold text-black dark:text-white">6+</div>
                  <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono">Key Projects</div>
                </div>
              </div>
            </div>

            {/* Editorial Highlights */}
            <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2 p-3 border border-black/10 dark:border-white/10 rounded-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                <span>Security & QA First</span>
              </div>
              <div className="flex items-center gap-2 p-3 border border-black/10 dark:border-white/10 rounded-xs">
                <Zap className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                <span>Sub-second Load Speeds</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
