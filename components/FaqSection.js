"use client";

import { Minus, Plus, Sparkle } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "Are your products safe for sensitive skin?",
    a: "Yes. Every product we stock is skin-safety checked and formulated to be gentle. We avoid harsh stripping agents and always recommend patch-testing new actives.",
  },
  {
    q: "Are your products cruelty-free?",
    a: "Absolutely. We never test on animals, and we prioritise brands that share our commitment to ethical, cruelty-free skincare.",
  },
  {
    q: "Do you use natural ingredients?",
    a: "Our products are enriched with plant-based extracts and formulated to be gentle and pure, balancing nature with clinically proven safety.",
  },
  {
    q: "How do I choose the right products for my skin type?",
    a: "We recommend taking our online skin quiz or consulting our product guides. If you're unsure, reach out to us on WhatsApp and we'll help you build a routine.",
  },
  {
    q: "Can I use multiple products together?",
    a: "Yes. Our products are designed to work synergistically. Follow the layering guide on each product page, usually from thinnest to thickest consistency.",
  },
  {
    q: "How often should I use your products?",
    a: "Most products are designed for daily use, morning and night. Specific exfoliants or retinol alternatives may be used two to three times a week.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(2);

  const toggleFaq = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="container-site py-20 sm:py-28" aria-labelledby="faq-heading">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="h-fit lg:sticky lg:top-32">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Sparkle size={13} className="opacity-80" />
              Skincare questions
            </p>
            <h2 id="faq-heading" className="brand-serif mt-4 text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
              Everything you need to know.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
              Have questions about our products? We&apos;re here to help you every step of the way.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.q} delay={index * 50}>
                <div className="border-b border-[var(--line)] last:border-0">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-center justify-between py-5 text-left transition-colors"
                  >
                    <span className={`text-sm transition-colors sm:text-base ${isOpen ? "font-medium text-[var(--ink)]" : "text-[var(--ink-soft)] group-hover:text-[var(--ink)]"}`}>
                      {faq.q}
                    </span>
                    <span className="ml-5 shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" aria-hidden>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="pr-8 text-sm leading-7 text-[var(--muted)]">{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
