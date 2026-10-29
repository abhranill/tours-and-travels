import { Compass } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

const Facebook = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.4V14h2.8v8h3.3z" />
  </svg>
);
const Instagram = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);
const Twitter = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.6L4.5 21h-3l7.5-8.6L1.2 3h6.5l4.5 6 5.3-6zm-1.1 16.2h1.7L7 4.7H5.2l11.2 14.5z" />
  </svg>
);
const Youtube = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23 7.2a2.9 2.9 0 0 0-2-2C19.2 4.7 12 4.7 12 4.7s-7.2 0-9 .5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 .5 12a30 30 0 0 0 .5 4.8 2.9 2.9 0 0 0 2 2c1.8.5 9 .5 9 .5s7.2 0 9-.5a2.9 2.9 0 0 0 2-2 30 30 0 0 0 .5-4.8 30 30 0 0 0-.5-4.8zM9.7 15.1V8.9l6 3.1-6 3.1z" />
  </svg>
);

const cols = [
  {
    title: "Company",
    links: ["About us", "Our team", "Careers", "Press", "Sustainability"],
  },
  {
    title: "Travel",
    links: ["Destinations", "Tour packages", "Group travel", "Honeymoons", "Gift cards"],
  },
  {
    title: "Support",
    links: ["Help centre", "Booking terms", "Travel insurance", "Visa guidance", "Privacy policy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-600 text-white">
                <Compass className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl font-semibold text-white">Horizon</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-sand-300">
                  Tours & Travel
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              An award‑winning, fully licensed tour operator crafting unforgettable journeys since
              2007. Wherever you dream of going, we'll take you there — beautifully.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-sand-300 hover:bg-sand-400 hover:text-ocean-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm transition hover:text-sand-300">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Horizon Tours & Travel Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="rounded border border-white/15 px-2 py-1 font-semibold tracking-wider">IATA</span>
            <span className="rounded border border-white/15 px-2 py-1 font-semibold tracking-wider">ATOL 10482</span>
            <span className="rounded border border-white/15 px-2 py-1 font-semibold tracking-wider">ASTA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
