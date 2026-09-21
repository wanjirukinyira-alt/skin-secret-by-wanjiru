"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount } = useCart();

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
      <div className="announcement-bar py-2 text-center text-[10px] font-semibold uppercase tracking-[.18em] sm:text-[11px]">
        Thoughtful skincare • Easy shopping • Made for your glow
      </div>

      <header className="sticky top-0 z-50 border-b border-[#e8dfec]/80 bg-[#fffaf2]/92 backdrop-blur-xl">
        <div className="container-site flex min-h-[76px] items-center justify-between gap-4">
          <Link href="/" className="shrink-0 leading-none" aria-label="Skin Secrets by Wanjiru home">
            <span className="brand-serif block text-[21px] tracking-[.11em] sm:text-[25px]">SKIN SECRETS</span>
            <span className="mt-1 block text-center text-[8px] font-semibold uppercase tracking-[.34em] text-[#8a9a7b] sm:text-[9px]">
              by Wanjiru
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="nav-link text-[12px] font-semibold uppercase tracking-[.11em]">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => setSearchOpen(true)} aria-label="Search products" className="nav-icon">
              <Search size={20} strokeWidth={1.65} />
            </button>
            <button aria-label="Favourites" className="nav-icon hidden sm:flex" title="Your favourites are saved on product cards">
              <Heart size={20} strokeWidth={1.65} />
            </button>
            <Link href="/cart" aria-label="Shopping cart" className="nav-icon relative">
              <ShoppingBag size={20} strokeWidth={1.65} />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#8a9a7b] px-1 text-[9px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>
            <button className="nav-icon xl:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-[#e8dfec] bg-[#fffaf2] xl:hidden">
            <div className="container-site grid gap-1 py-4">
              <button
                onClick={() => { setSearchOpen(true); setOpen(false); }}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium hover:bg-[#f0eaf4]"
              >
                <Search size={18} /> Search products
              </button>
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-[#f0eaf4]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
