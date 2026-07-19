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
    role: "Frontend UI Developer / Maquetadora Web",
    tagline:
      "Del diseño en Figma a una interfaz responsive, accesible y cuidada al detalle.",
  },
  about: {
    title: "Sobre mí",
    description:
      "Soy Frontend UI Developer especializada en maquetación web y creación de interfaces modernas, accesibles y responsive. Trabajo con HTML5, CSS3, SCSS y metodología BEM, cuidando el detalle visual, la adaptación mobile-first y la consistencia entre navegadores. También tengo conocimientos de JavaScript para interactividad básica y experiencia con WordPress, Divi y Elementor.",
    stats: [
      { value: "C2", label: "Español" },
      { value: "B2", label: "Inglés" },
      { value: "UA", label: "Nativo" },
    ],
    cta: "Ver mi trabajo",
    cvCta: "Descargar CV",
  },
  skills: {
    title: "Skills y Herramientas",
    categories: {
      frontend: { label: "Maquetación y Frontend UI", tools: [] },
      backend: { label: "Herramientas", tools: [] },
      other: { label: "Conocimientos adicionales", tools: [] },
    },
  },
  experience: {
    eyebrow: "Mi camino hasta ahora",
    title: "Formación y Aprendizaje",
    items: [
      {
        period: "2024 — 2025",
        title: "Front-end Developer",
        org: "Mate academy",
        description:
          "Formación en desarrollo front-end, maquetación responsive, JavaScript, HTML, CSS y Figma, con foco en interfaces modernas y buenas prácticas.",
        kind: "education",
      },
      {
        period: "2025",
        title: "Desarrollo de Aplicaciones con Tecnologías Web",
        org: "GRUPO FIDSOFT",
        description:
          "Certificado de Profesionalidad Nivel 3, equivalente a Grado Superior. 590 horas de programación web en cliente y servidor e implantación de aplicaciones.",
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
        title: "Catálogo de Teléfonos",
        description:
          "Interfaz de catálogo responsive con listado de productos, navegación clara y componentes reutilizables en React.",
        stack: ["React", "JavaScript", "CSS", "Responsive"],
        href: LINKS.projects.catalogPhone,
      },
      {
        title: "Juego 2048",
        description:
          "Implementación del clásico 2048 con interacción fluida, lógica de juego y una interfaz limpia adaptable a pantalla móvil.",
        stack: ["JavaScript", "HTML", "SCSS", "Game UI"],
        href: LINKS.projects.game2048,
      },
    ],
  },
  contact: {
    eyebrow: "Abierta a oportunidades",
    title: "Hablemos de tu próxima interfaz.",
    lead: "Estoy abierta a oportunidades como Frontend UI Developer, maquetadora web o roles junior de frontend. Puedo aportar cuidado visual, orden en el código y muchas ganas de seguir creciendo.",
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
