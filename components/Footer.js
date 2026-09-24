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
      <footer className="border-t border-white/10 bg-[var(--accent)] px-6 py-8 text-[10px] uppercase tracking-[.14em] text-[var(--paper-alt)]/65">
        <div className="container-site flex flex-col items-center justify-between gap-5 sm:flex-row">
          <img src="/logo/skin-secrets-wordmark.svg" alt="Skin Secrets by Wanjiru" className="h-auto w-32 opacity-90" />
          <p>© {year} Skin Secrets by Wanjiru</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram"><Instagram size={14} /></a>
            <a href="mailto:hello@skinsecretsbywanjiru.com" aria-label="Email"><Mail size={14} /></a>
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
