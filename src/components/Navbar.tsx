import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, FileDown, Menu, X, Terminal, Code2, Sparkles, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#home', id: 'home' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAFA]/95 dark:bg-[#0F0F0F]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10'
          : 'bg-transparent border-b border-black/5 dark:border-white/5 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name with Editorial Monogram */}
          <a
            href="#home"
            id="nav-logo"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center rounded-xs font-serif font-bold text-xs shadow-xs group-hover:opacity-80 transition-opacity">
              MR
            </div>
            <div className="flex flex-col">
              <span className="text-lg tracking-tight font-serif italic text-black dark:text-white leading-tight">
                Modassir Raja
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-black/50 dark:text-white/50">
                Frontend Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.25em] font-medium text-black/70 dark:text-white/70">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`relative py-1 transition-opacity duration-150 ${
                    isActive
                      ? 'text-black dark:text-white font-bold opacity-100'
                      : 'hover:opacity-100 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black dark:bg-white"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right actions: Dark Mode toggle + Resume Button + Contact CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Editorial Capsule Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="flex items-center space-x-2 bg-black/5 dark:bg-white/5 rounded-full px-3 py-1.5 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition text-[10px] uppercase tracking-wider text-black/80 dark:text-white/80"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white transition-colors" />
              <span className="font-mono text-[9px] tracking-widest">{theme === 'dark' ? 'DARK' : 'LIGHT'}</span>
            </button>

            {/* Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-[10px] uppercase font-bold tracking-[0.2em] rounded-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs"
            >
              Download PDF
            </button>

            {/* Get in touch CTA */}
            <button
              id="nav-contact-cta"
              onClick={onOpenContact}
              className="border border-black/20 dark:border-white/20 text-black dark:text-white px-3.5 py-2 text-[10px] uppercase font-bold tracking-[0.2em] rounded-xs hover:border-black dark:hover:border-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              className="p-2 rounded-xs text-black dark:text-white border border-black/10 dark:border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-900" />
              )}
            </button>

            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xs text-black dark:text-white border border-black/10 dark:border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-black/10 dark:border-white/10 bg-[#FAFAFA]/95 dark:bg-[#0F0F0F]/95 backdrop-blur-xl px-6 pt-3 pb-8 space-y-4 shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-xs uppercase tracking-[0.25em] font-medium border-b border-black/5 dark:border-white/5 transition ${
                    activeSection === link.id
                      ? 'text-black dark:text-white font-bold'
                      : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold tracking-[0.2em] uppercase rounded-xs"
              >
                Download PDF Resume
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 border border-black/20 dark:border-white/20 text-black dark:text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-xs"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
