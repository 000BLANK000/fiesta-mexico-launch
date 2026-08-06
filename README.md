# Fiesta Mexico Launch

1. Project Summary

Build a visually rich, fast, fully responsive marketing website for La Fiesta Mexico, a family-owned, authentic Mexican restaurant in Cincinnati, OH (established 2014). The site should feel warm, festive, and appetite-inducing — not a generic template. It should convert visitors into diners: get them to view the menu, place an online order, or make a reservation/call.

This is a marketing/informational site, not a new ordering backend. The restaurant already has a live ordering system at lafiestamexicocincy.com (powered by Cartana). Every "Order Online" CTA should link out to that existing ordering flow rather than rebuilding cart/checkout/payment functionality from scratch. (Flagging this as an assumption — if you actually want ordering built natively into the new Lovable site, that's a bigger scope decision involving a payment processor like Stripe, and should be called out to Lovable explicitly before starting.)

2. Verified Business Info (use exactly as-is — don't invent details)

Name: La Fiesta Mexico

Address: 1195 W Kemper Rd, Cincinnati (Forest Park), OH 45240

Phone: (513) 648-0578

Cuisine: Authentic Mexican / Tex-Mex, family-owned since 2014

Hours: Mon–Sat 11:00 AM–9:30 PM, Sun 11:00 AM–9:00 PM (Sources disagree slightly — one listing says close at 10:30 PM. Confirm exact hours with the restaurant before publishing.)

Services: Dine-in, carry-out, curbside pickup, delivery, outdoor seating, large group reservations, daily specials, Taco Tuesday, margaritas & Mexican beer

Known popular dishes: Alambre tacos, cheese enchiladas, chocolate flan, fajita burrito, street tacos (steak, carnitas, barbacoa, chorizo, chicken, al pastor, shrimp), churros with condensed milk

Menu categories to structure the Menu page around: Lunch Specials, Appetizers, Tacos, Street Tacos, Quesadillas, Burritos, Combination Dinners, Fajitas, House Specials, Steak, Chicken, Seafood, Vegetarian, Salads, Soups, Side Orders, Non-Alcoholic Drinks, Margaritas/Beer

Existing online ordering system: https://www.lafiestamexicocincy.com/rs/index_home.action

Social: Facebook page exists (link out; verify current handle before launch)

3. Site Structure

Home — hero, intro/story, featured dishes, hours/location snapshot, order-now + reserve CTAs, testimonial highlights, Instagram/Facebook feed teaser

Menu — categorized, filterable (e.g., Vegetarian, Spicy), prices, appetizing dish photography

Gallery — food, interior/atmosphere, events (Taco Tuesday, etc.)

About — family-owned story, since 2014, values

Contact — address, phone, embedded Google Map, contact form, hours

Order Online — CTA page/button linking out to the existing Cartana ordering system (see Section 1)

4. Brand Spec Sheet

⚠️ Important: I could not extract the real brand colors, logo, or photography from the live site because it's a JavaScript-heavy ordering platform I can't visually render. The palette and imagery direction below are a placeholder starting point in the authentic-Mexican-restaurant style. Before finalizing, do ONE of the following and update this section:

Screenshot the actual site/menu/signage and pull exact hex codes from the logo, or

Send Lovable the restaurant's actual logo file, or

Pull real photos from the restaurant's own Facebook page or Google Business Profile listing (search "La Fiesta Mexico Forest Park Ohio" — their Yelp listing alone has 80+ real customer/restaurant photos you can request rights to use, or better, ask the owner directly for their photo library).

Color Palette (placeholder — replace with real brand colors)

RoleColorHexPrimary (brand)Terracotta / Brick Red#C1442DSecondaryCactus / Agave Green#3C6E47AccentMarigold Gold#E8A33DAccent 2 (optional, Talavera-tile inspired)Deep Turquoise#1F6F78Background (light)Warm Cream#FAF3E7Text (dark)Charcoal Brown#2B211ANeutral border/dividerWarm Sand#E4D5BE

Typography

Headings: A bold, slightly playful display serif or hand-lettered-feel font (e.g., something like "Fraunces" or "Playfair Display") to evoke festive/artisanal energy — avoid anything that looks like a corporate fast-food chain.

Body: A clean, highly legible sans-serif (e.g., "Inter" or "Work Sans") for menu items, hours, and contact info.

Maintain minimum 16px body text, strong contrast ratios (WCAG AA) against the cream background.

Imagery Style

Real, warm, appetizing food photography — close-up, natural lighting, no stock-photo look.

Interior/atmosphere shots showing the "cute, casual, family-friendly" vibe reviewers consistently mention.

Do not use generic AI-generated food images or unrelated stock photography. Use only real photos supplied by the client or licensed from the restaurant's own channels (Facebook, Google Business Profile). If no real photos are available yet, use clearly-labeled placeholder blocks so they're obviously swappable, not fake "real" images.

Optional decorative accents: papel picado banners, subtle Talavera-tile patterns as section dividers — used tastefully, not overwhelming.

Voice & Tone

Warm, welcoming, family-first, proud of authenticity — not gimmicky "spicy meme" copy. Think: a neighborhood spot that's been serving the same families since 2014.

Logo

No logo file available yet — use a clean text-based wordmark ("La Fiesta Mexico") in the heading font as a placeholder, sized/positioned so it's a simple swap once a real logo is supplied.

5. Functional & UX Requirements

Fully responsive: mobile-first, then scale up to tablet/desktop. Test at 375px, 768px, 1024px, 1440px.

Sticky/floating "Order Online" and "Call Now" buttons on mobile for quick conversion.

Menu page: category tabs or filterable sections, easy to scan on mobile, prices clearly listed, tag vegetarian/spicy items.

Embedded Google Map on Contact and Home footer.

Click-to-call phone number on mobile.

Contact form with name, email, phone, message, and a note that it's for general inquiries only (not for placing food orders).

Reviews/testimonials section on Home — you can paraphrase (don't verbatim-copy) real review sentiment like: friendly service, generous portions, great margaritas, clean and welcoming atmosphere.

Smooth but subtle animations/transitions — festive, not distracting. Avoid heavy parallax that hurts mobile performance.

Loading and empty states designed, not left default.

404 page styled to match the brand.

6. Technical Requirements

Optimize all images (WebP where possible, responsive srcset/lazy-loading) for fast load on mobile data connections.

Semantic HTML, proper heading hierarchy, alt text on all images for accessibility.

SEO basics: unique page titles/meta descriptions, Open Graph tags for social sharing, LocalBusiness/Restaurant schema markup (JSON-LD) with the real NAP (name/address/phone) and hours from Section 2.

Favicon and social share preview image.

Fast performance target: aim for a good Lighthouse score (90+) on both mobile and desktop — this matters more than flashy effects.

Cross-browser check (Chrome, Safari, Firefox, mobile Safari/Chrome).

7. Explicit Content-Sourcing Instructions (fixes the "images only from the website" requirement)

Because the real site's images aren't accessible to pull directly, do this instead:

Ask the restaurant owner for their existing food/interior photos (highest quality, most accurate option).

Or pull real, rights-cleared photos from their official Facebook page or Google Business listing.

Do not fabricate photos or use unrelated stock imagery and present it as the restaurant's actual food/space.

Where a real photo isn't yet available, use a clearly-marked placeholder so it's obvious it needs replacing before launch.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/acfd2959-ed66-448c-b820-239040ef8094).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
