# Skin Secrets by Wanjiru

A multi-page skincare storefront built with **Next.js + JavaScript + Tailwind CSS**.
np ## Design direction

- Sage: `#8A9A7B`
- Lavender: `#B7A8C9`
- Cream: `#F8F3EA`
- Main text: deep plum/charcoal `#2E2933`
- Two typography families only: Georgia-style serif headings + clean system sans-serif body text

## Included in this redesign

- Sticky responsive navigation
- Working product search overlay (search by product, brand, category or description)
- Scroll-reveal animation
- Subtle parallax hero image
- Slow floating hero details
- Product hover zoom/lift
- Favourite heart saved in `localStorage`
- Add-to-cart feedback and persistent cart
- Category storytelling sections
- Best sellers and new arrivals
- Social proof section (demo reviews — replace before launch)
- Home-page video section
- Responsive/mobile layout
- Shop, Brands, New Arrivals, Product Details, About, Contact, Cart and Checkout pages

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Home video

The video component reads:

```text
public/videos/skin-secrets-home.mp4
```

A compressed copy of the reference clip is included only so the video section works immediately. **Before publishing, replace it with your own Skin Secrets product/routine footage using the same filename.**

## Main pages

- `/` Home
- `/shop` All products
- `/brands` Brand directory
- `/brands/dove` Example brand page
- `/new-arrivals` New products
- `/products/dove-beauty-bar` Example product page
- `/about` About
- `/contact` Contact
- `/cart` Cart
- `/checkout` Checkout starter

## Before launching the real business site

1. Replace demo product photos and data with your real stock.
2. Update prices in `data/products.js`.
3. Replace placeholder phone, email, Instagram, TikTok and WhatsApp links.
4. Replace the demo testimonials with real customer feedback you have permission to use.
5. Replace the reference home video with your own business footage.
6. Connect the contact form to a real form/email service.
7. Connect checkout to a real payment solution such as M-PESA.
8. Add a database/order backend when you are ready to manage real orders and stock.
