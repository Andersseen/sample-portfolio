import type { Content } from "./types";
import { LINKS, mailto } from "./links";

export const es: Content = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Skills",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    role: "Desarrolladora Full-Stack Junior",
    tagline:
      "Creo interfaces web limpias y accesibles con React y TypeScript.",
  },
  about: {
    title: "Sobre mí",
    description:
      "Soy desarrolladora full-stack junior y me enamoré de construir para la web. Tras completar un bootcamp intensivo y publicar varios proyectos propios, me centro en escribir React y TypeScript limpio y accesible, y aprendo algo nuevo en cada commit. Busco un equipo en el que crecer y aportar desde el primer día.",
    stats: [
      { value: "12+", label: "Proyectos" },
      { value: "10+", label: "Tecnologías" },
      { value: "3", label: "Certificaciones" },
    ],
    cta: "Ver mi trabajo",
    cvCta: "Descargar CV",
  },
  skills: {
    title: "Herramientas Que Uso",
    categories: {
      frontend: { label: "Frontend", tools: [] },
      backend: { label: "Backend", tools: [] },
      other: { label: "Otras", tools: [] },
    },
  },
  experience: {
    eyebrow: "Mi camino hasta ahora",
    title: "Formación y Aprendizaje",
    items: [
      {
        period: "2024",
        title: "Bootcamp de Desarrollo Web Full-Stack",
        org: "Graduada certificada",
        description:
          "Más de 600 horas de JavaScript, React, Node.js y bases de datos, con un proyecto final en equipo desplegado en producción.",
        kind: "education",
      },
      {
        period: "2024",
        title: "Proyectos freelance y de voluntariado",
        org: "Autónoma",
        description:
          "Desarrollé landing pages responsive y pequeñas apps para un negocio local y una ONG: del diseño al despliegue.",
        kind: "work",
      },
      {
        period: "2023 — Ahora",
        title: "Siempre aprendiendo",
        org: "Autodidacta",
        description:
          "Mejoro cada semana con proyectos propios, open source y cursos. Ahora profundizo en TypeScript y testing.",
        kind: "education",
      },
    ],
  },
  projects: {
    eyebrow: "Trabajo seleccionado",
    title: "Proyectos Destacados",
    description:
      "Algunos proyectos que hice para aprender haciendo, centrados en UI limpia, accesibilidad y código legible.",
    cta: "Ver proyecto",
    items: [
      {
        title: "Buscador de Recetas (PWA)",
        description:
          "Busca miles de recetas por ingrediente con una API pública, guarda favoritas sin conexión e instálala como app en cualquier dispositivo.",
        stack: ["React", "TypeScript", "API REST", "PWA"],
        href: LINKS.projects.recipes,
      },
      {
        title: "Gestor de Tareas (Kanban)",
        description:
          "Un tablero drag-and-drop para organizar tareas por columnas, con estado persistente y un diseño responsive accesible por teclado.",
        stack: ["React", "TypeScript", "Zustand", "CSS"],
        href: LINKS.projects.tasks,
      },
      {
        title: "Tienda Demo",
        description:
          "Un front-end de e-commerce con catálogo, carrito y flujo de compra, hecho para practicar gestión de estado y componentes limpios.",
        stack: ["Next.js", "TypeScript", "Stripe"],
        href: LINKS.projects.shop,
      },
      {
        title: "Este Portfolio",
        description:
          "La web en la que estás ahora: hecha con islas de Astro, SCSS y un sistema de color oklch ajustado a mano, responsive y con modo claro y oscuro.",
        stack: ["Astro", "React", "SCSS"],
        href: LINKS.projects.portfolio,
      },
    ],
  },
  contact: {
    eyebrow: "Abierta a oportunidades",
    title: "Construyamos algo juntos.",
    lead: "Busco mi primer puesto como desarrolladora junior y estoy abierta a trabajo freelance. Si crees que encajo en tu equipo, me encantará saber de ti.",
    ctaPrimary: "Escríbeme",
    ctaSecondary: "Descargar CV",
    panelKicker: "Canales preferidos",
    panelTitle: "Las mejores formas de contactarme",
    actions: [
      {
        key: "email",
        title: "Enviar un email",
        description: "Ideal para ofertas, dudas y mensajes más largos.",
        href: mailto("Hola Yuliia — oportunidad laboral"),
      },
      {
        key: "linkedin",
        title: "Conectar en LinkedIn",
        description: "Perfecto para networking y procesos de selección.",
        href: LINKS.linkedin,
      },
      {
        key: "github",
        title: "Explorar mi GitHub",
        description: "Mira el código de mis proyectos y contribuciones.",
        href: LINKS.github,
      },
    ],
    socials: {
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
};
