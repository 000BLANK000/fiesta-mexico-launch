import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, MapPin, MessageSquare, Phone, UtensilsCrossed } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { GoogleMap } from "@/components/site-footer";
import { addressLine, hours, services, site } from "@/lib/site";

const title = "Contact & Location | La Fiesta Mexico — Cincinnati, OH";
const description =
  "Find La Fiesta Mexico at 1195 W Kemper Rd, Cincinnati (Forest Park), OH 45240. Call (513) 648-0578 for tables, large groups and general questions. Hours and map inside.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pb-24 sm:pb-0">
      <PageHeader
        eyebrow="Forest Park, Cincinnati"
        title="Contact & Location"
        intro="We're on W Kemper Rd, just off I-275. Call us for a table, a large group, or any question about the menu."
      />

      <div className="mx-auto mt-12 max-w-6xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <section className="rounded-xl border border-border bg-card p-6" aria-labelledby="call-heading">
              <MessageSquare className="size-6 text-primary" aria-hidden="true" />
              <h2 id="call-heading" className="mt-3 font-display text-2xl font-semibold">
                Talk to us directly
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                General questions are handled by phone so you get a real answer the same day. Food
                orders go through our ordering site — this page isn't for placing orders.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary px-6 py-3 text-base font-semibold text-secondary"
                >
                  <UtensilsCrossed className="size-5" aria-hidden="true" />
                  Order Online
                </a>
              </div>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
              >
                <Facebook className="size-4" aria-hidden="true" />
                Message us on Facebook
              </a>
            </section>

            <section className="rounded-xl border border-border bg-card p-6" aria-labelledby="address-heading">
              <MapPin className="size-6 text-primary" aria-hidden="true" />
              <h2 id="address-heading" className="mt-3 font-display text-2xl font-semibold">
                Address
              </h2>
              <address className="mt-2 not-italic">{addressLine}</address>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Get driving directions →
              </a>
            </section>

            <section className="rounded-xl border border-border bg-card p-6" aria-labelledby="hours-heading">
              <Clock className="size-6 text-primary" aria-hidden="true" />
              <h2 id="hours-heading" className="mt-3 font-display text-2xl font-semibold">
                Hours
              </h2>
              <ul className="mt-3 space-y-1 text-sm">
                {hours.map((h) => (
                  <li key={h.days} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
                    <span className="min-w-0 font-medium">{h.days}</span>
                    <span className="shrink-0">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Holiday hours can differ — please call to confirm before heading over.
              </p>
            </section>
          </div>

          <div className="space-y-6">
            <GoogleMap title="Map showing La Fiesta Mexico at 1195 W Kemper Rd, Cincinnati, OH 45240" />
            <section className="rounded-xl border border-border bg-card p-6" aria-labelledby="services-heading">
              <h2 id="services-heading" className="font-display text-2xl font-semibold">
                Ways to enjoy La Fiesta
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {services.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
