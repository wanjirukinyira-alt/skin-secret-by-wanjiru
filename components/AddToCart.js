"use client";

import { Check, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";

export default function AddToCart({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function add() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button onClick={add} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2e2933] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#68795e]">
      {added ? <><Check size={18} /> Added to cart</> : <><ShoppingBag size={18} /> Add to cart</>}
    </button>
  );
}