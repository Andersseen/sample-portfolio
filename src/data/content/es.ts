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
      "Maqueto interfaces modernas, responsive y accesibles a partir de diseños en Figma.",
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
        period: "2024",
        title: "Frontend Developer",
        org: "Mate Academy",
        description:
          "Formación práctica centrada en maquetación web, interfaces responsive, HTML, CSS, JavaScript y buenas prácticas de desarrollo frontend.",
        kind: "education",
      },
      {
        period: "2024",
        title: "Desarrollo de Aplicaciones Web",
        org: "Grupo Fidsoft",
        description:
          "Aprendizaje orientado a la creación de aplicaciones web, estructura de proyectos, trabajo con interfaces y fundamentos de programación.",
        kind: "education",
      },
      {
        period: "2023",
        title: "Bienestar Integral",
        org: "IES La Arboleda",
        description:
          "Formación complementaria que refuerza la comunicación, la organización personal y la atención al detalle en entornos profesionales.",
        kind: "education",
      },
      {
        period: "Ucrania",
        title: "Complete Secondary School I-III",
        org: "Educación secundaria",
        description:
          "Base académica general completada antes de continuar la formación técnica y profesional en España.",
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
