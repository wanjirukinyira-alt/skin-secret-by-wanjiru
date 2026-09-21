import Link from "next/link";
import { brands } from "@/data/products";

export const metadata = { title: "Brands | Skin Secrets" };

export default function BrandsPage() {
  return (
    <div className="container-site py-14">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8a9a7b]">Our collection</p>
        <h1 className="serif mt-3 text-5xl">Shop by brand.</h1>
        <p className="mt-5 text-sm leading-7 text-[#6f6773]">Explore your favourite brands separately and discover the products available from each one.</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => (
          <Link key={brand.slug} href={`/brands/${brand.slug}`} className="group rounded-2xl border border-[#e2dbd0] bg-[#fffaf2] p-8 transition hover:-translate-y-1 hover:shadow-xl">
            <span className="text-xs text-[#8a9a7b]">BRAND</span>
            <h2 className="serif mt-3 text-3xl">{brand.name}</h2>
            <p className="mt-4 text-sm leading-6 text-[#6f6773]">{brand.description}</p>
            <span className="mt-8 inline-block text-xs font-semibold uppercase tracking-[.16em] group-hover:underline">Explore brand →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}