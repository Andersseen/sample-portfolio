import { AndIcon } from "@andersseen/react-components/components/and-icon";
import { AndBadge } from "@andersseen/react-components/components/and-badge";
import { AndCard } from "@andersseen/react-components/components/and-card";
import { AndCardContent } from "@andersseen/react-components/components/and-card-content";
import { AndCardDescription } from "@andersseen/react-components/components/and-card-description";
import { AndCardFooter } from "@andersseen/react-components/components/and-card-footer";
import { AndCardHeader } from "@andersseen/react-components/components/and-card-header";
import { AndCardTitle } from "@andersseen/react-components/components/and-card-title";
import { AndButton } from "@andersseen/react-components/components/and-button";
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
            <AndCard className="projects__card" key={project.title} variant="outline">
              <AndCardHeader>
                <AndCardTitle level={3}>{project.title}</AndCardTitle>
                <AndCardDescription>{project.description}</AndCardDescription>
              </AndCardHeader>
              <AndCardContent>
                <ul
                  className="projects__stack"
                  aria-label={`${project.title} stack`}
                >
                  {project.stack.map((tag) => (
                    <li key={`${project.title}-${tag}`}>
                      <AndBadge variant="outline" customClass="projects__tag">
                        {tag}
                      </AndBadge>
                    </li>
                  ))}
                </ul>
              </AndCardContent>
              <AndCardFooter>
                <AndButton
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="default"
                  size="sm"
                >
                  {projects.cta}
                  <AndIcon slot="end" name="external-link" size={16} />
                </AndButton>
              </AndCardFooter>
            </AndCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
