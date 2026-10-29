import { BadgeCheck, Headset, Map, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Map,
    title: "Expert Local Guides",
    text: "Our guides are born-and-raised locals, hand-selected for their knowledge, warmth and storytelling.",
  },
  {
    icon: Sparkles,
    title: "Tailor‑Made Itineraries",
    text: "Every trip is shaped around your pace, interests and budget — no cookie-cutter tours here.",
  },
  {
    icon: Wallet,
    title: "Best Price Guarantee",
    text: "Find the same itinerary cheaper elsewhere and we'll match it — plus give you $100 trip credit.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Protected",
    text: "IATA & ATOL licensed, with comprehensive travel insurance options and flexible cancellation.",
  },
  {
    icon: Headset,
    title: "24/7 Concierge",
    text: "A dedicated travel specialist is a call or WhatsApp message away — before, during and after your trip.",
  },
  {
    icon: BadgeCheck,
    title: "Award‑Winning Service",
    text: "Voted 'Best Tour Operator' three years running by the World Travel Awards.",
  },
];

const stats = [
  { value: "18+", label: "Years of experience" },
  { value: "120+", label: "Destinations worldwide" },
  { value: "48k", label: "Happy travellers" },
  { value: "4.9★", label: "Average rating" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ocean-950 py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-ocean-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sand-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              light
              eyebrow="Why Horizon"
              title={
                <>
                  Travel with people who <span className="italic text-sand-300">truly care</span>
                </>
              }
              description="Since 2007 we've been designing journeys that go beyond the guidebook. We obsess over details so you can focus on the moments."
            />
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="font-display text-4xl font-semibold text-white">{s.value}</div>
                  <div className="mt-1 text-sm text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-sand-300/40 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand-400/15 text-sand-300 transition group-hover:bg-sand-400 group-hover:text-ocean-950">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
