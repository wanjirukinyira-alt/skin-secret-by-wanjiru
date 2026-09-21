import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#ded4e3] bg-[#e8e0ef]">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="brand-serif text-2xl tracking-[.08em]">SKIN SECRETS</div>
          <p className="mt-1 text-[9px] font-bold uppercase tracking-[.28em] text-[#7b8d6f]">by Wanjiru</p>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#6f6773]">
            Thoughtful skincare, beautiful routines and an easier way to shop for your everyday glow.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em]">Shop</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#6f6773]">
            <Link href="/shop">All Products</Link>
            <Link href="/brands">Brands</Link>
            <Link href="/new-arrivals">New Arrivals</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em]">Help</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#6f6773]">
            <Link href="/contact">Contact Us</Link>
            <a href="#">Shipping & Delivery</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em]">Stay in the glow</h3>
          <p className="mt-4 text-sm leading-6 text-[#6f6773]">Follow Skin Secrets for new stock, skincare moments and updates.</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d8cde0] py-5 text-center text-xs text-[#756c79]">
        © {new Date().getFullYear()} Skin Secrets by Wanjiru. All rights reserved.
      </div>
    </footer>
  );
}
