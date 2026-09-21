"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

export default function ShopGrid({ products, brands, categories }) {
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const brandMatch = brand === "All" || product.brand === brand;
      const categoryMatch = category === "All" || product.category === category;
      return brandMatch && categoryMatch;
    });
  }, [products, brand, category]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-[#e8dfec] bg-[#fffaf2] p-4 md:flex-row md:items-center">
        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="rounded-xl border border-[#d8cde0] bg-transparent px-4 py-3 text-sm outline-none">
          <option value="All">All brands</option>
          {brands.map((item) => <option key={item.slug} value={item.name}>{item.name}</option>)}
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-[#d8cde0] bg-transparent px-4 py-3 text-sm outline-none">
          <option value="All">All categories</option>
          {categories.filter((item) => item !== "All").map((item) => <option key={item} value={item}>{item}</option>)}
        </select>

        <p className="text-sm text-[#6f6773] md:ml-auto">{filtered.length} products</p>
      </div>

      {filtered.length ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <div className="rounded-2xl bg-[#fffaf2] py-20 text-center text-[#6f6773]">
          No products found with those filters.
        </div>
      )}
    </>
  );
}