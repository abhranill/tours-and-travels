import { useMemo } from "react";
import { Check, Clock, MapPin, Star, Users, X } from "lucide-react";
import { categories, tours, type Category, type Tour } from "../data/content";
import SectionHeading from "./SectionHeading";
import { cn } from "../utils/cn";

interface Props {
  category: Category;
  onCategoryChange: (c: Category) => void;
  search: string;
  onClearSearch: () => void;
  onBook: (tour: Tour) => void;
}

export default function Tours({ category, onCategoryChange, search, onClearSearch, onBook }: Props) {
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tours.filter((t) => {
      const matchesCat = category === "All" || t.category === category;
      const haystack = [t.title, t.location, t.category, ...t.tags].join(" ").toLowerCase();
      const words = q.split(/\s+/).filter((w) => w.length > 2);
      const matchesQ = !q || haystack.includes(q) || words.some((w) => haystack.includes(w));
      return matchesCat && matchesQ;
    });
  }, [category, search]);

  return (
    <section id="tours" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Tour Packages"
            title={
              <>
                Handpicked journeys, <span className="italic text-ocean-600">all‑inclusive</span>
              </>
            }
            description="Every package includes premium accommodation, expert guides, transfers and curated experiences. Just pack your bags."
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => onCategoryChange(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  category === c
                    ? "border-ocean-600 bg-ocean-600 text-white shadow-md shadow-ocean-600/25"
                    : "border-slate-200 bg-white text-slate-600 hover:border-ocean-300 hover:text-ocean-700",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {search && (
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
            Showing results for <span className="font-semibold text-ocean-800">“{search}”</span>
            <button
              onClick={onClearSearch}
              className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200 hover:text-ocean-700"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="mt-14 rounded-3xl border border-dashed border-slate-300 bg-white p-14 text-center">
            <p className="font-display text-2xl text-ocean-950">No tours match your search yet.</p>
            <p className="mt-2 text-slate-500">
              Try a different destination or let our specialists design a custom itinerary for you.
            </p>
            <button
              onClick={onClearSearch}
              className="mt-6 rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white hover:bg-ocean-700"
            >
              Show all tours
            </button>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((t) => (
              <TourCard key={t.id} tour={t} onBook={() => onBook(t)} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TourCard({ tour, onBook }: { tour: Tour; onBook: () => void }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean-900/10">
      <div className="relative h-60 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ocean-800 backdrop-blur">
            {tour.category}
          </span>
          {tour.badge && (
            <span className="rounded-full bg-sand-400 px-3 py-1 text-xs font-semibold text-ocean-950">
              {tour.badge}
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-sand-400 text-sand-400" />
          {tour.rating.toFixed(1)} <span className="text-white/70">({tour.reviews})</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <MapPin className="h-3.5 w-3.5 text-ocean-600" /> {tour.location}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ocean-950">
          {tour.title}
        </h3>

        <ul className="mt-4 space-y-1.5">
          {tour.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
              <Check className="h-4 w-4 shrink-0 text-ocean-500" /> {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-ocean-600" /> {tour.days} days
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-ocean-600" /> {tour.groupSize}
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-xs text-slate-500">From</span>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-ocean-950">
                ${tour.price.toLocaleString()}
              </span>
              {tour.oldPrice && (
                <span className="text-sm text-slate-400 line-through">
                  ${tour.oldPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-xs text-slate-500">per person</span>
          </div>
          <button
            onClick={onBook}
            className="rounded-full bg-ocean-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ocean-700"
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}
