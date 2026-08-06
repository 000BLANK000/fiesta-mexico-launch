import { Phone, UtensilsCrossed } from "lucide-react";
import { site } from "@/lib/site";

/** Conversion bar pinned to the bottom of small screens only. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary px-4 py-3 text-sm font-semibold text-secondary"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={site.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
        >
          <UtensilsCrossed className="size-4" aria-hidden="true" />
          Order Online
        </a>
      </div>
    </div>
  );
}
