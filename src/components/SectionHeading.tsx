import { cn } from "../utils/cn";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: Props) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <span
        className={cn(
          "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em]",
          light ? "text-sand-300" : "text-ocean-600",
        )}
      >
        <span className={cn("h-px w-8", light ? "bg-sand-300" : "bg-ocean-600")} />
        {eyebrow}
        {align === "center" && (
          <span className={cn("h-px w-8", light ? "bg-sand-300" : "bg-ocean-600")} />
        )}
      </span>
      <h2
        className={cn(
          "mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl",
          light ? "text-white" : "text-ocean-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-white/75" : "text-slate-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
