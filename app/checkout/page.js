"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  function submitOrder(e) {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  }

  if (placed) {
    return (
      <div className="container-site py-24 text-center">
        <div className="mx-auto max-w-lg rounded-2xl bg-[#fffaf2] p-10">
          <p className="text-4xl">✓</p>
          <h1 className="serif mt-4 text-4xl">Thank you!</h1>
          <p className="mt-4 text-sm leading-7 text-[#6f6773]">Your order details have been received. For a real launch, connect this checkout to your payment and order backend.</p>
          <Link href="/shop" className="mt-7 inline-block rounded-full bg-[#2e2933] px-7 py-3.5 text-sm font-semibold text-white">Back to shop</Link>
        </div>
      </div>
    );
  }

  if (!cart.length) {
    return (
      <div className="container-site py-24 text-center">
        <h1 className="serif text-4xl">Nothing to checkout.</h1>
        <Link href="/shop" className="mt-7 inline-block underline underline-offset-4">Shop products →</Link>
      </div>
    );
  }

  return (
    <div className="container-site py-14">
      <h1 className="serif text-5xl">Checkout.</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <form onSubmit={submitOrder} className="rounded-2xl bg-[#fffaf2] p-6 md:p-9">
          <h2 className="serif text-2xl">Your details</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <label className="text-sm">First name<input required className="mt-2 w-full rounded-xl border border-[#d8cde0] bg-transparent p-3" /></label>
            <label className="text-sm">Last name<input required className="mt-2 w-full rounded-xl border border-[#d8cde0] bg-transparent p-3" /></label>
          </div>
          <label className="mt-5 block text-sm">Phone<input required type="tel" className="mt-2 w-full rounded-xl border border-[#d8cde0] bg-transparent p-3" /></label>
          <label className="mt-5 block text-sm">Email<input required type="email" className="mt-2 w-full rounded-xl border border-[#d8cde0] bg-transparent p-3" /></label>
          <label className="mt-5 block text-sm">Delivery location<input required placeholder="Town / area" className="mt-2 w-full rounded-xl border border-[#d8cde0] bg-transparent p-3" /></label>

          <div className="mt-8 rounded-xl bg-[#eee7f3] p-4 text-sm leading-6 text-[#6f6773]">
            <strong className="text-[#2e2933]">Payment:</strong> This starter checkout is intentionally not connected to a live payment provider yet. Before launch, connect M-PESA or your chosen payment gateway here.
          </div>

          <button className="mt-6 w-full rounded-full bg-[#2e2933] px-6 py-4 text-sm font-semibold text-white hover:bg-[#68795e]">Place order</button>
        </form>

        <aside className="h-fit rounded-2xl bg-[#fffaf2] p-7">
          <h2 className="serif text-2xl">Your order</h2>
          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between gap-4 text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span>Ksh {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="my-6 border-t border-[#e2dbd0]" />
          <div className="flex justify-between font-semibold"><span>Total</span><span>Ksh {total.toLocaleString()}</span></div>
        </aside>
      </div>
    </div>
  );
}