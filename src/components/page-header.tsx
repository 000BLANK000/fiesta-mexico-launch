import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <header className={cn("mx-auto max-w-3xl px-4 pt-12 text-center lg:px-8", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">{title}</h1>
      {intro ? <p className="mt-4 text-base text-muted-foreground sm:text-lg">{intro}</p> : null}
      <div className="mx-auto mt-6 h-1.5 w-24 rounded-full tile-band" aria-hidden="true" />
    </header>
  );
}
