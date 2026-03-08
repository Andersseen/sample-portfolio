export const CONTENT = {
  hero: {
    title: "John Doe",
    subtitle: "Full Stack Developer",
  },
  about: {
    title: "About Me",
    description:
      "I'm a passionate developer with expertise in modern web technologies. With over 5 years of experience, I specialize in creating beautiful and functional web applications.",
  },
  projects: {
    title: "Featured Projects",
    description:
      "A selection of products focused on performance, strong UX and maintainable architecture.",
    items: [
      {
        title: "Commerce Analytics Dashboard",
        description:
          "Real-time sales and retention dashboard with custom widgets, role-based access and offline-ready charts.",
        stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        href: "https://github.com",
      },
      {
        title: "Hospital Appointment Platform",
        description:
          "Scheduling platform with smart availability, secure patient records and async notifications.",
        stack: ["Next.js", "Prisma", "Tailwind", "Redis"],
        href: "https://github.com",
      },
      {
        title: "Travel Planning App",
        description:
          "Collaborative itinerary builder with maps, live weather and optimized route planning for teams.",
        stack: ["React Native", "Firebase", "GraphQL"],
        href: "https://github.com",
      },
      {
        title: "Portfolio CMS",
        description:
          "Lightweight content management layer for personal sites with markdown workflows and media pipelines.",
        stack: ["Astro", "TypeScript", "Supabase"],
        href: "https://github.com",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    submitButton: "Send Message",
  },
  skills: {
    title: "Skills",
    items: [
      { name: "Frontend Development", percentage: 90 },
      { name: "Backend Development", percentage: 85 },
      { name: "UI/UX Design", percentage: 75 },
      { name: "DevOps", percentage: 80 },
      { name: "Mobile Development", percentage: 70 },
      { name: "Database Management", percentage: 85 },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        year: "2023",
        title: "Senior Developer at Tech Corp",
        description:
          "Led a team of developers in building scalable web applications using modern technologies.",
      },
      {
        year: "2021",
        title: "Full Stack Developer at StartUp Inc",
        description:
          "Developed and maintained multiple client projects using React and Node.js.",
      },
      {
        year: "2019",
        title: "Frontend Developer at Design Agency",
        description:
          "Created responsive and interactive web interfaces for various clients.",
      },
    ],
  },
  blog: {
    title: "Latest Posts",
    posts: [
      {
        title: "The Future of Web Development",
        date: "April 15, 2024",
        excerpt:
          "Exploring the latest trends and technologies shaping the future of web development.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      {
        title: "Mastering React Hooks",
        date: "April 10, 2024",
        excerpt:
          "A comprehensive guide to using React Hooks effectively in your applications.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      },
      {
        title: "Building Scalable APIs",
        date: "April 5, 2024",
        excerpt:
          "Best practices for designing and implementing scalable REST APIs.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      },
    ],
  },
};
