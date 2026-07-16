export type Lang = "EN" | "ES" | "UA";

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillCategory {
  label: string;
  tools: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  description: string;
  kind: "work" | "education";
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  href: string;
}

export interface ContactAction {
  key: "email" | "github" | "linkedin";
  title: string;
  description: string;
  href: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    role: string;
    tagline: string;
  };
  about: {
    title: string;
    description: string;
    stats: StatItem[];
    cta: string;
    cvCta: string;
  };
  skills: {
    title: string;
    categories: {
      frontend: SkillCategory;
      backend: SkillCategory;
      other: SkillCategory;
    };
  };
  experience: {
    eyebrow: string;
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    items: ProjectItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    panelKicker: string;
    panelTitle: string;
    actions: ContactAction[];
    socials: {
      github: string;
      linkedin: string;
    };
  };
}
