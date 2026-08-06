import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PhotoPlaceholderProps = {
  /** What photo belongs here, e.g. "Close-up of alambre tacos". */
  label: string;
  className?: string;
  ratio?: "square" | "photo" | "wide" | "tall";
};

const ratioClass = {
  square: "aspect-square",
  photo: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  tall: "aspect-[3/4]",
} as const;

/**
 * Clearly-marked stand-in for a real restaurant photo.
 * Every one of these must be replaced with client-supplied photography before launch.
 */
export function PhotoPlaceholder({ label, className, ratio = "photo" }: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-dashed border-primary/35 bg-muted p-4 text-center",
        ratioClass[ratio],
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 opacity-[0.12] tile-band" aria-hidden="true" />
      <ImageIcon className="relative size-6 text-primary/70" aria-hidden="true" />
      <span className="relative text-xs font-semibold uppercase tracking-wider text-primary/80">
        Replace with real photo
      </span>
      <span className="relative max-w-[22ch] text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
