import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./About.scss";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
      <div className="about__animation">
        <div ref={containerRef} className="about__lottie" />
      </div>
      <div className="about__text">
        <h2 className="about__title" id="about-title">
          About Us
        </h2>
        <p className="about__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};

export default About;
