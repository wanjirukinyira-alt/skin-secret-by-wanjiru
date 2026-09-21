"use client";

import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div className="container-site py-14">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8a9a7b]">We'd love to hear from you</p>
          <h1 className="serif mt-4 text-5xl leading-tight">Let's talk.</h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#6f6773]">
            Have a question about a product, your order or delivery? Send us a message and we'll get back to you.
          </p>

          <div className="mt-10 space-y-5">
            <a href="https://wa.me/254700000000" className="flex items-center gap-4 text-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4eadf]"><MessageCircle size={18} /></span>
              WhatsApp us
            </a>
            <a href="tel:+254700000000" className="flex items-center gap-4 text-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4eadf]"><Phone size={18} /></span>
              +254 700 000 000
            </a>
            <a href="mailto:hello@skinsecrets.co.ke" className="flex items-center gap-4 text-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4eadf]"><Mail size={18} /></span>
              hello@skinsecrets.co.ke
            </a>
          </div>

          <p className="mt-10 text-xs leading-6 text-[#6f6773]">
            Replace the phone number, email and social links above with your real business details before launch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-[#fffaf2] p-6 shadow-sm md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm">
              Name
              <input required name="name" className="mt-2 w-full rounded-xl border border-[#d8cde0] bg-transparent px-4 py-3 outline-none focus:border-[#8a9a7b]" />
            </label>
            <label className="text-sm">
              Email
              <input required type="email" name="email" className="mt-2 w-full rounded-xl border border-[#d8cde0] bg-transparent px-4 py-3 outline-none focus:border-[#8a9a7b]" />
            </label>
          </div>
          <label className="mt-5 block text-sm">
            Subject
            <input required name="subject" className="mt-2 w-full rounded-xl border border-[#d8cde0] bg-transparent px-4 py-3 outline-none focus:border-[#8a9a7b]" />
          </label>
          <label className="mt-5 block text-sm">
            Message
            <textarea required name="message" rows="6" className="mt-2 w-full resize-none rounded-xl border border-[#d8cde0] bg-transparent px-4 py-3 outline-none focus:border-[#8a9a7b]" />
          </label>

          {sent && <p className="mt-5 rounded-xl bg-[#e4eadf] p-4 text-sm">✓ Message submitted. Connect this form to your email service before launch to receive real messages.</p>}

          <button className="mt-6 w-full rounded-full bg-[#2e2933] px-6 py-4 text-sm font-semibold text-white hover:bg-[#68795e]">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}