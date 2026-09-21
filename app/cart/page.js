"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { cart, total, updateQuantity, removeFromCart } = useCart();

  if (!cart.length) {
    return (
      <div className="container-site py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8a9a7b]">Your bag</p>
        <h1 className="serif mt-3 text-4xl">Your cart is empty.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-[#6f6773]">Add something beautiful to your routine.</p>
        <Link href="/shop" className="mt-8 inline-block rounded-full bg-[#2e2933] px-7 py-3.5 text-sm font-semibold text-white">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="container-site py-14">
      <h1 className="serif text-5xl">Your cart.</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-2xl bg-[#fffaf2] p-4">
              <img src={item.image} alt={item.name} className="h-28 w-24 rounded-xl object-cover" />
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-[#8a9a7b]">{item.brand}</p>
                <h2 className="mt-1 font-medium">{item.name}</h2>
                <p className="mt-2 text-sm">Ksh {item.price.toLocaleString()}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="flex h-8 w-8 items-center justify-center rounded-full border"><Minus size={14} /></button>
                  <span className="text-sm">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="flex h-8 w-8 items-center justify-center rounded-full border"><Plus size={14} /></button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`} className="self-start text-[#6f6773] hover:text-red-700"><Trash2 size={18} /></button>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-2xl bg-[#fffaf2] p-7">
          <h2 className="serif text-2xl">Order summary</h2>
          <div className="mt-6 flex justify-between text-sm"><span>Subtotal</span><span>Ksh {total.toLocaleString()}</span></div>
          <div className="mt-3 flex justify-between text-sm text-[#6f6773]"><span>Delivery</span><span>Calculated at checkout</span></div>
          <div className="my-6 border-t border-[#e2dbd0]" />
          <div className="flex justify-between font-semibold"><span>Total</span><span>Ksh {total.toLocaleString()}</span></div>
          <Link href="/checkout" className="mt-7 block rounded-full bg-[#2e2933] px-6 py-4 text-center text-sm font-semibold text-white hover:bg-[#68795e]">Proceed to checkout</Link>
        </aside>
      </div>
    </div>
  );
}