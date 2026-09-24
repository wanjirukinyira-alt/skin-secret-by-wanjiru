"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [overHomeStory, setOverHomeStory] = useState(true);
  const { itemCount } = useCart();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const homeOverlay = isHome && overHomeStory;

  useEffect(() => {
    if (!isHome) return undefined;

    const updateHomeNavigation = () => {
      const story = document.querySelector(".scroll-hero");
      setOverHomeStory(!story || story.getBoundingClientRect().bottom > 84);
    };

    updateHomeNavigation();
    window.addEventListener("scroll", updateHomeNavigation, { passive: true });
    window.addEventListener("resize", updateHomeNavigation);
    return () => {
      window.removeEventListener("scroll", updateHomeNavigation);
      window.removeEventListener("resize", updateHomeNavigation);
    };
  }, [isHome]);

  const links = [
    ["Home", "/"],
    ["Shop", "/shop"],
    ["Brands", "/brands"],
    ["New Arrivals", "/new-arrivals"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <>
      {/* ----------------------------------------------------------------
          Announcement — moss strip, cream type
      ---------------------------------------------------------------- */}
      <div className={`bg-[var(--accent)] py-2.5 text-center text-[10px] font-medium uppercase tracking-[.22em] text-[var(--paper-alt)]/90 sm:text-[11px] ${isHome ? "hidden" : ""}`}>
        Thoughtful skincare · Easy shopping · Made for your glow
      </div>

      {/* ----------------------------------------------------------------
          Header
      ---------------------------------------------------------------- */}
      <header className={`z-50 transition-colors duration-500 ${homeOverlay ? "fixed inset-x-0 top-0 border-b border-white/15 bg-transparent text-white" : isHome ? "fixed inset-x-0 top-0 border-b border-[var(--line)] bg-white/95 text-[var(--ink)] shadow-sm backdrop-blur-xl" : "sticky top-0 border-b border-[var(--line)]/70 bg-[var(--paper-alt)]/90 backdrop-blur-xl"}`}>
        <div className="container-site relative flex min-h-[84px] items-center gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="absolute inset-x-0 flex justify-center leading-none"
            aria-label="Skin Secrets by Wanjiru — home"
          >
            <img
              src="/logo/skin-secrets-wordmark.svg"
              alt="Skin Secrets by Wanjiru"
              className={`h-auto w-36 transition duration-500 sm:w-44 ${homeOverlay ? "brightness-0 invert" : "brightness-0"}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="mr-auto hidden items-center gap-9 xl:flex">
            {links.map(([label, href]) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    active
                      ? homeOverlay ? "text-white" : "text-[var(--accent)]"
                      : homeOverlay ? "text-white/75 hover:text-white" : "text-[var(--ink-soft)]/80 hover:text-[var(--accent)]"
                  }`}
                >
                  {label}
                  {/* Moss underline — grows on hover, solid on active */}
                  <span
                    className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[var(--accent)] transition-transform duration-300 ${
                      active && !homeOverlay
                        ? "scale-x-100"
                        : homeOverlay ? "scale-x-0 bg-white group-hover:scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Icon cluster */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="nav-icon"
            >
              <Search size={19} strokeWidth={1.5} />
            </button>

            <button
              aria-label="Favourites"
              className="nav-icon hidden sm:flex"
              title="Your favourites are saved on product cards"
            >
              <Heart size={19} strokeWidth={1.5} />
            </button>

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="nav-icon relative"
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[var(--accent)] px-1 text-[9px] font-bold text-[var(--paper-alt)]">
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              className="nav-icon xl:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* ----------------------------------------------------------------
            Mobile menu
        ---------------------------------------------------------------- */}
        <div
          className={`overflow-hidden border-t border-[var(--line)] bg-[var(--paper-alt)] transition-[max-height,opacity] duration-300 xl:hidden ${
            open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container-site grid gap-1 py-6">
            <button
              onClick={() => {
                setSearchOpen(true);
                setOpen(false);
              }}
              className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm text-[var(--ink-soft)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              <Search size={17} strokeWidth={1.6} /> Search
            </button>

            <span className="mx-4 my-2 h-px bg-[var(--line)]" />

            {links.map(([label, href]) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3.5 text-sm transition ${
                    active
                      ? "bg-[var(--accent-soft)] font-medium text-[var(--accent)]"
                      : "text-[var(--ink-soft)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
