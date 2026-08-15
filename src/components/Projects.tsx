import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  ExternalLink,
  Github,
  Layers,
  Activity,
  ShieldCheck,
  Kanban,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  X,
  Zap,
} from 'lucide-react';
import { PROJECTS } from '../data/resumeData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'react' | 'ui' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  const getProjectIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'Kanban':
        return <Kanban className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-24 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3 block">
              SECTION // 02 — ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-black dark:text-white mb-3">
              Selected Works & Case Studies
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 font-serif italic">
              Applications highlighting responsive design, accessible components, state management, and real-world UI engineering principles.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xs border border-black/15 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.02]">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'react', label: 'React Systems' },
              { id: 'ui', label: 'UI & Security' },
              { id: 'fullstack', label: 'Hospital Portal' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-xs transition-all ${
                  activeFilter === tab.id
                    ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="group relative flex flex-col justify-between rounded-xs bg-black/[0.02] dark:bg-white/[0.02] border border-black/15 dark:border-white/15 p-6 sm:p-8 hover:border-black/50 dark:hover:border-white/50 transition-all duration-200"
            >
              <div>
                {/* Top Row: Icon + Index + Details action */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xs border border-black/15 dark:border-white/15 flex items-center justify-center text-black dark:text-white">
                      {getProjectIcon(project.iconName)}
                    </div>
                    <span className="font-mono text-xs text-neutral-400">
                      NO. 0{index + 1}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest border border-black/20 dark:border-white/20 text-black dark:text-white">
                        FEATURED
                      </span>
                    )}
                    <button
                      id={`project-details-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="p-1 text-neutral-400 hover:text-black dark:hover:text-white transition"
                      title="View Architecture Details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-serif text-black dark:text-white mb-2.5 group-hover:underline underline-offset-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features preview */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <span className="font-mono text-xs text-neutral-400">—</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Impact Metric if present */}
                {project.metrics && (
                  <div className="p-3 bg-black/[0.04] dark:bg-white/[0.04] border-l-2 border-black dark:border-white mb-6 text-xs text-black dark:text-white font-mono flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>

              {/* Bottom Row: Tech Tags & Interactive buttons */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono uppercase rounded-xs bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-black/10 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/10 dark:border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[11px] font-mono uppercase tracking-widest font-bold text-black dark:text-white hover:opacity-75 flex items-center gap-1.5"
                  >
                    <span>Read Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-neutral-500 hover:text-black dark:hover:text-white transition"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              className="relative w-full max-w-2xl bg-[#FAFAFA] dark:bg-[#0F0F0F] rounded-xs border border-black/20 dark:border-white/20 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs border border-black/20 dark:border-white/20 flex items-center justify-center text-black dark:text-white">
                    {getProjectIcon(selectedProject.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif text-black dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                      CASE // {selectedProject.category.toUpperCase()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-neutral-400 hover:text-black dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 my-6">
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                    Project Overview & Engineering
                  </h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                    Key Features & Technical Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="font-mono text-xs text-neutral-400">—</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedProject.metrics && (
                  <div className="p-4 bg-black/[0.03] dark:bg-white/[0.03] border-l-2 border-black dark:border-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                      Measured Impact:
                    </span>
                    <span className="text-sm font-mono text-black dark:text-white">
                      {selectedProject.metrics}
                    </span>
                  </div>
                )}

                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                    Tech Stack Badges
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono uppercase rounded-xs bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/10 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-black/10 dark:border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-[10px] font-mono uppercase font-bold tracking-wider rounded-xs text-black dark:text-white border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub Source
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 text-[10px] font-mono uppercase font-bold tracking-wider rounded-xs text-white bg-black dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
