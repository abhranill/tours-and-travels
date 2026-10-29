import { ArrowUpRight, MapPin } from "lucide-react";
import { destinations } from "../data/content";
import SectionHeading from "./SectionHeading";
import { cn } from "../utils/cn";

interface Props {
  onSelect: (name: string) => void;
}

export default function Destinations({ onSelect }: Props) {
  return (
    <section id="destinations" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Top Destinations"
          title={
            <>
              Places that take your <span className="italic text-ocean-600">breath away</span>
            </>
          }
          description="From sun-drenched islands to snow-capped peaks — explore our most-loved destinations, each curated by travel specialists who know them intimately."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <button
              key={d.id}
              onClick={() => onSelect(d.name)}
              className={cn(
                "group relative overflow-hidden rounded-3xl text-left shadow-md",
                d.tall ? "sm:row-span-2" : "",
                i === 2 ? "lg:col-span-2" : "",
              )}
            >
              <img
                src={d.image}
                alt={`${d.name}, ${d.country}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <span className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-white/70">
                    <MapPin className="h-3 w-3" /> {d.country}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-white">{d.name}</h3>
                  <span className="text-sm text-white/80">{d.tours} tours available</span>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-sand-400 group-hover:text-ocean-950">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
