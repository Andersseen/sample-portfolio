import { useLang } from "@/lib/useLang";

export default function HeroText() {
  const { content } = useLang();

  return (
    <>
      <p className="hero__subtitle">{content.hero.role}</p>
      <p className="hero__tagline">{content.hero.tagline}</p>
    </>
  );
}
