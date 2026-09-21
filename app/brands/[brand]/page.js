import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { brands, products } from "@/data/products";

export function generateStaticParams() {
  return brands.map((brand) => ({ brand: brand.slug }));
}

export default async function BrandPage({ params }) {
  const { brand: slug } = await params;
  const brand = brands.find((item) => item.slug === slug);
  if (!brand) notFound();

  const brandProducts = products.filter((product) => product.brandSlug === slug);

  return (
    <div className="container-site py-14">
      <Link href="/brands" className="text-xs text-[#6f6773] underline underline-offset-4">← All brands</Link>
      <div className="mt-10 border-b border-[#e2dbd0] pb-10">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8a9a7b]">Brand collection</p>
        <h1 className="serif mt-3 text-5xl">{brand.name}</h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#6f6773]">{brand.description}</p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        {brandProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}