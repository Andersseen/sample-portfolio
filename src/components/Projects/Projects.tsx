import { ArrowUpRight } from "lucide-react";
import { CONTENT } from "@/data/content";
import "./Projects.scss";

type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  href: string;
};

type ProjectsContent = {
  title: string;
  description: string;
  items: ProjectItem[];
};

const Projects = () => {
  const projectsContent = CONTENT.projects as ProjectsContent;
  const projects = projectsContent.items;

  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects__container">
        <p className="projects__eyebrow">Selected Work</p>
        <h2 className="projects__title" id="projects-title">
          {projectsContent.title}
        </h2>
        <p className="projects__lead">{projectsContent.description}</p>

        <div className="projects__grid">
          {projects.map((project) => (
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
                View project
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
