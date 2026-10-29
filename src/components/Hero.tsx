import { useState } from "react";
import { Calendar, MapPin, Search, Star, Users } from "lucide-react";

const HERO_IMG =
  "https://images.pexels.com/photos/5007562/pexels-photo-5007562.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1920";

interface HeroProps {
  onSearch: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <img
        src={HERO_IMG}
        alt="Aerial view of a turquoise tropical coastline"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-950/40 to-ocean-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/50 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-sand-400 text-sand-400" />
            Rated 4.9 by 12,000+ travellers
          </div>
          <h1 className="animate-fade-up delay-100 mt-6 font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Discover the world,
            <br />
            <span className="italic text-sand-300">one journey</span> at a time.
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Handcrafted tours, expert local guides and seamless planning. From
            island escapes to mountain treks — we design trips you'll remember
            for a lifetime.
          </p>
          <div className="animate-fade-up delay-300 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#tours"
              className="rounded-full bg-sand-400 px-7 py-3.5 text-sm font-semibold text-ocean-950 shadow-xl shadow-sand-500/30 transition hover:bg-sand-300"
            >
              Explore Tours
            </a>
            <a
              href="#destinations"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Destinations
            </a>
          </div>
        </div>

        {/* Search widget */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(where);
          }}
          className="animate-fade-up delay-400 mt-14 grid w-full max-w-5xl grid-cols-1 gap-3 rounded-3xl bg-white p-3 shadow-2xl shadow-ocean-950/30 md:grid-cols-[1.4fr_1fr_1fr_auto] md:rounded-full md:p-2"
        >
          <label className="flex items-center gap-3 rounded-2xl px-4 py-3 md:rounded-full md:border-r md:border-slate-200">
            <MapPin className="h-5 w-5 shrink-0 text-ocean-600" />
            <span className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Destination
              </span>
              <input
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                placeholder="Where do you want to go?"
                className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
              />
            </span>
          </label>
          <label className="flex items-center gap-3 rounded-2xl px-4 py-3 md:rounded-full md:border-r md:border-slate-200">
            <Calendar className="h-5 w-5 shrink-0 text-ocean-600" />
            <span className="flex w-full flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Travel dates
              </span>
              <input
                type="month"
                value={when}
                onChange={(e) => setWhen(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none"
              />
            </span>
          </label>
          <label className="flex items-center gap-3 rounded-2xl px-4 py-3 md:rounded-full">
            <Users className="h-5 w-5 shrink-0 text-ocean-600" />
            <span className="flex w-full flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Travellers
              </span>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "traveller" : "travellers"}
                  </option>
                ))}
                <option value="7">7+ travellers</option>
              </select>
            </span>
          </label>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-2xl bg-ocean-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-ocean-700 md:rounded-full"
          >
            <Search className="h-4 w-4" /> Search
          </button>
        </form>

        {/* Trust bar */}
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-white/80">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sand-400" /> 120+ destinations
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sand-400" /> Licensed & bonded (IATA · ATOL)
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sand-400" /> 24/7 on‑trip support
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sand-400" /> Free cancellation up to 30 days
          </span>
        </div>
      </div>
    </section>
  );
}
