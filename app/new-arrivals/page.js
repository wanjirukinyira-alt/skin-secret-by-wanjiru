import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = { title: "New Arrivals | Skin Secrets" };

export default function NewArrivalsPage() {
  const newProducts = products.filter((product) => product.isNew);

  return (
    <div className="container-site py-14">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8a9a7b]">Just landed</p>
      <h1 className="serif mt-3 text-5xl">New arrivals.</h1>
      <p className="mt-4 max-w-xl text-sm leading-7 text-[#6f6773]">Fresh products added to Skin Secrets. Check back here whenever new stock arrives.</p>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        {newProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}