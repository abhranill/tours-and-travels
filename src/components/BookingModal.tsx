import { useEffect, useState } from "react";
import { CheckCircle2, Clock, MapPin, Star, X } from "lucide-react";
import { tours, type Tour } from "../data/content";

interface Props {
  open: boolean;
  tour: Tour | null;
  onClose: () => void;
}

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-ocean-500 focus:ring-4 focus:ring-ocean-500/10";

export default function BookingModal({ open, tour, onClose }: Props) {
  const [selectedId, setSelectedId] = useState<string>(tour?.id ?? tours[0].id);
  const [guests, setGuests] = useState(2);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setSelectedId(tour?.id ?? tours[0].id);
      setDone(false);
      setGuests(2);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, tour]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const selected = tours.find((t) => t.id === selectedId) ?? tours[0];
  const total = selected.price * guests;
  const deposit = Math.round(total * 0.2);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ocean-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[95vh] w-full max-w-4xl grid-cols-1 overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl md:grid-cols-[1fr_1.2fr]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Summary */}
        <div className="relative hidden md:block">
          <img src={selected.image} alt={selected.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/95 via-ocean-950/40 to-ocean-950/20" />
          <div className="relative flex h-full flex-col justify-end p-8 text-white">
            <span className="w-fit rounded-full bg-sand-400 px-3 py-1 text-xs font-semibold text-ocean-950">
              {selected.category}
            </span>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">{selected.title}</h3>
            <div className="mt-3 space-y-1.5 text-sm text-white/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sand-300" /> {selected.location}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-sand-300" /> {selected.days} days · {selected.groupSize}
              </p>
              <p className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-sand-300 text-sand-300" /> {selected.rating.toFixed(1)} (
                {selected.reviews} reviews)
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <div className="flex justify-between text-sm">
                <span className="text-white/75">
                  ${selected.price.toLocaleString()} × {guests}
                </span>
                <span>${total.toLocaleString()}</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-white/15 pt-2 text-sm">
                <span className="text-white/75">Deposit due today (20%)</span>
                <span className="font-semibold text-sand-300">${deposit.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {done ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-16 w-16 text-ocean-500" />
              <h3 className="mt-5 font-display text-3xl font-semibold text-ocean-950">
                Booking request received!
              </h3>
              <p className="mt-3 max-w-sm text-slate-600">
                We've reserved your spot on <strong>{selected.title}</strong> for {guests}{" "}
                {guests === 1 ? "traveller" : "travellers"}. A specialist will confirm availability
                and send payment details within a few hours.
              </p>
              <button
                onClick={onClose}
                className="mt-8 rounded-full bg-ocean-600 px-7 py-3 text-sm font-semibold text-white hover:bg-ocean-700"
              >
                Done
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="space-y-4"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600">
                  Reserve your trip
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold text-ocean-950">
                  Book {selected.title}
                </h3>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Tour package
                </span>
                <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} className={inputCls}>
                  {tours.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title} — ${t.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Departure date
                  </span>
                  <input type="date" required className={inputCls} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Travellers
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={16}
                    value={guests}
                    onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
                    className={inputCls}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Full name
                  </span>
                  <input required placeholder="Jane Doe" className={inputCls} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </span>
                  <input required type="email" placeholder="jane@example.com" className={inputCls} />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </span>
                <input type="tel" placeholder="+1 555 000 0000" className={inputCls} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Special requests
                </span>
                <textarea rows={2} placeholder="Dietary needs, room preferences, celebrations…" className={inputCls} />
              </label>

              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 md:hidden">
                <span className="text-sm text-slate-600">Total ({guests} travellers)</span>
                <span className="font-display text-xl font-semibold text-ocean-950">
                  ${total.toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-sand-400 py-4 text-sm font-semibold text-ocean-950 shadow-lg shadow-sand-400/30 transition hover:bg-sand-300"
              >
                Confirm Booking Request
              </button>
              <p className="text-center text-xs text-slate-500">
                No payment taken now. Free cancellation up to 30 days before departure.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
