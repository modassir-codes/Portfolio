import { Project, ExperienceItem, SkillCategory, EducationItem, CertificationItem, LanguageItem } from '../types';
import profilePhoto from '../assets/images/modassir_portrait_1786835447448.jpg';

export const PERSONAL_INFO = {
  name: 'Modassir Raja',
  title: 'Frontend Developer',
  location: 'Hyderabad, India',
  email: 'modassirraza722083@gmail.com',
  github: 'https://github.com/modassir-raja',
  linkedin: 'https://linkedin.com/in/modassir-raja',
  avatar: profilePhoto,
  avatarAlt: 'Modassir Raja - Frontend Developer Portrait Headshot',
  summary:
    'Frontend Developer with hands-on experience building responsive, accessible, and user-focused web interfaces using HTML5, CSS3, JavaScript, and React. Strong understanding of UI engineering principles, cross-browser compatibility, performance optimization, and software development life cycle (SDLC). Seeking a frontend engineering role at Google to build scalable, high-quality user experiences.',
  availability: 'Available for full-time Frontend Engineering opportunities',
  yearsOfExperience: '2+ Years Training & Experience',
  targetRole: 'Frontend Developer / UI Engineer',
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'cba-forage',
    role: 'Software Engineering Virtual Experience Participant',
    company: 'Commonwealth Bank (via Forage)',
    location: 'Remote',
    period: 'Jan 2026',
    type: 'Job Simulation',
    isRemote: true,
    summaryHighlight: 'Applied real-world banking brand standards, secure hosting workflows, and design systems.',
    bulletPoints: [
      'Built and styled a responsive web page using HTML and CSS following real-world brand guidelines.',
      'Applied UI design principles including typography systems, layout hierarchy, and HEX-based color standards.',
      'Created cybersecurity-focused client content aligned with secure software engineering practices.',
      'Researched and documented secure hosting concepts including SSL, firewalls, backups, and scalability.',
      'Followed security-first development workflows used in production engineering teams.',
    ],
    technologies: ['HTML5', 'CSS3', 'Design Systems', 'Responsive UI', 'Cybersecurity', 'SSL/Firewalls'],
  },
  {
    id: 'intment-tech',
    role: 'Software Developer Intern',
    company: 'Intment Technologies (P) Ltd.',
    location: 'Hyderabad, India',
    period: 'Mar 2022 – Jun 2022',
    type: 'Internship',
    isRemote: false,
    summaryHighlight: 'Engineered responsive UI modules for a collaborative Hospital Management System.',
    bulletPoints: [
      'Contributed to a Hospital Management System as part of a collaborative engineering team.',
      'Developed and enhanced UI components using C# and Bootstrap, improving layout consistency and usability.',
      'Assisted in building, testing, and debugging core application workflows.',
      'Collaborated with mentors to understand system architecture, SDLC phases, and code review processes.',
    ],
    technologies: ['React/UI Design', 'Bootstrap', 'C#', 'SDLC', 'Debugging', 'Code Reviews'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Core web technologies for building interactive, fluid web apps',
    icon: 'Code2',
    skills: [
      { name: 'HTML5 & Semantic Web', level: 95, badge: 'Expert' },
      { name: 'CSS3 & Modern Layouts', level: 95, badge: 'Expert' },
      { name: 'JavaScript (ES6+)', level: 90, badge: 'Advanced' },
      { name: 'React (Hooks, VDOM)', level: 88, badge: 'Advanced' },
      { name: 'Responsive Web Design', level: 95, badge: 'Expert' },
      { name: 'Tailwind CSS & Utility-First', level: 92, badge: 'Advanced' },
    ],
  },
  {
    title: 'UI & UX Engineering',
    description: 'Accessibility, consistency, visual hierarchy, and cross-browser resilience',
    icon: 'Layout',
    skills: [
      { name: 'Accessibility (WCAG Basics)', level: 85, badge: 'Proficient' },
      { name: 'Cross-Browser Compatibility', level: 90, badge: 'Advanced' },
      { name: 'Typography Systems & Hierarchy', level: 90, badge: 'Advanced' },
      { name: 'Color Standards & Design Tokens', level: 88, badge: 'Advanced' },
      { name: 'Performance Optimization', level: 82, badge: 'Proficient' },
    ],
  },
  {
    title: 'Tools & Ecosystem',
    description: 'Developer tooling, version control, and debugging environments',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub Workflows', level: 88, badge: 'Advanced' },
      { name: 'VS Code & Productivity Suite', level: 92, badge: 'Advanced' },
      { name: 'Chrome DevTools & Profiling', level: 90, badge: 'Advanced' },
      { name: 'Vite & Modern Bundlers', level: 85, badge: 'Proficient' },
      { name: 'npm & Dependency Management', level: 88, badge: 'Advanced' },
    ],
  },
  {
    title: 'Engineering Practices',
    description: 'Methodologies that guide clean, maintainable, scalable code',
    icon: 'Terminal',
    skills: [
      { name: 'Software Development Life Cycle (SDLC)', level: 88, badge: 'Proficient' },
      { name: 'Debugging & Issue Triage', level: 90, badge: 'Advanced' },
      { name: 'Code Reviews & Collaboration', level: 85, badge: 'Proficient' },
      { name: 'Agile & Team Workflows', level: 85, badge: 'Proficient' },
      { name: 'Security-First Development', level: 82, badge: 'Proficient' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'hospital-management-system',
    title: 'Hospital Management System UI & Patient Portal',
    description: 'Collaborative healthcare portal with appointment booking, patient records triage, and real-time bed occupancy stats.',
    longDescription:
      'Engineered as part of the engineering team at Intment Technologies. Revamped legacy UI components into clean, responsive modules with optimized patient admission flows, accessible forms, and consistent UI layouts across desktop and tablet devices.',
    category: 'fullstack',
    tags: ['React', 'JavaScript', 'Bootstrap', 'C#', 'Responsive Design'],
    features: [
      'Accessible appointment scheduling form with dynamic slot validation',
      'Interactive patient triage & department directory dashboard',
      'Doctor schedule management with responsive data tables',
      'Standardized design system tokens for consistent medical UI branding',
    ],
    metrics: 'Reduced task completion time by 28% and eliminated UI layout breakages on mobile tablets.',
    iconName: 'Activity',
    featured: true,
    githubUrl: 'https://github.com/modassir-raja/hospital-management-ui',
    liveUrl: '#',
  },
  {
    id: 'banking-security-showcase',
    title: 'Commonwealth Bank Security & Brand Showcase',
    description: 'Interactive banking web portal adhering to real-world corporate brand guidelines and cybersecurity standards.',
    longDescription:
      'Developed during the Commonwealth Bank Software Engineering simulation on Forage. Built an enterprise-grade client interface integrating typography systems, layout hierarchy, strict HEX color schemes, and interactive cybersecurity advisory modules.',
    category: 'ui',
    tags: ['HTML5', 'CSS3', 'Modern CSS', 'WCAG Accessibility', 'Security-First'],
    features: [
      'Strict adherence to enterprise banking brand guidelines and color hierarchy',
      'Interactive cybersecurity advisory widget highlighting SSL and firewall best practices',
      'Pixel-perfect responsive layout across mobile, tablet, and widescreen viewports',
      'WCAG 2.1 AA accessible contrast ratios and keyboard navigation support',
    ],
    metrics: '100% Lighthouse Accessibility & SEO score with sub-second First Contentful Paint.',
    iconName: 'ShieldCheck',
    featured: true,
    githubUrl: 'https://github.com/modassir-raja/cba-brand-security-ui',
    liveUrl: '#',
  },
  {
    id: 'accessible-component-library',
    title: 'Aura UI - Accessible React Component System',
    description: 'High-performance, keyboard-navigable React design system and interactive component playground.',
    longDescription:
      'A modular UI library crafted to practice modern frontend engineering principles. Includes custom dropdowns, dialogs, responsive data grids, dark/light theme tokens, and comprehensive ARIA attribute implementations.',
    category: 'react',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'WCAG', 'ARIA'],
    features: [
      'Full keyboard navigation (arrow keys, escape, focus trapping)',
      'Smooth micro-interactions powered by CSS transitions and Motion',
      'Adaptive color token system supporting high-contrast dark and light modes',
      'Zero-dependency standalone accessible modal and toast notification engine',
    ],
    metrics: 'Zero runtime accessibility violations across automated axe-core audits.',
    iconName: 'Layers',
    featured: true,
    githubUrl: 'https://github.com/modassir-raja/aura-ui-components',
    liveUrl: '#',
  },
  {
    id: 'dev-tracker-app',
    title: 'DevPulse - Agile Task & Sprint Performance Engine',
    description: 'Modern developer workflow tracker with Kanban board, velocity metrics, and interactive code snippet catalog.',
    longDescription:
      'A responsive single-page React application for frontend engineering teams to organize SDLC tasks, track code review checkpoints, and monitor performance optimization metrics with instant client-side state.',
    category: 'react',
    tags: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'State Management'],
    features: [
      'Interactive drag-and-drop task triage board with priority tagging',
      'SDLC milestone tracker with automatic progress percentage calculations',
      'Integrated code snippet repository with syntax highlight preview',
      'Local persistence with offline-ready browser storage support',
    ],
    metrics: 'Instantaneous UI response times with optimized React rendering pipelines.',
    iconName: 'Kanban',
    featured: false,
    githubUrl: 'https://github.com/modassir-raja/devpulse-tracker',
    liveUrl: '#',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Shadan College of Engineering and Technology',
    period: '2022 – 2025',
    location: 'Hyderabad, India',
    highlights: [
      'Core focus on Data Structures, Algorithms, Software Engineering, and Database Management.',
      'Led frontend development for academic capstone projects and technical seminars.',
    ],
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'Maulana Azad National Urdu University',
    period: '2019 – 2022',
    location: 'Hyderabad, India',
    highlights: [
      'Comprehensive curriculum in Web Technologies, Programming Fundamentals, and Computer Networks.',
      'Graduated with honors in practical software laboratory and web interface projects.',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Commonwealth Bank — Introduction to Software Engineering Job Simulation',
    issuer: 'Forage / Commonwealth Bank',
    date: 'Jan 2026',
    credentialUrl: 'https://www.theforage.com',
  },
  {
    title: 'JavaScript Bootcamp (Advanced ES6+ & Async)',
    issuer: 'Professional Developer Training',
    date: '2023',
    credentialUrl: '#',
  },
  {
    title: 'HTML & CSS Bootcamp (Modern Layouts & Responsive Design)',
    issuer: 'Frontend Engineering Academy',
    date: '2022',
    credentialUrl: '#',
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    language: 'English',
    proficiency: 'Professional Working',
    levelPercentage: 90,
  },
  {
    language: 'Hindi',
    proficiency: 'Full Professional',
    levelPercentage: 100,
  },
  {
    language: 'Urdu',
    proficiency: 'Professional Working',
    levelPercentage: 95,
  },
];
