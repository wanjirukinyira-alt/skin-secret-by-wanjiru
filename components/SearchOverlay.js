"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/data/products";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
      return () => clearTimeout(timer);
    }
    document.body.style.overflow = "";
  }, [open]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  const matches = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return products.slice(0, 5);
    return products
      .filter((product) =>
        [product.name, product.brand, product.category, product.description]
          .join(" ")
          .toLowerCase()
          .includes(term)
      )
      .slice(0, 8);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-[#2e2933]/45 p-3 backdrop-blur-sm sm:p-6" onMouseDown={onClose}>
      <div
        className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[28px] bg-[#fffaf2] shadow-2xl sm:mt-20"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[#e8dfec] px-5 py-4 sm:px-7">
          <Search size={20} className="text-[#8a9a7b]" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products, brands or categories..."
            className="w-full bg-transparent py-2 text-base outline-none placeholder:text-[#8a8290]"
          />
          <button onClick={onClose} aria-label="Close search" className="rounded-full p-2 transition hover:bg-[#eee7f3]">
            <X size={19} />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-4 sm:p-6">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.18em] text-[#8a9a7b]">
            {query ? `${matches.length} result${matches.length === 1 ? "" : "s"}` : "Popular right now"}
          </p>

          {matches.length > 0 ? (
            <div className="grid gap-2">
              {matches.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-[#f1ecf5]"
                >
                  <img src={product.image} alt="" className="h-16 w-14 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#8a9a7b]">{product.brand}</p>
                    <p className="truncate font-medium">{product.name}</p>
                    <p className="mt-1 text-sm text-[#6f6773]">KSh {product.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-[#f1ecf5] px-6 py-10 text-center">
              <p className="font-medium">No products found.</p>
              <p className="mt-2 text-sm text-[#6f6773]">Try a brand like Dove or a word like serum.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
