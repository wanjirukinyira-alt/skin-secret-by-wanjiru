export const metadata = { title: "About | Skin Secrets" };

export default function AboutPage() {
  return (
    <div className="container-site py-14">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8a9a7b]">About Skin Secrets</p>
          <h1 className="serif mt-4 text-5xl leading-tight">Your little corner of beauty.</h1>
          <p className="mt-6 text-sm leading-8 text-[#6f6773]">
            Skin Secrets is a beauty store created to make finding everyday skincare and beauty essentials simple.
            We bring different brands together so you can discover products, compare options and build a routine you love.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#6f6773]">
            As the store grows, this page can grow with it — from our story and values to our team and customer community.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl bg-[#e8dfec]">
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85" alt="Beauty products" className="h-[500px] w-full object-cover" />
        </div>
      </div>

      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {[
          ["Quality", "We focus on products that fit real everyday beauty routines."],
          ["Choice", "Different brands, categories and price points in one place."],
          ["Care", "We're here to help you shop with confidence."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl bg-[#fffaf2] p-8">
            <h2 className="serif text-2xl">{title}</h2>
            <p className="mt-4 text-sm leading-6 text-[#6f6773]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}