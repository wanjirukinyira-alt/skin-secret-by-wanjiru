"use client";

import Link from "next/link";
import { Instagram, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

const columns = [
  {
    heading: "Shop",
    links: [
      ["All Skincare", "/shop"],
      ["Face Care", "/shop/face"],
      ["Body Care", "/shop/body"],
      ["Sun Care", "/shop/sun"],
      ["New Arrivals", "/new-arrivals"],
    ],
  },
  {
    heading: "Learn",
    links: [
      ["Our Story", "/about"],
      ["Skin Notes", "/journal"],
      ["Ingredient Glossary", "/ingredients"],
      ["FAQs", "/faq"],
    ],
  },
  {
    heading: "Customer Care",
    links: [
      ["Contact Us", "/contact"],
      ["Shipping & Delivery", "/shipping"],
      ["Returns & Exchanges", "/returns"],
      ["Track My Order", "/track-order"],
    ],
  },
  {
    heading: "Policies",
    links: [
      ["Privacy Policy", "/policies/privacy"],
      ["Terms of Use", "/policies/terms"],
      ["Return Policy", "/policies/returns"],
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <footer className="bg-white px-6 pt-14 text-[var(--ink)] sm:pt-20">
        <div className="container-site">
          <div className="grid gap-12 border-b border-black/8 pb-14 sm:grid-cols-2 lg:grid-cols-[1.65fr_1fr_1fr_1fr] lg:gap-8 lg:pb-20">
            <div className="max-w-xs">
              <img src="/logo/skin-secrets-wordmark.svg" alt="Skin Secrets by Wanjiru" className="h-auto w-40 brightness-0 opacity-80" />
              <p className="mt-6 text-[10px] leading-5 text-[var(--muted)]">Thoughtful skincare for rituals that feel as good as they look.</p>
              <a href="mailto:hello@skinsecretsbywanjiru.com" className="mt-5 inline-block text-[9px] font-semibold uppercase tracking-[.14em] underline decoration-black/30 underline-offset-4 transition hover:decoration-black">Get in touch</a>
            </div>

            <div>
              <h3 className="text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--muted)]">Shop</h3>
              <ul className="mt-5 space-y-3 text-[10px] text-[var(--ink-soft)]">
                <li><Link href="/shop">All skincare</Link></li>
                <li><Link href="/shop/face">Face care</Link></li>
                <li><Link href="/shop/body">Body care</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--muted)]">Discover</h3>
              <ul className="mt-5 space-y-3 text-[10px] text-[var(--ink-soft)]">
                <li><Link href="/about">Our story</Link></li>
                <li><Link href="/journal">Skin notes</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--muted)]">Customer care</h3>
              <ul className="mt-5 space-y-3 text-[10px] text-[var(--ink-soft)]">
                <li><Link href="/contact">Contact us</Link></li>
                <li><Link href="/shipping">Shipping &amp; delivery</Link></li>
                <li><Link href="/track-order">Track my order</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5 py-7 text-[8px] uppercase tracking-[.12em] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-2"><p>© {year} Skin Secrets by Wanjiru</p><Link href="/policies/privacy">Privacy</Link><Link href="/policies/terms">Terms</Link></div>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="flex size-7 items-center justify-center self-end rounded-full bg-[var(--ink)] text-white transition hover:bg-[var(--accent)] sm:self-auto"><ArrowUp size={12} /></button>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-20 bg-[var(--accent)] text-[var(--paper-alt)]">
      {/* ----------------------------------------------------------------
          Main footer
      ---------------------------------------------------------------- */}
      <div className="container-site py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_2fr] lg:gap-16">
          {/* Brand block */}
          <div>
            <img
              src="/logo/skin-secrets-wordmark.svg"
              alt="Skin Secrets by Wanjiru"
              className="h-auto w-52 max-w-full brightness-0 invert opacity-95"
            />

            {/* Serif tagline — gives the footer a quiet brand moment */}
            <p className="brand-serif mt-6 max-w-xs text-xl leading-snug text-[var(--paper-alt)]/90">
              Thoughtful skincare, chosen with care.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--paper-alt)]/65">
              For routines that actually fit your life.
            </p>

            <div className="mt-8 space-y-1.5 text-sm leading-6 text-[var(--paper-alt)]/65">
              <p>Nairobi, Kenya</p>
              <a
                className="inline-block underline-offset-4 transition hover:text-[var(--paper-alt)] hover:underline"
                href="mailto:hello@skinsecretsbywanjiru.com"
              >
                hello@skinsecretsbywanjiru.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-[11px] font-bold uppercase tracking-[.14em] text-[var(--paper-alt)]/45">
                  {column.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-[var(--paper-alt)]/80 transition hover:text-[var(--paper-alt)]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------
          Bottom bar
      ---------------------------------------------------------------- */}
      <div className="border-t border-[var(--paper-alt)]/12">
        <div className="container-site flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--paper-alt)]/55">
            © {year} Skin Secrets by Wanjiru. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Skin Secrets on Instagram"
              className="text-[var(--paper-alt)]/65 transition hover:text-[var(--paper-alt)]"
            >
              <Instagram size={17} />
            </a>
            <a
              href="#"
              aria-label="Message Skin Secrets on WhatsApp"
              className="text-[var(--paper-alt)]/65 transition hover:text-[var(--paper-alt)]"
            >
              <MessageCircle size={17} />
            </a>
            <a
              href="mailto:hello@skinsecretsbywanjiru.com"
              aria-label="Email Skin Secrets"
              className="text-[var(--paper-alt)]/65 transition hover:text-[var(--paper-alt)]"
            >
              <Mail size={17} />
            </a>
          </div>

          <div className="flex items-center gap-5">
            <p className="text-xs text-[var(--paper-alt)]/45">
              We accept Visa, Mastercard &amp; M-Pesa
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--paper-alt)]/20 text-[var(--paper-alt)]/65 transition hover:border-[var(--paper-alt)]/40 hover:text-[var(--paper-alt)]"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
