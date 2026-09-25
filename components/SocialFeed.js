import { Instagram } from "lucide-react";
import Reveal from "@/components/Reveal";
import ScrollZoomImage from "@/components/ScrollZoomImage";

const socialImages = [
  "/images/WhatsApp Image 2026-09-23 at 15.15.39.jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.41 (2).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.43 (2).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.45 (3).jpeg",
  "/images/WhatsApp Image 2026-09-23 at 15.15.48.jpeg",
];

export default function SocialFeed() {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--paper-alt)] py-20 sm:py-24" aria-labelledby="social-heading">
      <div className="container-site text-center">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2">
            <span className="eyebrow-line" />
            Skincare rituals
            <span className="eyebrow-line" />
          </p>
          <h2 id="social-heading" className="brand-serif mt-4 text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
            Our journey continues on social.
          </h2>

          <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--paper-alt)] transition-colors hover:bg-[var(--accent-dark)]">
            <Instagram size={14} />
            Follow along
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
          {socialImages.map((image, index) => (
            <Reveal key={image} delay={index * 100}>
              <a href="#" className="group relative block aspect-square overflow-hidden rounded-[16px]" aria-label={`View social post ${index + 1}`}>
                <ScrollZoomImage src={image} alt="Skin Secrets social feed" className="size-full" />
                <span className="absolute inset-0 flex items-center justify-center bg-[var(--accent)]/0 transition-colors duration-300 group-hover:bg-[var(--accent)]/20">
                  <Instagram size={24} className="translate-y-2 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
