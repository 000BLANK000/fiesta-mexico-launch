# La Fiesta Mexico — Marketing Website

A warm, festive, mobile-first marketing site for La Fiesta Mexico (Cincinnati, OH, family-owned since 2014). No ordering backend — every "Order Online" CTA links out to the existing Cartana system.

## Pages

- **/** — Hero, family story teaser, featured dishes, hours + location snapshot, paraphrased testimonials, Taco Tuesday highlight, Google Map in footer, social links.
- **/menu** — All 18 categories from the brief, with sticky category navigation, filter chips (Vegetarian, Spicy), and dish tags. Prices show as clearly-marked placeholders (`$--.--`) with a note that final pricing is pending.
- **/gallery** — Grid of labeled placeholder blocks grouped into Food / Atmosphere / Events.
- **/about** — Family-owned story since 2014, values, neighborhood tone.
- **/contact** — Address, click-to-call phone, hours, embedded Google Map. No form: prominent call + directions actions instead, with a line noting inquiries are by phone and food orders go through the ordering site.
- **/order** — Short landing page that explains pickup/delivery/curbside and links out to the Cartana ordering system.
- **404** — Branded not-found page.

## Content rules

- Real NAP used verbatim: 1195 W Kemper Rd, Cincinnati (Forest Park), OH 45240 · (513) 648-0578.
- Hours: Mon–Sat 11:00 AM–9:30 PM, Sun 11:00 AM–9:00 PM, with a small "call to confirm" note.
- Every photo slot is a **labeled placeholder block** ("Replace: close-up of alambre tacos") styled on-brand — no AI-generated or stock food photos anywhere.
- Testimonials are paraphrased review sentiment (friendly service, generous portions, great margaritas, clean welcoming space) shown without fabricated names or star counts.
- Wordmark is text-only "La Fiesta Mexico" in the display font, isolated in one component for a one-file logo swap later.

## Design system

- Palette from the spec as tokens: terracotta `#C1442D`, agave green `#3C6E47`, marigold `#E8A33D`, turquoise `#1F6F78`, cream `#FAF3E7`, charcoal brown `#2B211A`, warm sand `#E4D5BE`.
- Typography: Fraunces headings, Work Sans body, 16px minimum body size, AA contrast on cream.
- Tasteful decorative accents only: papel-picado band under the hero, subtle Talavera-inspired CSS tile pattern as section dividers. No parallax.
- Restrained motion: short fade/rise on section entry, hover lift on cards, respects `prefers-reduced-motion`.

## Mobile & conversion

- Sticky bottom bar on mobile with "Order Online" and "Call Now"; hidden on desktop where the header holds the CTAs.
- Tested layouts at 375 / 768 / 1024 / 1440.
- Designed empty and loading states for the menu filters (e.g. "No vegetarian dishes in this category").

## Technical notes

- TanStack Start file routes: `index.tsx`, `menu.tsx`, `gallery.tsx`, `about.tsx`, `contact.tsx`, `order.tsx`. Shared header/footer + sticky mobile CTA bar in `__root.tsx`.
- Per-route `head()` with unique title, description, og:title/og:description, og:url and self-referencing canonical.
- JSON-LD `Restaurant` schema on the home route with real name, address, phone, `openingHoursSpecification`, cuisine, and the ordering URL as `hasMenu`/`potentialAction`.
- Menu data lives in one typed `src/data/menu.ts` file (category → items with `vegetarian` / `spicy` flags) so content edits never touch components.
- Design tokens defined in `src/styles.css` under `:root` + `@theme inline`; fonts loaded via `<link>` in the root route head. No hardcoded color utilities in components.
- Google Map via a lazy-loaded `iframe` (no API key needed), semantic HTML, alt text everywhere, no heavy image payload since all photos are placeholders.

## Before launch (your side)

- Confirm exact closing time (one listing says 10:30 PM).
- Supply real logo, photo library, verified prices, and the current Facebook handle.
