"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "/images/WhatsApp Image 2026-09-23 at 15.15.36.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.38 (1).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.38.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.39 (1).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.40.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.40 (1).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.41.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.42.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.42 (2).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.43.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.43 (1).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.44.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.44 (1).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.44 (2).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.45.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.45 (1).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.46.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.46 (1).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.47.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.47 (1).jpeg",
];

const featureCaptions = [
  "A slower kind of care.",
  "Skin, undisturbed.",
  "Ritual over routine.",
];

function ScrollZoomTile({ src }) {
  const tileRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.16, 1, 0.86]);

  return (
    <div ref={tileRef} className="size-full overflow-hidden">
      <motion.img
        src={src}
        alt="Skin Secrets skincare inspiration"
        loading="lazy"
        style={{ scale }}
        className="size-full object-cover grayscale-[15%] transition duration-700 group-hover:grayscale-0"
      />
    </div>
  );
}

export default function ImageWall() {
  return (
    <section
      className="relative w-full bg-[var(--paper-alt)] py-24 sm:py-32"
      aria-labelledby="image-wall-heading"
    >
      {/* Editorial header */}
      <div className="mx-auto mb-16 max-w-2xl px-6 text-center">
        <p className="home-kicker">The skincare edit</p>
        <h2
          id="image-wall-heading"
          className="brand-serif mt-4 text-4xl leading-[.95] sm:text-5xl lg:text-6xl"
        >
          More moments
          <br />
          <em className="italic">for your routine.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-[var(--ink-soft)]">
          A quiet gallery of texture, light, and the small daily rituals that
          shape healthier skin.
        </p>
      </div>

      {/* Full-bleed gallery */}
      <div className="relative w-full">
        <div className="h-px w-full bg-black/10" />

        <div className="grid w-full grid-cols-2 gap-1.5 p-1.5 sm:grid-cols-3 sm:gap-2 sm:p-2 lg:grid-cols-4">
          {images.map((src, index) => {
            const isFeature = index % 7 === 0;
            const isTall = index % 5 === 0 && !isFeature;
            const captionIndex = Math.floor(index / 7) % featureCaptions.length;

            return (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: (index % 4) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-lg bg-[var(--paper-deep)] sm:rounded-xl ${
                  isFeature
                    ? "col-span-2 aspect-[1.45/1]"
                    : isTall
                    ? "aspect-[.8]"
                    : "aspect-square"
                }`}
              >
                {/* Image with elegant hover treatment */}
                <ScrollZoomTile src={src} />

                {/* Soft inner vignette for depth */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Index number — always visible, editorial touch */}
                <span className="absolute left-3 top-3 text-[9px] font-medium uppercase tracking-[0.22em] text-white/0 transition-colors duration-500 group-hover:text-white/80 sm:left-4 sm:top-4 sm:text-[10px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Feature caption — only on the large tiles */}
                {isFeature && (
                  <>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
                      <div>
                        <span className="mb-2 block text-[9px] font-medium uppercase tracking-[0.28em] text-white/70 sm:text-[10px]">
                          Featured
                        </span>
                        <span className="block font-serif text-lg italic leading-tight text-white sm:text-2xl">
                          {featureCaptions[captionIndex]}
                        </span>
                      </div>
                      <span className="mb-1 hidden h-px w-8 bg-white/60 transition-all duration-700 group-hover:w-14 sm:block" />
                    </figcaption>
                  </>
                )}

                {/* Thin animated underline on hover for non-feature tiles */}
                {!isFeature && (
                  <span className="pointer-events-none absolute bottom-3 left-1/2 h-px w-0 -translate-x-1/2 bg-white/80 transition-all duration-700 group-hover:w-10 sm:bottom-4" />
                )}
              </motion.figure>
            );
          })}
        </div>

        <div className="h-px w-full bg-black/10" />
      </div>

      {/* Editorial sign-off */}
      <div className="mx-auto mt-12 max-w-3xl px-6 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          Aurelle &mdash; The skincare edit
        </p>
      </div>
    </section>
  );
}
