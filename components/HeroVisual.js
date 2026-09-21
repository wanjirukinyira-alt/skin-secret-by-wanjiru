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
          node.style.transform = `scale(1.08) translateY(${movement}px)`;
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
    <div className="hero-visual relative min-h-[460px] overflow-hidden md:min-h-[620px]">
      <img
        ref={mediaRef}
        src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1400&q=90"
        alt="A calm skincare ritual"
        className="absolute inset-0 h-[110%] w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2e2933]/25 via-transparent to-transparent" />
      <span className="float-shape float-one">✦</span>
      <span className="float-shape float-two">○</span>
      <span className="float-shape float-three">✧</span>
      <div className="absolute bottom-6 left-6 rounded-full border border-white/60 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#2e2933] backdrop-blur md:bottom-8 md:left-8">
        Care • Glow • Repeat
      </div>
    </div>
  );
}
