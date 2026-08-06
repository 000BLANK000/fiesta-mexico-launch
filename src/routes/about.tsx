import { createFileRoute, Link } from "@tanstack/react-router";
import { HandHeart, Home, Sparkles, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

const title = "About Us | La Fiesta Mexico — Family-Owned Since 2014";
const description =
  "La Fiesta Mexico has been a family-owned Mexican kitchen in Forest Park, Cincinnati since 2014. Here's our story and what we care about.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: HandHeart,
    heading: "Family recipes first",
    body: "Our salsas, sauces and marinades come from the recipes we grew up on, made fresh in our own kitchen.",
  },
  {
    icon: Users,
    heading: "Neighbors, not customers",
    body: "We've watched families grow up in these booths since 2014. We'd rather know your usual order than upsell you.",
  },
  {
    icon: Home,
    heading: "A room you can relax in",
    body: "Casual, clean and family-friendly — high chairs, big tables and no rush to turn them over.",
  },
  {
    icon: Sparkles,
    heading: "Made to order",
    body: "Tortillas hit the grill when you order. Fajitas leave the kitchen still sizzling. That's the whole trick.",
  },
];

function AboutPage() {
  return (
    <div className="pb-24 sm:pb-0">
      <PageHeader
        eyebrow="Since 2014"
        title="Our Family, Our Kitchen"
        intro="La Fiesta Mexico is a family-owned restaurant on W Kemper Rd in Forest Park, serving authentic Mexican and Tex-Mex cooking to Cincinnati."
      />

      <div className="mx-auto mt-12 max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <PhotoPlaceholder label="Our family in front of the restaurant" ratio="photo" />
          <div className="space-y-4 text-muted-foreground">
            <p>
              We opened our doors in 2014 with a short menu, a small dining room and the recipes our
              family had been cooking for decades. The idea was simple: make the food we'd serve at
              home, and make room at the table for whoever shows up.
            </p>
            <p>
              Word traveled the way it does in a neighborhood — one family telling another. The menu
              grew to make space for street tacos, sizzling fajita platters, combination dinners and
              a margarita list worth lingering over, but the kitchen never changed hands. It's still
              us back there.
            </p>
            <p>
              These days you'll find us packed on Taco Tuesday, feeding the lunch rush from the
              office parks nearby, and setting up long tables for birthdays and graduations. We're
              grateful for every one of those nights.
            </p>
          </div>
        </div>

        <section className="mt-16" aria-labelledby="values-heading">
          <h2 id="values-heading" className="text-3xl font-semibold sm:text-4xl">
            What we care about
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full tile-band" aria-hidden="true" />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v.heading} className="rounded-xl border border-border bg-card p-6">
                <v.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-display text-xl font-semibold">{v.heading}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            to="/menu"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground"
          >
            See the menu
          </Link>
          <Link
            to="/contact"
            className="inline-flex rounded-full border border-secondary px-6 py-3 text-base font-semibold text-secondary"
          >
            Visit us
          </Link>
        </div>
      </div>
    </div>
  );
}
