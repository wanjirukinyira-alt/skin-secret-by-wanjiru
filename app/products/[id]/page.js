import { notFound } from "next/navigation";
import Link from "next/link";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  if (!product) notFound();

  const related = products.filter((item) => item.brandSlug === product.brandSlug && item.id !== product.id).slice(0, 4);

  return (
    <div className="container-site py-12">
      <Link href="/shop" className="text-xs text-[#6f6773] underline underline-offset-4">← Back to shop</Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-[#eee7f3]">
          <img src={product.image} alt={product.name} className="h-full max-h-[700px] w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8a9a7b]">{product.brand}</p>
          <h1 className="serif mt-3 text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-5 text-xl">Ksh {product.price.toLocaleString()}</p>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[#6f6773]">{product.description}</p>

          <div className="my-8 border-y border-[#e2dbd0] py-5 text-sm text-[#6f6773]">
            <p>✓ Carefully selected beauty essential</p>
            <p className="mt-2">✓ Delivery available in Kenya</p>
          </div>

          <AddToCart product={product} />
          <p className="mt-4 text-center text-xs text-[#6f6773]">Need help choosing? Contact Skin Secrets.</p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="serif text-3xl">More from {product.brand}</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} />)}
          </div>
        </section>
      )}
    </div>
  );
}