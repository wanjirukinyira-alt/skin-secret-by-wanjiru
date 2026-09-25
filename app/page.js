import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import SocialFeed from "@/components/SocialFeed";
import ScrollHero from "@/components/ScrollHero";
import ScrollZoomImage from "@/components/ScrollZoomImage";
import SlideIn from "@/components/SlideIn";
import Testimonials from "@/components/Testimonials";
import ImageWall from "@/components/ImageWall";
import VideoReel from "@/components/VideoReel";
import { products } from "@/data/products";

const shopProducts = products.slice(0, 3);

const gallery = [
  { image: "/images/WhatsApp Image 2026-09-23 at 15.15.40 (2).jpeg", alt: "Skincare ritual", className: "row-span-2" },
  { image: "/images/WhatsApp Image 2026-09-23 at 15.15.41 (1).jpeg", alt: "Skincare essentials", className: "", label: "Sustainable beauty choices" },
  { image: "/images/WhatsApp Image 2026-09-23 at 15.15.45 (2).jpeg", alt: "Skincare product detail", className: "" },
];

const resources = [
  { title: "A closer look at layering your skincare", image: "/images/WhatsApp Image 2026-09-23 at 15.15.40 (3).jpeg" },
  { title: "Choosing the right cleanser", image: "/images/WhatsApp Image 2026-09-23 at 15.15.42 (1).jpeg" },
  { title: "Beginner skincare guide", image: "/images/WhatsApp Image 2026-09-23 at 15.15.47 (2).jpeg" },
];

function ProductTile({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="home-product group">
      <ScrollZoomImage src={product.image} alt={product.name} className="home-product-image" />
      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[.16em] text-[var(--muted)]">{product.brand}</p>
      <div className="mt-1 flex items-start justify-between gap-3">
        <h3 className="brand-serif text-xl leading-tight">{product.name}</h3>
        <span className="shrink-0 text-xs font-medium">KSh {product.price.toLocaleString()}</span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="home-editorial">
      <ScrollHero />

      <section className="home-section home-after-story" aria-labelledby="collection-heading">
        <div className="home-heading"><p className="home-kicker">Shop the collection</p><h2 id="collection-heading" className="brand-serif">Luxury formulated,<br />nature inspired.</h2></div>
        <div className="home-gallery">{gallery.map((item, index) => <SlideIn key={item.alt} className={item.className} from={index === 0 ? "left" : "right"} delay={index * 140}><ScrollZoomImage src={item.image} alt={item.alt} className="size-full" />{item.label && <p className="brand-serif">{item.label}</p>}</SlideIn>)}</div>
      </section>

      <VideoReel />

      <ImageWall />

      <section className="home-section home-routine" aria-labelledby="routine-heading">
        <div className="home-heading"><p className="home-kicker">Skincare rituals</p><h2 id="routine-heading" className="brand-serif">Your routine, made<br />simple and effective.</h2></div>
        <div className="home-routine-links" aria-label="Product categories">{["Cleansers", "Serums", "Moisturizers", "Sun Care", "Body Care"].map((category, index) => <Link key={category} href="/shop" className={index === 0 ? "active" : ""}>{category}</Link>)}</div>
        <div className="home-products">{shopProducts.map((product) => <ProductTile key={product.id} product={product} />)}</div>
      </section>

      <Testimonials />

      <FaqSection />
      <SocialFeed />

      <section className="home-section bg-white" aria-labelledby="resources-heading">
        <div className="home-heading"><p className="home-kicker">Beauty insights</p><h2 id="resources-heading" className="brand-serif">Your source for<br />better skin.</h2></div>
        <div className="home-resources">{resources.map((resource) => <Link href="/about" key={resource.title} className="group"><div><ScrollZoomImage src={resource.image} alt="" className="size-full" /></div><p>{resource.title}</p><span>Read more <ArrowUpRight size={13} /></span></Link>)}</div>
      </section>

      <section className="home-newsletter">
        <img src="/images/gen_542a966026_1598f73c5864fa3e.png" alt="Woman enjoying a calming skincare ritual" /><div />
        <form className="relative z-10 text-center text-white"><p className="home-kicker text-white/70">Glow alert</p><h2 className="brand-serif mt-4 text-4xl sm:text-5xl">Beauty starts in<br />your inbox.</h2><p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/80">Sign up for skincare notes, product launches and special offers.</p><label className="home-newsletter-field mt-7"><span className="sr-only">Your email address</span><input type="email" placeholder="Your email address" required /><button type="submit">Join waitlist <ArrowUpRight size={14} /></button></label></form>
      </section>
    </div>
  );
}
