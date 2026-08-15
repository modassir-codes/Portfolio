import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAFAFA] text-[#111111] dark:bg-[#0F0F0F] dark:text-[#F5F5F5] selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-200 antialiased font-sans">
        {/* Navigation Bar */}
        <Navbar
          onOpenResume={handleOpenResume}
          onOpenContact={handleOpenContact}
        />

        {/* Main Content Sections */}
        <main>
          {/* Hero / About */}
          <Hero
            onOpenResume={handleOpenResume}
            onOpenContact={handleOpenContact}
          />

          {/* Key Experience */}
          <Experience />

          {/* Featured Projects */}
          <Projects />

          {/* Technical Skills */}
          <Skills />

          {/* Education & Certifications */}
          <EducationCertifications />

          {/* Contact Form & Direct Inquiries */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenResume={handleOpenResume} />

        {/* Interactive Resume View & PDF Download Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={handleCloseResume}
        />
      </div>
    </ThemeProvider>
  );
}
