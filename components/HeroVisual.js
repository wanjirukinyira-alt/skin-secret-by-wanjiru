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
        if (!node || !node.parentElement) return;
        const rect = node.parentElement.getBoundingClientRect();
        const movement = Math.max(-18, Math.min(18, rect.top * -0.025));
        node.style.transform = `translateY(${movement}px) scale(1.06)`;
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
    <div className="hero-visual relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Soft moss glow behind the video */}
      <div className="hero-visual-glow" aria-hidden="true" />

      {/* Video — full-bleed across the right side of the hero */}
      <div className="hero-visual-frame will-change-transform">
        <video
          ref={mediaRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="A calm skincare ritual"
        >
          <source src="/videos/wmremove-transformed-enhanced.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background wash so masked edges match the section */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--paper)]" />

      {/* Left-edge fade so hero copy never fights the video */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--paper)] via-[var(--paper)]/40 to-transparent" />

      {/* Bottom vignette for weight */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ink)]/10 via-transparent to-transparent" />

      {/* Floating marks — dark moss ink so they're visible on cream */}
      <span className="float-shape float-one" aria-hidden="true">✦</span>
      <span className="float-shape float-two" aria-hidden="true">○</span>
      <span className="float-shape float-three" aria-hidden="true">✧</span>
    </div>
  );
}
