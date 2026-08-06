import { Link } from "@tanstack/react-router";
import { Clock, Facebook, MapPin, Phone } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { addressLine, hours, site } from "@/lib/site";

export function GoogleMap({ title }: { title: string }) {
  return (
    <iframe
      title={title}
      src={site.mapEmbedUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-64 w-full rounded-lg border border-border sm:h-80"
    />
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-muted/60">
      <div className="h-2 papel-picado" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-3 lg:px-8">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A family-owned kitchen serving authentic Mexican and Tex-Mex favorites to Forest Park
            neighbors since 2014.
          </p>
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
          >
            <Facebook className="size-4" aria-hidden="true" />
            Follow us on Facebook
          </a>
        </div>

        <div className="space-y-4 text-sm">
          <h2 className="font-display text-lg font-semibold">Visit us</h2>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{addressLine}</span>
          </p>
          <p className="flex items-start gap-2">
            <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <a href={site.phoneHref} className="font-semibold hover:underline">
              {site.phoneDisplay}
            </a>
          </p>
          <div className="flex items-start gap-2">
            <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <ul>
              {hours.map((h) => (
                <li key={h.days}>
                  <span className="font-medium">{h.days}:</span> {h.time}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-muted-foreground">
            Hours can change on holidays — please call ahead to confirm.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
            <Link to="/menu" className="hover:underline">
              Menu
            </Link>
            <Link to="/gallery" className="hover:underline">
              Gallery
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            <Link to="/order" className="hover:underline">
              Order Online
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">Find the restaurant</h2>
          <GoogleMap title="Map showing La Fiesta Mexico at 1195 W Kemper Rd, Cincinnati, OH" />
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} La Fiesta Mexico. All rights reserved.
      </div>
    </footer>
  );
}
