import ShopGrid from "@/components/ShopGrid";
import { brands, categories, products } from "@/data/products";

export const metadata = {
  title: "Shop | Skin Secrets",
};

export default function ShopPage() {
  return (
    <div className="container-site py-14">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8a9a7b]">Shop Skin Secrets</p>
        <h1 className="serif mt-3 text-5xl">Find your essentials.</h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#6f6773]">
          Browse our collection by brand or category and build a routine that works for you.
        </p>
      </div>
      <ShopGrid products={products} brands={brands} categories={categories} />
    </div>
  );
}