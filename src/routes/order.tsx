import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Clock, ExternalLink, Phone, ShoppingBag, Truck } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { hours, site } from "@/lib/site";

const title = "Order Online | La Fiesta Mexico — Pickup, Curbside & Delivery";
const description =
  "Order La Fiesta Mexico for pickup, curbside or delivery in Forest Park, Cincinnati. Head to our ordering site for live prices and checkout, or call (513) 648-0578.";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/order" },
    ],
    links: [{ rel: "canonical", href: "/order" }],
  }),
  component: OrderPage,
});

const options = [
  {
    icon: ShoppingBag,
    heading: "Carry-out",
    body: "Order ahead, walk in and pick it up hot at the counter.",
  },
  {
    icon: Car,
    heading: "Curbside pickup",
    body: "Stay in the car — tell us your vehicle at checkout and we'll bring it out.",
  },
  {
    icon: Truck,
    heading: "Delivery",
    body: "Available in the Forest Park area through our ordering site.",
  },
];

function OrderPage() {
  return (
    <div className="pb-24 sm:pb-0">
      <PageHeader
        eyebrow="Pickup · Curbside · Delivery"
        title="Order Online"
        intro="Ordering and payment happen on our existing ordering site, where prices and availability are always current."
      />

      <div className="mx-auto mt-10 max-w-4xl px-4 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6 text-center sm:p-10">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Ready when you are
          </h2>
          <p className="mx-auto mt-3 max-w-prose text-muted-foreground">
            The button below opens our ordering system in a new tab. Build your order, choose pickup,
            curbside or delivery, and check out there.
          </p>
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start my order
            <ExternalLink className="size-5" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Prefer to talk to a person? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-primary underline">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {options.map((o) => (
            <li key={o.heading} className="rounded-xl border border-border bg-card p-6">
              <o.icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-display text-xl font-semibold">{o.heading}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
            </li>
          ))}
        </ul>

        <section className="mt-10 rounded-xl border border-border bg-muted/50 p-6" aria-labelledby="order-hours">
          <h2 id="order-hours" className="flex items-center gap-2 font-display text-xl font-semibold">
            <Clock className="size-5 text-primary" aria-hidden="true" />
            Ordering hours
          </h2>
          <ul className="mt-3 space-y-1 text-sm">
            {hours.map((h) => (
              <li key={h.days}>
                <span className="font-medium">{h.days}:</span> {h.time}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Last orders go in shortly before closing — please call to confirm on holidays.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/menu" className="text-base font-semibold text-primary hover:underline">
            Browse the menu first →
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-base font-semibold text-secondary hover:underline"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call the restaurant
          </a>
        </div>
      </div>
    </div>
  );
}
