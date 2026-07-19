import { useEffect, useRef } from "react";
import "./skills.scss";
import AnimatedBody from "./AnimatedBody";
import AnimatedTitle from "./AnimatedTitle";
import AnimatedTools from "./AnimatedTools";
import lottie from "lottie-web";
import { useLang } from "@/lib/useLang";
import {
  SiCss3,
  SiElementor,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiSass,
  SiVisualstudiocode,
  SiWordpress,
} from "react-icons/si";

const ICON_SIZE = 40;

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, content } = useLang();
  const skills = content.skills;

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
    <section className="skills">
      <AnimatedTitle
        key={lang}
        text={skills.title}
        className="skills__title"
        wordSpace="animated-word"
        charSpace="animated-char"
      />
      <div className="skills__content">
        <div className="skills__categories">
          <div className="skills__category">
            <AnimatedBody delay={0.2} text={skills.categories.frontend.label} />
            <AnimatedTools
              className="skills__tools-grid skills__tools-grid--4col"
              delay={0.2}
              stepSize={0.1}
              iconSize={ICON_SIZE}
            >
              <SiHtml5 size={ICON_SIZE} />
              <SiCss3 size={ICON_SIZE} />
              <SiSass size={ICON_SIZE} />
              <SiJavascript size={ICON_SIZE} />
            </AnimatedTools>
          </div>
          <div className="skills__category">
            <AnimatedBody delay={0.3} text={skills.categories.backend.label} />
            <AnimatedTools
              className="skills__tools-grid skills__tools-grid--4col"
              delay={0.3}
              stepSize={0.1}
              iconSize={ICON_SIZE}
            >
              <SiFigma size={ICON_SIZE} />
              <SiGit size={ICON_SIZE} />
              <SiGithub size={ICON_SIZE} />
              <SiVisualstudiocode size={ICON_SIZE} />
            </AnimatedTools>
          </div>
          <div className="skills__category">
            <AnimatedBody delay={0.4} text={skills.categories.other.label} />
            <AnimatedTools
              className="skills__tools-grid skills__tools-grid--3col"
              delay={0.4}
              stepSize={0.1}
              iconSize={ICON_SIZE}
            >
              <SiGooglechrome size={ICON_SIZE} />
              <SiWordpress size={ICON_SIZE} />
              <SiElementor size={ICON_SIZE} />
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
