import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { CONTENT } from "@/data/content";
import "./About.scss";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { about } = CONTENT;

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/about-animation.json",
    });

    return () => animation.destroy();
  }, []);

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__visual" aria-hidden="true">
        <div ref={containerRef} className="about__lottie" />
      </div>
      <div className="about__text">
        <p className="about__eyebrow">{about.eyebrow}</p>
        <h2 className="about__title" id="about-title">
          {about.title}
        </h2>
        <p className="about__description">{about.description}</p>
        <ul className="about__details">
          {about.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <dl className="about__stats">
          {about.stats.map((stat) => (
            <div className="about__stat" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
