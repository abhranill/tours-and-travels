import { useEffect, useState } from "react";
import { Compass, Menu, Phone, X } from "lucide-react";
import { cn } from "../utils/cn";

const links = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Tours", href: "#tours" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onBook: () => void;
}

export default function Navbar({ onBook }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
              scrolled || open ? "bg-ocean-600 text-white" : "bg-white/15 text-white backdrop-blur",
            )}
          >
            <Compass className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-xl font-semibold tracking-tight",
                scrolled || open ? "text-ocean-900" : "text-white",
              )}
            >
              Horizon
            </span>
            <span
              className={cn(
                "block text-[10px] font-semibold uppercase tracking-[0.25em]",
                scrolled || open ? "text-ocean-600" : "text-white/80",
              )}
            >
              Tours & Travel
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-sand-400",
                scrolled ? "text-slate-700" : "text-white/90",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+18005550199"
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              scrolled ? "text-slate-700" : "text-white/90",
            )}
          >
            <Phone className="h-4 w-4" /> +1 (800) 555‑0199
          </a>
          <button
            onClick={onBook}
            className="rounded-full bg-sand-400 px-5 py-2.5 text-sm font-semibold text-ocean-950 shadow-lg shadow-sand-400/30 transition hover:bg-sand-300"
          >
            Plan My Trip
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "rounded-lg p-2 lg:hidden",
            scrolled || open ? "text-ocean-900" : "text-white",
          )}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3 text-base font-medium text-slate-800"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="mt-4 w-full rounded-full bg-ocean-600 py-3 text-sm font-semibold text-white"
          >
            Plan My Trip
          </button>
        </div>
      )}
    </header>
  );
}
