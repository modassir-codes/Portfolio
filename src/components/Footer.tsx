import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAFAFA] dark:bg-[#0F0F0F] border-t border-black/10 dark:border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/10 dark:border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs border border-black dark:border-white flex items-center justify-center font-serif font-bold text-xs text-black dark:text-white">
              MR
            </div>
            <div>
              <span className="text-sm font-serif font-normal text-black dark:text-white block">
                Modassir Raja
              </span>
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                Frontend Developer // Hyderabad
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            <a href="#home" className="hover:text-black dark:hover:text-white transition">
              About
            </a>
            <a href="#experience" className="hover:text-black dark:hover:text-white transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-black dark:hover:text-white transition">
              Archive
            </a>
            <a href="#skills" className="hover:text-black dark:hover:text-white transition">
              Capabilities
            </a>
            <a href="#education" className="hover:text-black dark:hover:text-white transition">
              Pedagogy
            </a>
            <button
              onClick={onOpenResume}
              className="text-black dark:text-white hover:opacity-75 inline-flex items-center gap-1 font-bold border-b border-black dark:border-white"
            >
              <FileDown className="w-3 h-3" />
              Curriculum Vitae
            </button>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xs border border-black/15 dark:border-white/15 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xs border border-black/15 dark:border-white/15 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-8 h-8 rounded-xs border border-black/15 dark:border-white/15 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xs border border-black dark:border-white flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition ml-2"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-500 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} MODASSIR RAJA. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1 justify-center">
            EDITORIAL EDITION // REACT + TYPESCRIPT + TAILWIND
          </p>
        </div>
      </div>
    </footer>
  );
};
