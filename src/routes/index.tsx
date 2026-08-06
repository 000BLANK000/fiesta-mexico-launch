import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { addressLine, hours, services, site } from "@/lib/site";

const title = "La Fiesta Mexico | Authentic Mexican Restaurant in Cincinnati";
const description =
  "Family-owned Mexican restaurant in Forest Park, Cincinnati since 2014. Street tacos, sizzling fajitas, margaritas. Dine in, carry-out, curbside or delivery.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: site.name,
          description,
          telephone: "+1-513-648-0578",
          servesCuisine: ["Mexican", "Tex-Mex"],
          priceRange: "$$",
          foundingDate: "2014",
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: site.street,
            addressLocality: site.city,
            addressRegion: site.state,
            postalCode: site.zip,
            addressCountry: "US",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "11:00",
              closes: "21:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "11:00",
              closes: "21:00",
            },
          ],
          acceptsReservations: "True",
          hasMenu: "/menu",
          potentialAction: {
            "@type": "OrderAction",
            target: site.orderUrl,
          },
        }),
      },
    ],
  }),
  component: Home,
});

const featured = [
  {
    name: "Alambre Tacos",
    blurb: "Grilled steak, bacon, peppers and melted cheese — the order our regulars swear by.",
    photo: "Close-up of alambre tacos on the plate",
  },
  {
    name: "Cheese Enchiladas",
    blurb: "Corn tortillas rolled with cheese under our house red sauce, rice and beans alongside.",
    photo: "Cheese enchiladas plated with rice and beans",
  },
  {
    name: "Street Tacos",
    blurb: "Carnitas, barbacoa, chorizo, al pastor, steak, chicken or shrimp on warm corn tortillas.",
    photo: "Trio of street tacos with onion, cilantro and lime",
  },
  {
    name: "Fajita Burrito",
    blurb: "A generous flour tortilla packed with sizzling peppers, onions and your choice of meat.",
    photo: "Fajita burrito cut open on a plate",
  },
  {
    name: "Chocolate Flan",
    blurb: "Silky, house-made, and gone in about four bites.",
    photo: "Slice of chocolate flan with caramel",
  },
  {
    name: "Churros",
    blurb: "Cinnamon-sugar churros served with sweet condensed milk for dipping.",
    photo: "Churros dusted with cinnamon sugar and condensed milk",
  },
];



function Home() {
  return (
    <div className="pb-24 sm:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="rise-in">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Forest Park, Cincinnati · Family-owned since 2014
            </p>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Authentic Mexican food,
              <span className="text-primary"> made for our neighbors.</span>
            </h1>
            <p className="mt-5 max-w-prose text-base text-muted-foreground sm:text-lg">
              Two generations of our family in one kitchen on W Kemper Rd — street tacos, sizzling
              fajitas, cheese enchiladas and cold margaritas, seven days a week.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <UtensilsCrossed className="size-5" aria-hidden="true" />
                Order Online
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 text-base font-semibold text-secondary transition-colors hover:bg-secondary/10"
              >
                <Phone className="size-5" aria-hidden="true" />
                Call for a table
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Call us for questions about your visit or your order.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3">
            <PhotoPlaceholder
              label="Signature platter, natural light"
              ratio="tall"
              className="col-span-1"
            />
            <div className="grid gap-3">
              <PhotoPlaceholder label="Dining room, family-friendly vibe" ratio="square" />
              <PhotoPlaceholder label="Margarita on the bar" ratio="square" />
            </div>
          </div>
        </div>
        <div className="h-2.5 papel-picado" aria-hidden="true" />
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <PhotoPlaceholder label="The family behind La Fiesta Mexico" ratio="photo" />
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Our family's table, since 2014</h2>
            <p className="mt-4 text-muted-foreground">
              We opened La Fiesta Mexico with family recipes, a small dining room and a simple
              promise: cook the food we grew up with, and treat everyone who walks in like they're
              coming over for dinner. A decade later, we're still doing exactly that.
            </p>
            <p className="mt-4 text-muted-foreground">
              Salsas and sauces are made in-house, and tortillas hit the grill to order.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-flex text-base font-semibold text-primary hover:underline"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="bg-muted/40 py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div className="min-w-0">
              <h2 className="text-3xl font-semibold sm:text-4xl">What people order</h2>
              <p className="mt-2 text-muted-foreground">
                The plates that keep coming back out of our kitchen.
              </p>
            </div>
            <Link
              to="/menu"
              className="shrink-0 text-base font-semibold text-primary hover:underline"
            >
              See the full menu →
            </Link>
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((dish) => (
              <li
                key={dish.name}
                className="overflow-hidden rounded-xl border border-border bg-card transition-transform hover:-translate-y-1"
              >
                <PhotoPlaceholder label={dish.photo} ratio="photo" className="rounded-none border-0 border-b" />
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold">{dish.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{dish.blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we offer */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              How to enjoy it
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Dine in or take it home</h2>
            <p className="mt-4 text-muted-foreground">
              Sit down with us on W Kemper Rd, or order for carry-out, curbside or delivery through
              our ordering site.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {services.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <PhotoPlaceholder label="Plated dinner on the table" ratio="photo" />
        </div>
      </section>


      {/* Hours & location snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <Clock className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-3 font-display text-xl font-semibold">Hours</h2>
            <ul className="mt-3 space-y-1 text-sm">
              {hours.map((h) => (
                <li key={h.days}>
                  <span className="font-medium">{h.days}</span>
                  <br />
                  {h.time}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              Holiday hours can differ — please call to confirm.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <MapPin className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-3 font-display text-xl font-semibold">Find us</h2>
            <p className="mt-3 text-sm">{addressLine}</p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
            >
              Get directions →
            </a>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <Phone className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-3 font-display text-xl font-semibold">Order or reserve</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Pickup, curbside and delivery run through our ordering site. For tables and large
              groups, give us a call.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={site.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Order Online
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex justify-center rounded-full border border-border px-4 py-2 text-sm font-semibold"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
