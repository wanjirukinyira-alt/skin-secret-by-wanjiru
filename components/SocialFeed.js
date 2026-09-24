import { Instagram } from "lucide-react";
import Reveal from "@/components/Reveal";

const socialImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400",
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
                <img
                  src={image}
                  alt="Skin Secrets social feed"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
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
