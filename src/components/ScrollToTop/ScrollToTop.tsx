import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AndIcon } from "@andersseen/react-components/components/and-icon";
import "./ScrollToTop.scss";

const SCROLL_THRESHOLD = 5;
const HERO_OFFSET = 120;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId = 0;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      rafId = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const hero = document.getElementById("home");
        const heroBottom = hero
          ? hero.getBoundingClientRect().bottom + currentScrollY
          : window.innerHeight;
        const passedHero = currentScrollY > heroBottom - HERO_OFFSET;
        const scrollingUp = currentScrollY < lastScrollY - SCROLL_THRESHOLD;
        const nearTop = currentScrollY < 100;

        if (passedHero && scrollingUp && !nearTop) {
          setVisible(true);
        } else if (currentScrollY > lastScrollY + SCROLL_THRESHOLD || nearTop) {
          setVisible(false);
        }
        setLastScrollY(currentScrollY);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
  };

  return (
    <motion.button
      type="button"
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.9 }
      }
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.35,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <AndIcon name="arrow-up" size={22} />
    </motion.button>
  );
}
