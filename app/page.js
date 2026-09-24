import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import SocialFeed from "@/components/SocialFeed";
import ScrollHero from "@/components/ScrollHero";
import SlideIn from "@/components/SlideIn";
import { products } from "@/data/products";

const shopProducts = products.slice(0, 3);

const gallery = [
  { image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=90", alt: "A quiet skincare moment", className: "row-span-2" },
  { image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=90", alt: "Skincare bottles on natural stone", className: "", label: "Sustainable beauty choices" },
  { image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=90", alt: "A serum bottle in warm light", className: "" },
];

const stories = [
  { quote: "My skin finally feels calm and balanced again. The small changes made all the difference.", name: "Akinyi M.", className: "home-story-left" },
  { quote: "I noticed a real difference within a week. My routine feels genuinely effective.", name: "Jasmine R.", className: "home-story-featured" },
  { quote: "Thoughtful products, clear advice, and no pressure to buy what I do not need.", name: "Mercy W.", className: "home-story-right" },
];

const resources = [
  { title: "A closer look at layering your skincare", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=85" },
  { title: "Choosing the right cleanser", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=700&q=85" },
  { title: "Beginner skincare guide", image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=700&q=85" },
];

function ProductTile({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="home-product group">
      <div className="home-product-image"><img src={product.image} alt={product.name} /></div>
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
        <div className="home-gallery">{gallery.map((item, index) => <SlideIn key={item.alt} className={item.className} from={index === 0 ? "left" : "right"} delay={index * 140}><img src={item.image} alt={item.alt} />{item.label && <p className="brand-serif">{item.label}</p>}</SlideIn>)}</div>
      </section>

      <section className="home-section home-routine" aria-labelledby="routine-heading">
        <div className="home-heading"><p className="home-kicker">Skincare rituals</p><h2 id="routine-heading" className="brand-serif">Your routine, made<br />simple and effective.</h2></div>
        <div className="home-routine-links" aria-label="Product categories">{["Cleansers", "Serums", "Moisturizers", "Sun Care", "Body Care"].map((category, index) => <Link key={category} href="/shop" className={index === 0 ? "active" : ""}>{category}</Link>)}</div>
        <div className="home-products">{shopProducts.map((product) => <ProductTile key={product.id} product={product} />)}</div>
      </section>

      <section className="home-section home-results" aria-labelledby="results-heading">
        <div className="home-heading"><p className="home-kicker">Customer stories</p><h2 id="results-heading" className="brand-serif">Results that make<br />a difference.</h2></div>
        <div className="home-stories">
          {stories.map((story) => <article key={story.name} className={`home-story ${story.className}`}><span aria-hidden>“</span><p>{story.quote}</p><footer><i>{story.name.charAt(0)}</i><small>{story.name}<br />Verified customer</small></footer></article>)}
          <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=85" alt="A skincare serum" className="home-results-image" />
        </div>
      </section>

      <FaqSection />
      <SocialFeed />

      <section className="home-section bg-white" aria-labelledby="resources-heading">
        <div className="home-heading"><p className="home-kicker">Beauty insights</p><h2 id="resources-heading" className="brand-serif">Your source for<br />better skin.</h2></div>
        <div className="home-resources">{resources.map((resource) => <Link href="/about" key={resource.title} className="group"><div><img src={resource.image} alt="" /></div><p>{resource.title}</p><span>Read more <ArrowUpRight size={13} /></span></Link>)}</div>
      </section>

      <section className="home-newsletter">
        <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1800&q=90" alt="Woman enjoying a skincare routine" /><div />
        <form className="relative z-10 text-center text-white"><p className="home-kicker text-white/70">Glow alert</p><h2 className="brand-serif mt-4 text-4xl sm:text-5xl">Beauty starts in<br />your inbox.</h2><p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/80">Sign up for skincare notes, product launches and special offers.</p><label className="home-newsletter-field mt-7"><span className="sr-only">Your email address</span><input type="email" placeholder="Your email address" required /><button type="submit">Join waitlist <ArrowUpRight size={14} /></button></label></form>
      </section>
    </div>
  );
}
