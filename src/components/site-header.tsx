import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/lib/site";

const nav = [
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
        <div className="min-w-0">
          <Wordmark />
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>

          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Order Online
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-md border border-border p-2 md:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {[...nav, { to: "/order", label: "Order Online" }].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-primary" }}
                  className="block border-b border-border/60 py-3 text-base font-medium last:border-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
