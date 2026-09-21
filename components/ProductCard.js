"use client";

import Link from "next/link";
import { Check, Heart, ShoppingBag, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("skin-secrets-favourites") || "[]");
      setFavourite(saved.includes(product.id));
    } catch {}
  }, [product.id]);

  function handleAdd() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  function toggleFavourite() {
    setFavourite((current) => {
      const next = !current;
      try {
        const saved = JSON.parse(localStorage.getItem("skin-secrets-favourites") || "[]");
        const updated = next
          ? Array.from(new Set([...saved, product.id]))
          : saved.filter((id) => id !== product.id);
        localStorage.setItem("skin-secrets-favourites", JSON.stringify(updated));
      } catch {}
      return next;
    });
  }

  return (
    <article className="product-card group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-[22px] bg-[#eee8f0]">
        <Link href={`/products/${product.id}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            {product.isNew && (
              <span className="absolute left-3 top-3 z-10 rounded-full bg-[#fffaf2]/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.16em] text-[#2e2933] backdrop-blur">
                New
              </span>
            )}
            <img src={product.image} alt={product.name} className="product-image h-full w-full object-cover" />
            {product.image2 && (
              <img src={product.image2} alt="" className="product-image-alt absolute inset-0 h-full w-full object-cover" />
            )}
          </div>
        </Link>

        <button
          onClick={toggleFavourite}
          aria-label={favourite ? `Remove ${product.name} from favourites` : `Add ${product.name} to favourites`}
          className={`absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 backdrop-blur transition ${
            favourite ? "bg-[#b7a8c9] text-white" : "bg-[#fffaf2]/82 text-[#2e2933] hover:bg-white"
          }`}
        >
          <Heart size={18} fill={favourite ? "currentColor" : "none"} strokeWidth={1.7} />
        </button>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <Link href={`/products/${product.id}`} className="block">
          <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#8a9a7b]">{product.brand}</p>
          <h3 className="mt-1.5 text-[15px] font-semibold leading-5 text-[#2e2933]">{product.name}</h3>
          <div className="mt-2 flex items-center gap-1 text-[#8b7f91]">
            {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} fill="currentColor" strokeWidth={0} />)}
            <span className="ml-1 text-[10px]">({product.reviews || 12})</span>
          </div>
          <p className="mt-2 text-sm font-semibold">KSh {product.price.toLocaleString()}</p>
        </Link>

        <button
          onClick={handleAdd}
          className={`product-add mt-4 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-bold uppercase tracking-[.12em] transition ${added ? "bg-[#b7a8c9] text-white" : "bg-[#2e2933] text-white hover:bg-[#8a9a7b]"}`}
        >
          {added ? <Check size={15} /> : <ShoppingBag size={15} />}
          {added ? "Added" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}
