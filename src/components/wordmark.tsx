import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="La Fiesta Mexico — home"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      {/* Placeholder text wordmark — swap this component's contents for the real logo file. */}
      <span className="font-display text-xl font-semibold tracking-tight text-primary sm:text-2xl">
        La Fiesta <span className="text-secondary">Mexico</span>
      </span>
      <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Forest Park · Since 2014
      </span>
    </Link>
  );
}
