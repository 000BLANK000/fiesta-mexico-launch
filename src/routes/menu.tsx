import { createFileRoute } from "@tanstack/react-router";
import { Flame, Leaf } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { menu, PRICE_PLACEHOLDER } from "@/data/menu";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const title = "Menu | La Fiesta Mexico — Cincinnati, OH";
const description =
  "Browse the full La Fiesta Mexico menu: street tacos, fajitas, burritos, combination dinners, seafood, vegetarian plates, margaritas and more in Forest Park, Cincinnati.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Filter = "all" | "vegetarian" | "spicy";

function MenuPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const categories = useMemo(
    () =>
      menu
        .map((cat) => ({
          ...cat,
          items: cat.items.filter((item) =>
            filter === "all"
              ? true
              : filter === "vegetarian"
                ? item.vegetarian
                : item.spicy,
          ),
        }))
        .filter((cat) => cat.items.length > 0),
    [filter],
  );

  return (
    <div className="pb-24 sm:pb-0">
      <PageHeader
        eyebrow="Dine in · Carry-out · Delivery"
        title="Our Menu"
        intro="Family recipes, made to order. Filter for vegetarian or spicy plates, then order online or call us."
      />

      <div className="mx-auto mt-8 max-w-6xl px-4 lg:px-8">
        <div className="rounded-xl border border-accent/50 bg-accent/15 p-4 text-sm">
          <strong className="font-semibold">Pricing pending:</strong> prices below are placeholders
          while we confirm current pricing. Live prices are always shown on our{" "}
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline"
          >
            online ordering site
          </a>
          .
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Menu filters">
          {(
            [
              { key: "all", label: "All dishes" },
              { key: "vegetarian", label: "Vegetarian" },
              { key: "spicy", label: "Spicy" },
            ] as const
          ).map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                filter === f.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:bg-muted",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Category nav */}
        <nav aria-label="Menu categories" className="sticky top-[73px] z-30 -mx-4 mt-6 bg-background/95 px-4 py-3 backdrop-blur lg:mx-0 lg:px-0">
          <ul className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <li key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  className="inline-block whitespace-nowrap rounded-full border border-border px-3 py-1.5 text-sm hover:bg-muted"
                >
                  {cat.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {categories.length === 0 ? (
          <p className="mt-12 rounded-xl border border-dashed border-border bg-muted/50 p-10 text-center text-muted-foreground">
            No dishes match that filter right now. Try “All dishes”, or call us at{" "}
            <a href={site.phoneHref} className="font-semibold text-primary underline">
              {site.phoneDisplay}
            </a>{" "}
            and we'll happily make a recommendation.
          </p>
        ) : (
          <div className="mt-6 space-y-12">
            {categories.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-40">
                <h2 className="text-2xl font-semibold sm:text-3xl">{cat.title}</h2>
                {cat.note ? (
                  <p className="mt-1 text-sm text-muted-foreground">{cat.note}</p>
                ) : null}
                <div className="mt-3 h-1 w-16 rounded-full tile-band" aria-hidden="true" />
                <ul className="mt-5 grid gap-4 md:grid-cols-2">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="rounded-lg border border-border bg-card p-4 transition-transform hover:-translate-y-0.5"
                    >
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                        <h3 className="min-w-0 font-display text-lg font-semibold">
                          {item.name}
                        </h3>
                        <span
                          className="shrink-0 text-sm font-semibold text-muted-foreground"
                          title="Price pending confirmation"
                        >
                          {PRICE_PLACEHOLDER}
                        </span>
                      </div>
                      {item.description ? (
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      ) : null}
                      {item.vegetarian || item.spicy ? (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {item.vegetarian ? (
                            <li className="inline-flex items-center gap-1 rounded-full bg-secondary/15 px-2.5 py-1 text-xs font-semibold text-secondary">
                              <Leaf className="size-3.5" aria-hidden="true" /> Vegetarian
                            </li>
                          ) : null}
                          {item.spicy ? (
                            <li className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
                              <Flame className="size-3.5" aria-hidden="true" /> Spicy
                            </li>
                          ) : null}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        <p className="mt-12 text-sm text-muted-foreground">
          Have an allergy or a substitution in mind? Call us at{" "}
          <a href={site.phoneHref} className="font-semibold text-primary underline">
            {site.phoneDisplay}
          </a>{" "}
          before ordering and our kitchen will do its best.
        </p>
      </div>
    </div>
  );
}
