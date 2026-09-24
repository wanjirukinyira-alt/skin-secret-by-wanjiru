"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";

const steps = [
  "All",
  "Cleansers",
  "Serums",
  "Moisturizers",
  "Sun Care",
  "Body Care",
  "Lip Care",
];

export default function RoutineExplorer({ products }) {
  const [activeStep, setActiveStep] = useState("All");

  const visibleProducts = useMemo(() => {
    const matching =
      activeStep === "All"
        ? products
        : products.filter((product) => product.category === activeStep);

    return (matching.length ? matching : products).slice(0, 3);
  }, [activeStep, products]);

  return (
    <section className="bg-[var(--paper-warm)] py-20 sm:py-28" aria-labelledby="routine-heading">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="eyebrow-line" /> Skincare rituals <span className="eyebrow-line" />
          </p>
          <h2 id="routine-heading" className="brand-serif mt-4 text-4xl leading-tight sm:text-5xl">
            Your routine, made simple and effective.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[var(--muted)]">
            Choose a step to find a few thoughtfully selected essentials for your everyday ritual.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Shop routine steps">
          {steps.map((step) => {
            const isActive = activeStep === step;
            return (
              <button
                key={step}
                type="button"
                onClick={() => setActiveStep(step)}
                role="tab"
                aria-selected={isActive}
                className={`rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[.12em] transition ${
                  isActive
                    ? "bg-[var(--accent)] text-[var(--paper-alt)]"
                    : "border border-[var(--line)] bg-[var(--paper-alt)] text-[var(--ink-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {step}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
