import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/useLang";
import "./Projects.scss";

const Projects = () => {
  const { content } = useLang();
  const projects = content.projects;

  return (
    <section className="projects" aria-labelledby="projects-title">
      <div className="projects__container">
        <p className="projects__eyebrow">{projects.eyebrow}</p>
        <h2 className="projects__title" id="projects-title">
          {projects.title}
        </h2>
        <p className="projects__lead">{projects.description}</p>

        <div className="projects__grid">
          {projects.items.map((project) => (
            <article className="projects__card" key={project.title}>
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">
                {project.description}
              </p>
              <ul
                className="projects__stack"
                aria-label={`${project.title} stack`}
              >
                {project.stack.map((tag) => (
                  <li className="projects__tag" key={`${project.title}-${tag}`}>
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                className="projects__link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {projects.cta}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
