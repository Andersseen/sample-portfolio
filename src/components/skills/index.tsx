import { useEffect, useRef } from "react";
import "./skills.scss";
import AnimatedBody from "./AnimatedBody";
import AnimatedTitle from "./AnimatedTitle";
import AnimatedTools from "./AnimatedTools";
import lottie from "lottie-web";
import {
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

const ICON_SIZE = 50;

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/skills-animation.json",
    });

    return () => animation.destroy();
  }, []);

  return (
    <section className="skills" id="skills">
      <AnimatedTitle
        text="TOOLS IM USING."
        className="skills__title"
        wordSpace="animated-word"
        charSpace="animated-char"
      />
      <div className="skills__content">
        <div className="skills__categories">
          <div className="skills__category">
            <AnimatedBody delay={0.2} text="Frontend" />
            <AnimatedTools
              className="skills__tools-grid skills__tools-grid--4col"
              delay={0.2}
              stepSize={0.1}
              iconSize={ICON_SIZE}
            >
              <SiTypescript size={ICON_SIZE} />
              <SiJavascript size={ICON_SIZE} />
              <SiReact size={ICON_SIZE} />
              <SiNextdotjs size={ICON_SIZE} />
            </AnimatedTools>
          </div>
          <div className="skills__category">
            <AnimatedBody delay={0.3} text="Backend" />
            <AnimatedTools
              className="skills__tools-grid skills__tools-grid--4col"
              delay={0.3}
              stepSize={0.1}
              iconSize={ICON_SIZE}
            >
              <SiPostgresql size={ICON_SIZE} />
              <SiMysql size={ICON_SIZE} />
              <SiMongodb size={ICON_SIZE} />
              <SiNodedotjs size={ICON_SIZE} />
            </AnimatedTools>
          </div>
          <div className="skills__category">
            <AnimatedBody delay={0.4} text="Other" />
            <AnimatedTools
              className="skills__tools-grid skills__tools-grid--2col"
              delay={0.4}
              stepSize={0.1}
              iconSize={ICON_SIZE}
            >
              <SiGithub size={ICON_SIZE} />
              <SiGit size={ICON_SIZE} />
            </AnimatedTools>
          </div>
        </div>
        <div className="skills__animation">
          <div ref={containerRef} className="skills__lottie" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
