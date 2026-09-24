"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/data/products";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
      setActiveIndex(0);
      return () => clearTimeout(timer);
    }
    document.body.style.overflow = "";
  }, [open]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  const matches = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return products.slice(0, 4);
    return products
      .filter((product) =>
        [product.name, product.brand, product.category, product.description]
          .join(" ")
          .toLowerCase()
          .includes(term)
      )
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, matches.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, matches.length, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-[var(--ink)]/40 backdrop-blur-md"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div
        className="mx-auto mt-24 max-w-xl px-4 sm:mt-32"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-4 border-b border-[var(--paper-alt)]/25 pb-4">
          <Search size={18} className="shrink-0 text-[var(--paper-alt)]/60" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIndex(0); }}
            placeholder="Search"
            className="w-full bg-transparent text-lg text-[var(--paper-alt)] outline-none placeholder:text-[var(--paper-alt)]/40"
            aria-label="Search"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="shrink-0 text-[var(--paper-alt)]/50 transition hover:text-[var(--paper-alt)]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        <div className="mt-8">
          {matches.length > 0 ? (
            <ul className="space-y-1">
              {matches.map((product, index) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.id}`}
                    onClick={onClose}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`group flex items-baseline justify-between gap-6 py-3 transition-colors ${
                      index === activeIndex
                        ? "text-[var(--paper-alt)]"
                        : "text-[var(--paper-alt)]/60 hover:text-[var(--paper-alt)]"
                    }`}
                  >
                    <span className="brand-serif text-xl leading-tight">
                      {product.name}
                    </span>
                    <span className="shrink-0 text-xs tracking-wide text-[var(--paper-alt)]/50">
                      KSh {product.price.toLocaleString()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-3 text-sm text-[var(--paper-alt)]/50">
              No matches for &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>

        {/* Quiet footer link */}
        <div className="mt-10">
          <Link
            href="/shop"
            onClick={onClose}
            className="text-[11px] font-medium uppercase tracking-[.18em] text-[var(--paper-alt)]/50 transition hover:text-[var(--paper-alt)]"
          >
            Browse all products
          </Link>
        </div>
      </div>
    </div>
  );
}