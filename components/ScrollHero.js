"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    eyebrow: "Skin Secrets by Wanjiru",
    title: "Beauty that",
    accent: "feels natural.",
    body: "A thoughtful collection of skincare essentials for the routine you already have.",
    image: "/images/gen_9105da7762_8941c4d556761952.png",
    position: "center",
  },
  {
    eyebrow: "Your everyday ritual",
    title: "Slow down.",
    accent: "Let your skin breathe.",
    body: "Care is not a complicated checklist. It is a quiet moment that belongs to you.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1800&q=92",
    position: "center",
  },
  {
    eyebrow: "Thoughtfully selected",
    title: "Less noise.",
    accent: "More of what works.",
    body: "A considered edit of effective essentials, chosen to make your routine feel clear and easy.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1800&q=92",
    position: "center 38%",
  },
  {
    eyebrow: "Made for your glow",
    title: "Feel the",
    accent: "difference.",
    body: "Beautiful skin is built gently, one consistent moment at a time.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1800&q=92",
    position: "center",
  },
];

export default function ScrollHero() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateSlide = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(0.999, Math.max(0, -rect.top / scrollableDistance));
      setActiveIndex(Math.min(slides.length - 1, Math.floor(progress * slides.length)));
    };

    updateSlide();
    window.addEventListener("scroll", updateSlide, { passive: true });
    window.addEventListener("resize", updateSlide);
    return () => {
      window.removeEventListener("scroll", updateSlide);
      window.removeEventListener("resize", updateSlide);
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll-hero" aria-label="Skin Secrets story">
      <div className="scroll-hero-sticky">
        {slides.map((slide, index) => (
          <img
            key={slide.title}
            src={slide.image}
            alt=""
            aria-hidden={index !== activeIndex}
            className={`scroll-hero-image ${index === activeIndex ? "is-active" : ""}`}
            style={{ objectPosition: slide.position }}
          />
        ))}
        <div className="scroll-hero-shade" />

        {slides.map((slide, index) => (
          <div key={slide.accent} className={`scroll-hero-copy ${index === activeIndex ? "is-active" : ""}`} aria-hidden={index !== activeIndex}>
            <p className="home-kicker text-white/70">{slide.eyebrow}</p>
            <h1 className="brand-serif">{slide.title} <em>{slide.accent}</em></h1>
            <p>{slide.body}</p>
            <Link href="/shop" tabIndex={index === activeIndex ? 0 : -1} className="home-underline-link">Shop skincare <ArrowUpRight size={15} /></Link>
          </div>
        ))}

        <div className="scroll-hero-progress" aria-hidden>
          {slides.map((slide, index) => <span key={slide.title} className={index === activeIndex ? "is-active" : ""} />)}
        </div>
        <p className="scroll-hero-scroll" aria-hidden>Scroll to explore</p>
      </div>
    </section>
  );
}
