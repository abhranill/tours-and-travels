import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";
import SectionHeading from "./SectionHeading";
import { cn } from "../utils/cn";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(id);
  }, [paused, total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const t = testimonials[index];

  return (
    <section id="reviews" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Traveller Stories"
          title={
            <>
              Loved by <span className="italic text-ocean-600">thousands</span> of explorers
            </>
          }
          description="Don't just take our word for it. Here's what recent guests have to say about their Horizon experience."
        />

        <div
          className="relative mx-auto mt-14 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl shadow-ocean-900/5 ring-1 ring-slate-200/60 sm:p-12">
            <Quote className="absolute right-8 top-8 h-20 w-20 text-ocean-100" />
            <div className="relative" key={t.id}>
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-sand-400 text-sand-400" />
                ))}
              </div>
              <p className="animate-fade-up mt-6 font-display text-xl leading-relaxed text-ocean-950 sm:text-2xl">
                “{t.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ocean-500 to-ocean-700 font-semibold text-white">
                  {t.initials}
                </span>
                <div>
                  <div className="font-semibold text-ocean-950">{t.name}</div>
                  <div className="text-sm text-slate-500">
                    {t.location} · <span className="text-ocean-700">{t.trip}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    i === index ? "w-8 bg-ocean-600" : "w-2.5 bg-ocean-200 hover:bg-ocean-300",
                  )}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ocean-900 transition hover:bg-ocean-600 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ocean-900 transition hover:bg-ocean-600 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
