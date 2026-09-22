import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import HeroVisual from "@/components/HeroVisual";
import { products } from "@/data/products";
import { ArrowRight, BadgeCheck, HeartHandshake, PackageCheck, Quote, Sparkles } from "lucide-react";

export default function Home() {
  const bestSellers = products.slice(0, 4);
  const newArrivals = products.filter((product) => product.isNew).slice(0, 4);

  const categories = [
    {
      name: "Face Care",
      text: "Cleanse, treat and moisturize your everyday routine.",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Body Care",
      text: "Soft-skin essentials for the rest of you, too.",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Sun Care",
      text: "Daily protection that belongs in every routine.",
      image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const reviews = [
    ["I love how easy it is to find what I need. The site feels calm, clean and simple to shop.", "Akinyi", "Nairobi"],
    ["My order process was straightforward and the product selection made choosing much easier.", "Mercy", "Kiambu"],
    ["Skin Secrets feels personal. I can browse without feeling overwhelmed by too many things at once.", "Njeri", "Nakuru"],
  ];

  return (
    <>
      <section className="py-4 sm:py-6">
        <div className="hero-shell relative grid overflow-hidden lg:grid-cols-[1.02fr_.98fr]">
          <div className="container-site relative z-20 flex min-h-[520px] flex-col justify-center overflow-hidden px-6 py-16 sm:px-10 lg:min-h-[620px] lg:px-14 text-white">
            <span className="soft-orb soft-orb-one" />
            <span className="soft-orb soft-orb-two" />
            <Reveal>
              <p className="eyebrow">Skin Secrets by Wanjiru</p>
              <h1 className="brand-serif mt-5 max-w-2xl text-5xl leading-[.98] sm:text-6xl lg:text-[78px]">
                Your skin deserves a softer kind of care.
              </h1>
              <p className="mt-7 max-w-lg text-[15px] leading-7 text-[#6f6773] sm:text-base">
                Thoughtful skincare, beautiful routines and trusted essentials chosen to make everyday care feel simple.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/shop" className="btn-primary">Shop skincare <ArrowRight size={16} /></Link>
                <Link href="/new-arrivals" className="btn-secondary">See what&apos;s new</Link>
              </div>
            </Reveal>

            <Reveal delay={180} className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#817887]">
              <span>Curated essentials</span>
              <span>Easy ordering</span>
              <span>Made for your glow</span>
            </Reveal>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="container-site py-20 sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">A routine, not a rush</p>
          <h2 className="brand-serif mt-4 text-4xl leading-tight sm:text-5xl">Beauty begins with skin that feels cared for.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6f6773] sm:text-base">
            Skin Secrets by Wanjiru is built around thoughtful choices: products that fit real routines, clear shopping and a calm beauty experience that feels like us.
          </p>
        </Reveal>
      </section>

      <section className="container-site pb-20 sm:pb-28">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Start with what your skin needs</p>
              <h2 className="brand-serif mt-3 text-4xl sm:text-5xl">Shop by category</h2>
            </div>
            <Link href="/shop" className="text-link">View all products <ArrowRight size={15} /></Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.name} delay={index * 90}>
              <Link href="/shop" className="category-card group relative block min-h-[420px] overflow-hidden rounded-[24px]">
                <img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e2933]/70 via-[#2e2933]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <h3 className="brand-serif text-3xl">{category.name}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/82">{category.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em]">Explore <ArrowRight size={14} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="lavender-section py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">Loved again and again</p>
                <h2 className="brand-serif mt-3 text-4xl sm:text-5xl">Best sellers</h2>
              </div>
              <Link href="/shop" className="text-link">Shop all <ArrowRight size={15} /></Link>
            </div>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {bestSellers.map((product, index) => (
              <Reveal key={product.id} delay={index * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20 sm:py-28">
        <div className="grid items-center gap-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow">The Skin Secrets ritual</p>
            <h2 className="brand-serif mt-4 text-4xl leading-tight sm:text-5xl">Take a quiet minute for your skin.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#6f6773] sm:text-base">
              A beautiful routine does not need to be complicated. Cleanse. Treat. Moisturize. Protect. Repeat what works for you.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Simple routines", "Products you can understand", "Care without the pressure", "Space to discover what works"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold"><Sparkles size={16} className="text-[#8a9a7b]" />{item}</div>
              ))}
            </div>
            <Link href="/about" className="btn-secondary mt-9">Our story <ArrowRight size={15} /></Link>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="video-shell relative overflow-hidden rounded-[28px]">
              <video
                className="aspect-[4/5] w-full object-cover sm:aspect-[16/11] lg:aspect-[4/5]"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1100&q=85"
              >
                <source src="/videos/wmremove-transformed.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2e2933]/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl p-4 sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-xs text-white">
                <p className="brand-serif text-2xl">Care that feels like you.</p>
                <p className="mt-1 text-xs leading-5 text-white/80">Replace this video anytime with your own Skin Secrets product or routine footage.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sage-section py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-light">Fresh on the shelf</p>
                <h2 className="brand-serif mt-3 text-4xl text-white sm:text-5xl">New arrivals</h2>
              </div>
              <Link href="/new-arrivals" className="text-link text-white">Discover new <ArrowRight size={15} /></Link>
            </div>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {newArrivals.map((product, index) => (
              <Reveal key={product.id} delay={index * 80}>
                <div className="rounded-[24px] bg-[#fffaf2] p-3 sm:p-4"><ProductCard product={product} /></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="eyebrow">Why Skin Secrets</p>
          <h2 className="brand-serif mx-auto mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">A store should feel beautiful, but shopping should still feel effortless.</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            [BadgeCheck, "Thoughtfully selected", "A focused collection so you can shop without unnecessary noise."],
            [PackageCheck, "Easy from cart to checkout", "Clear product details, quick add-to-cart and a simple shopping flow."],
            [HeartHandshake, "Personal, not generic", "A beauty experience shaped around Skin Secrets by Wanjiru—not a copied template."],
          ].map(([Icon, title, text], index) => (
            <Reveal key={title} delay={index * 100}>
              <div className="promise-card h-full rounded-[24px] p-7 sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8e0ef] text-[#6f5d80]"><Icon size={20} /></span>
                <h3 className="brand-serif mt-6 text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f6773]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="social-proof-section py-20 sm:py-24">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Real people. Real routines.</p>
            <h2 className="brand-serif mt-4 text-4xl sm:text-5xl">A little love from our community.</h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map(([quote, name, place], index) => (
              <Reveal key={name} delay={index * 100}>
                <article className="review-card h-full rounded-[24px] p-7">
                  <Quote size={24} className="text-[#b7a8c9]" />
                  <p className="mt-5 text-sm leading-7 text-[#514a56]">“{quote}”</p>
                  <div className="mt-7 border-t border-[#e6dde9] pt-5">
                    <p className="font-semibold">{name}</p>
                    <p className="mt-1 text-xs text-[#807684]">{place}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-xl text-center text-[11px] leading-5 text-[#8a8290]">Demo testimonials for layout preview. Replace them with real customer feedback before publishing.</p>
        </div>
      </section>

      <section className="container-site pb-20 sm:pb-28">
        <Reveal>
          <div className="final-cta grid overflow-hidden rounded-[28px] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <p className="eyebrow">Stay in the glow</p>
              <h2 className="brand-serif mt-4 text-4xl sm:text-5xl">New products, skin tips and little beauty moments.</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#6f6773]">Follow the journey on Instagram, TikTok and WhatsApp as Skin Secrets by Wanjiru grows.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="btn-primary">Instagram</a>
                <a href="#" className="btn-secondary">WhatsApp</a>
              </div>
            </div>
            <div className="min-h-[360px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=85" alt="Skincare products arranged beautifully" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
