"use client";

import { useEffect, useRef } from "react";

export default function HeroVisual() {
  const mediaRef = useRef(null);

  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const node = mediaRef.current;
        if (node) {
          const rect = node.parentElement.getBoundingClientRect();
          const movement = Math.max(-28, Math.min(28, rect.top * -0.035));
          node.style.transform = `translateY(${movement}px)`;
        }
        raf = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-visual absolute inset-0 h-full w-full overflow-hidden md:min-h-[620px]">
      <video
        ref={mediaRef}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        autoPlay
        muted
        loop
        playsInline
        aria-label="A calm skincare ritual"
        poster="/videos/wmremove-transformed.mp4"
      >
        <source src="/videos/wmremove-transformed.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#2e2933]/25 via-transparent to-transparent" />
      <span className="float-shape float-one">✦</span>
      <span className="float-shape float-two">○</span>
      <span className="float-shape float-three">✧</span>
    </div>
  );
}
