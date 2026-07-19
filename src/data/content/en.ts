import type { Content } from "./types";
import { LINKS, mailto } from "./links";

export const en: Content = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    role: "Frontend UI Developer / Web Layout Developer",
    tagline:
      "From Figma design to a responsive, accessible interface with careful visual detail.",
  },
  about: {
    title: "About Me",
    description:
      "I'm a Frontend UI Developer focused on web layout and modern, accessible, responsive interfaces. I work with HTML5, CSS3, SCSS and BEM, with attention to visual detail, mobile-first adaptation and cross-browser consistency. I also have JavaScript knowledge for basic interactivity and experience with WordPress, Divi and Elementor.",
    stats: [
      { value: "C2", label: "Spanish" },
      { value: "B2", label: "English" },
      { value: "UA", label: "Native" },
    ],
    cta: "View my work",
    cvCta: "Download CV",
  },
  skills: {
    title: "Skills & Tools",
    categories: {
      frontend: { label: "Layout & Frontend UI", tools: [] },
      backend: { label: "Tools", tools: [] },
      other: { label: "Additional knowledge", tools: [] },
    },
  },
  experience: {
    eyebrow: "My path so far",
    title: "Education & Learning",
    items: [
      {
        period: "2024 — 2025",
        title: "Front-end Developer",
        org: "Mate academy",
        description:
          "Front-end development training covering responsive layout, JavaScript, HTML, CSS and Figma, focused on modern interfaces and best practices.",
        kind: "education",
      },
      {
        period: "2025",
        title: "Web Application Development with Web Technologies",
        org: "GRUPO FIDSOFT",
        description:
          "Level 3 Professional Certificate, equivalent to Higher Vocational Training. 590 hours covering client-side and server-side web programming and app deployment.",
        kind: "education",
      },
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Featured Projects",
    description:
      "A few projects I built to learn by doing — focused on clean UI, accessibility and readable code.",
    cta: "View project",
    items: [
      {
        title: "Phone Catalog",
        description:
          "Responsive catalog interface with product listings, clear navigation and reusable React components.",
        stack: ["React", "JavaScript", "CSS", "Responsive"],
        href: LINKS.projects.catalogPhone,
      },
      {
        title: "2048 Game",
        description:
          "Implementation of the classic 2048 game with smooth interaction, game logic and a clean mobile-friendly interface.",
        stack: ["JavaScript", "HTML", "SCSS", "Game UI"],
        href: LINKS.projects.game2048,
      },
    ],
  },
  contact: {
    eyebrow: "Open to opportunities",
    title: "Let's talk about your next interface.",
    lead: "I'm open to opportunities as a Frontend UI Developer, web layout developer or junior frontend profile. I bring visual care, organised code and a strong drive to keep growing.",
    ctaPrimary: "Email me",
    ctaSecondary: "Download CV",
    panelKicker: "Preferred channels",
    panelTitle: "The best ways to reach me",
    actions: [
      {
        key: "email",
        title: "Send an email",
        description: "Best for roles, questions and anything long-form.",
        href: mailto("Hello Yuliia — job opportunity"),
      },
      {
        key: "linkedin",
        title: "Connect on LinkedIn",
        description: "Great for networking and recruiting conversations.",
        href: LINKS.linkedin,
      },
      {
        key: "github",
        title: "Browse my GitHub",
        description: "See the code behind my projects and contributions.",
        href: LINKS.github,
      },
    ],
    socials: {
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
};
