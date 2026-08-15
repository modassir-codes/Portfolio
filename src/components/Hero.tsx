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
import { staggerContainer, fadeInUp } from '../utils/animations';

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

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Bio and CTA */}
          <motion.div
            variants={fadeInUp}
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

          {/* Right Column: Portrait Photo & Editorial Specification Card */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Editorial Portrait Presentation Card */}
            <div className="border border-black/15 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.02] rounded-xs font-mono overflow-hidden shadow-sm">
              {/* Card Masthead Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-black/90 dark:text-white/90">
                    PORTRAIT // ARCHIVE REF. 01
                  </span>
                </div>
                <div className="text-[9px] tracking-widest text-neutral-500 uppercase font-mono">HYDERABAD, IN</div>
              </div>

              {/* Photo Display Frame */}
              <div className="relative group overflow-hidden bg-neutral-900 aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.avatarAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Subtle vignette/border overlay */}
                <div className="absolute inset-0 border border-black/10 dark:border-white/10 pointer-events-none" />

                {/* Bottom Badge inside photo */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/75 dark:bg-black/85 backdrop-blur-md px-3 py-2 border border-white/15 text-white rounded-xs">
                  <div>
                    <span className="font-serif italic text-xs sm:text-sm block text-white">Modassir Raja</span>
                    <span className="font-mono text-[9px] text-neutral-300 uppercase tracking-widest block">Frontend Developer // React</span>
                  </div>
                  <span className="text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 border border-emerald-400/50 text-emerald-300 rounded-xs bg-emerald-950/40">
                    Active
                  </span>
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

            {/* Concise Specs Breakdown */}
            <div className="border border-black/15 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.02] rounded-xs font-mono text-xs p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">CORE STACK</span>
                <span className="font-serif italic text-xs sm:text-sm text-black dark:text-white">HTML5, CSS3, JS (ES6+), React</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">EXPERTISE</span>
                <span className="text-[11px] text-neutral-700 dark:text-neutral-300">WCAG AA, Responsive, Git, SDLC</span>
              </div>
              <div className="flex items-center justify-between pt-0.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">MOTTO</span>
                <span className="font-serif italic text-xs text-neutral-800 dark:text-neutral-200">"Clarity over complexity."</span>
              </div>
            </div>

            {/* Editorial Highlights */}
            <div className="grid grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2 p-3 border border-black/10 dark:border-white/10 rounded-xs bg-black/[0.01] dark:bg-white/[0.01]">
                <ShieldCheck className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                <span>Security & QA First</span>
              </div>
              <div className="flex items-center gap-2 p-3 border border-black/10 dark:border-white/10 rounded-xs bg-black/[0.01] dark:bg-white/[0.01]">
                <Zap className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                <span>Sub-second Load Speeds</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
