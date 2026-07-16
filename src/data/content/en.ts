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
    role: "Junior Full-Stack Developer",
    tagline: "I build clean, accessible web interfaces with React & TypeScript.",
  },
  about: {
    title: "About Me",
    description:
      "I'm a junior full-stack developer who fell in love with building for the web. After completing an intensive bootcamp and shipping a handful of personal projects, I focus on writing clean, accessible React & TypeScript — and I learn something new with every commit. I'm looking for a team where I can grow and contribute from day one.",
    stats: [
      { value: "12+", label: "Projects built" },
      { value: "10+", label: "Technologies" },
      { value: "3", label: "Certifications" },
    ],
    cta: "View my work",
    cvCta: "Download CV",
  },
  skills: {
    title: "Tools I'm Using",
    categories: {
      frontend: { label: "Frontend", tools: [] },
      backend: { label: "Backend", tools: [] },
      other: { label: "Other", tools: [] },
    },
  },
  experience: {
    eyebrow: "My path so far",
    title: "Education & Learning",
    items: [
      {
        period: "2024",
        title: "Full-Stack Web Development Bootcamp",
        org: "Certified graduate",
        description:
          "600+ hours of JavaScript, React, Node.js and databases, closing with a capstone team project shipped to production.",
        kind: "education",
      },
      {
        period: "2024",
        title: "Freelance & Volunteer Projects",
        org: "Self-employed",
        description:
          "Built responsive landing pages and small web apps for a local business and a non-profit — from design hand-off to deployment.",
        kind: "work",
      },
      {
        period: "2023 — Now",
        title: "Always learning",
        org: "Self-taught",
        description:
          "Sharpening my skills every week with side projects, open source and courses. Currently going deeper on TypeScript and testing.",
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
    title: "Let's build something together.",
    lead: "I'm looking for my first junior developer role and open to freelance work. If you think I'd be a good fit for your team, I'd love to hear from you.",
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
