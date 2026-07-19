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
      "I build modern, responsive and accessible interfaces from Figma designs.",
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
        period: "2024",
        title: "Frontend Developer",
        org: "Mate Academy",
        description:
          "Practical training focused on web layout, responsive interfaces, HTML, CSS, JavaScript and frontend development best practices.",
        kind: "education",
      },
      {
        period: "2024",
        title: "Web Application Development",
        org: "Grupo Fidsoft",
        description:
          "Learning path oriented toward web application creation, project structure, interface work and programming fundamentals.",
        kind: "education",
      },
      {
        period: "2023",
        title: "Bienestar Integral",
        org: "IES La Arboleda",
        description:
          "Complementary training that strengthens communication, personal organisation and attention to detail in professional environments.",
        kind: "education",
      },
      {
        period: "Ukraine",
        title: "Complete Secondary School I-III",
        org: "Secondary education",
        description:
          "General academic foundation completed before continuing technical and professional training in Spain.",
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
        title: "Recipe Finder PWA",
        description:
          "Search thousands of recipes by ingredient with a public API, save favourites offline and install it as an app on any device.",
        stack: ["React", "TypeScript", "REST API", "PWA"],
        href: LINKS.projects.recipes,
      },
      {
        title: "Task Manager (Kanban)",
        description:
          "A drag-and-drop board to organise tasks across columns, with persistent state and a keyboard-accessible, responsive layout.",
        stack: ["React", "TypeScript", "Zustand", "CSS"],
        href: LINKS.projects.tasks,
      },
      {
        title: "Storefront Demo",
        description:
          "A small e-commerce front end with product listings, cart and checkout flow, built to practise state management and clean components.",
        stack: ["Next.js", "TypeScript", "Stripe"],
        href: LINKS.projects.shop,
      },
      {
        title: "This Portfolio",
        description:
          "The site you're on now — built with Astro islands, SCSS and a hand-tuned oklch colour system, fully responsive with light & dark themes.",
        stack: ["Astro", "React", "SCSS"],
        href: LINKS.projects.portfolio,
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
