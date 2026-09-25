"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const videos = [
  {
    src: "/videos/WhatsApp%20Video%202026-09-23%20at%2015.15.37%20(1).mp4",
    label: "A softer cleanse",
    index: "01",
    zoomRange: [1, 1.18], // hero zooms more
  },
  {
    src: "/videos/WhatsApp%20Video%202026-09-23%20at%2015.15.38.mp4",
    label: "Fresh hydration",
    index: "02",
    zoomRange: [1, 1.12],
  },
  {
    src: "/videos/WhatsApp%20Video%202026-09-23%20at%2015.15.46.mp4",
    label: "A moment for you",
    index: "03",
    zoomRange: [1, 1.12],
  },
];

export default function VideoReel() {
  return (
    <section
      className="relative w-full bg-[#f6f2ea] py-20 sm:py-28"
      aria-labelledby="motion-heading"
    >
      {/* Editorial heading above the reel */}
      <div className="mx-auto mb-14 max-w-3xl px-6 text-center">
        <p className="home-kicker">Rituals in motion</p>
        <h2
          id="motion-heading"
          className="brand-serif mt-4 text-4xl leading-[.95] sm:text-5xl lg:text-6xl"
        >
          Care, captured
          <br />
          <em className="italic">in the moment.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-[var(--ink-soft)]">
          A quiet look at the small, daily rituals that shape how your skin feels.
        </p>
      </div>

      {/* Full-bleed cinematic reel */}
      <div className="relative w-full">
        <div className="h-px w-full bg-black/10" />

        <div className="grid w-full grid-cols-1 gap-px bg-black/10 md:h-[85vh] md:grid-cols-3 md:grid-rows-2">
          <ReelItem
            video={videos[0]}
            className="md:col-span-2 md:row-span-2 aspect-[9/13] md:aspect-auto"
          />
          <ReelItem
            video={videos[1]}
            className="aspect-[9/13] md:aspect-auto"
          />
          <ReelItem
            video={videos[2]}
            className="aspect-[9/13] md:aspect-auto"
          />
        </div>

        <div className="h-px w-full bg-black/10" />
      </div>

      {/* Editorial sign-off */}
      <div className="mx-auto mt-10 max-w-3xl px-6 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          Aurelle &mdash; Skin in motion
        </p>
      </div>
    </section>
  );
}

function ReelItem({ video, className = "" }) {
  const ref = useRef(null);

  // Track scroll progress relative to this specific video
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to scale — zooms in as the video enters, zooms out as it leaves
  const scale = useTransform(scrollYProgress, [0, 1], video.zoomRange);

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden bg-[var(--paper-deep)] ${className}`}
    >
      {/* Scroll-driven zoom layer */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          className="size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={video.label}
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </motion.div>

      {/* Soft dark edge for text contrast */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Editorial caption */}
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-6 sm:px-8 sm:pb-8">
        <div>
          <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            {video.index}
          </span>
          <span className="block font-serif text-lg italic leading-tight text-white sm:text-xl">
            {video.label}
          </span>
        </div>
        <span className="mb-1 hidden h-px w-10 bg-white/60 transition-all duration-700 group-hover:w-16 sm:block" />
      </figcaption>
    </motion.figure>
  );
}