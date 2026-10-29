import { useState } from "react";
import { Plane } from "lucide-react";

const BG =
  "https://images.pexels.com/photos/5007360/pexels-photo-5007360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1600";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="relative overflow-hidden py-24">
      <img src={BG} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ocean-950/75" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="animate-float inline-flex h-16 w-16 items-center justify-center rounded-full bg-sand-400 text-ocean-950 shadow-xl shadow-sand-400/30">
          <Plane className="h-7 w-7" />
        </span>
        <h2 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">
          Get exclusive deals & travel inspiration
        </h2>
        <p className="mt-4 text-white/75">
          Join 60,000+ subscribers. Early-bird discounts, new itineraries and insider tips — once a
          week, never spam.
        </p>
        {done ? (
          <p className="mt-8 inline-block rounded-full bg-white/10 px-6 py-3 font-medium text-sand-300 backdrop-blur">
            ✓ You're on the list — welcome aboard!
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:rounded-full sm:bg-white sm:p-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 rounded-full bg-white px-6 py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="rounded-full bg-ocean-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-ocean-700"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
