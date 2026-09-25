"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  { id: 1, text: "I've struggled with dryness for years. This routine made my skin feel calm, soft, and balanced again.", author: "Sarah M.", title: "Verified Buyer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  { id: 2, text: "The products feel considered and simple to use. I saw a real difference within the first week.", author: "Akinyi M.", title: "Verified Buyer", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" },
  { id: 3, text: "My routine finally feels effective without being overwhelming. My skin has never looked healthier.", author: "Jasmine R.", title: "Verified Buyer", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" },
  { id: 4, text: "Thoughtful products, clear advice, and no pressure to buy what I don't need. Exactly what I wanted.", author: "Mercy W.", title: "Verified Buyer", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
  { id: 5, text: "A small daily ritual that feels luxurious. My skin is brighter and much more comfortable.", author: "Nia K.", title: "Verified Buyer", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop" },
  { id: 6, text: "Everything works beautifully together. I appreciate how easy it is to keep my routine consistent.", author: "Wanjiku N.", title: "Verified Buyer", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop" },
];

function TestimonialCard({ testimonial }) {
  return (
    <article className="group flex min-h-[26rem] w-[min(15rem,43vw)] flex-col justify-between bg-white p-5 shadow-[0_16px_30px_rgba(27,29,24,0.09)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_40px_rgba(27,29,24,0.14)] sm:min-h-[28rem] sm:w-72 sm:p-8">
      <p className="text-[11px] leading-5 text-[var(--ink-soft)] sm:text-sm sm:leading-6">"{testimonial.text}"</p>
      <footer className="mt-5 flex items-center gap-3">
        <img
          src={testimonial.img}
          alt={`Portrait of ${testimonial.author}`}
          className="size-9 rounded-full object-cover ring-1 ring-black/5 sm:size-11"
        />
        <p className="text-[10px] leading-4 text-[var(--muted)] sm:text-xs sm:leading-5">
          <span className="font-semibold text-[var(--ink)]">{testimonial.author}</span><br />
          {testimonial.title}
        </p>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.15, 0.8], [1, 1, 0]);

  const rows = [
    [testimonials[0], testimonials[1]],
    [testimonials[2]],
    [testimonials[3], testimonials[4]],
    [testimonials[5]],
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] bg-[#f6f2ea]"
      aria-labelledby="results-heading"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#f6f2ea]">

        {/* ============ FULL BACKGROUND IMAGE ============ */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556228720-1957a8a5b3c1?auto=format&fit=crop&w=2000&q=85"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          {/* Soft cream overlay so text stays readable */}
          <div className="absolute inset-0 bg-[#f6f2ea]/75" />
        </div>

        {/* Central product image (sits above the background, below the cards) */}
        <img
          src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=85"
          alt="A signature skincare serum bottle"
          className="absolute left-1/2 top-1/2 z-10 h-[250px] w-[165px] -translate-x-1/2 -translate-y-1/2 rounded-sm object-cover shadow-[0_30px_60px_rgba(27,29,24,0.22)] sm:h-[360px] sm:w-[275px]"
        />

        {/* Section heading */}
        <div className="absolute left-1/2 top-9 z-10 w-full -translate-x-1/2 px-5 text-center sm:top-14">
          <p className="home-kicker">Customer stories</p>
          <h2
            id="results-heading"
            className="brand-serif mt-3 text-4xl leading-[.95] sm:text-5xl lg:text-6xl"
          >
            Results that make<br />a difference.
          </h2>
        </div>

        {/* Scrolling rows of testimonial cards */}
        <motion.div
          style={{ y }}
          className="absolute left-[-10vw] top-[29vh] z-40 h-[260vh] w-[120vw] will-change-transform"
        >
          {rows.map((row, index) => (
            <div
              key={index}
              role="list"
              className={`flex h-[65vh] items-center ${
                row.length === 1
                  ? "justify-center"
                  : index === 0
                  ? "justify-center gap-24 sm:gap-64 lg:gap-[28rem] xl:gap-[32rem]"
                  : "justify-between px-[12vw] sm:px-[15vw]"
              }`}
            >
              {row.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ))}
        </motion.div>

        {/* Very soft top fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-50 h-16 bg-gradient-to-b from-[#f6f2ea]/70 to-transparent sm:h-20"
        />

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-24 bg-gradient-to-t from-[#f6f2ea] to-transparent sm:h-32"
        />

        {/* Scroll hint */}
        <motion.p
          style={{ opacity: hintOpacity }}
          className="absolute bottom-7 left-1/2 z-[60] -translate-x-1/2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:bottom-10"
        >
          Scroll to explore ↓
        </motion.p>
      </div>
    </section>
  );
}