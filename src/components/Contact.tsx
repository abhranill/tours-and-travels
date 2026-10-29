import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { tours } from "../data/content";

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-ocean-500 focus:ring-4 focus:ring-ocean-500/10";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in Touch"
              title={
                <>
                  Let's plan your <span className="italic text-ocean-600">next adventure</span>
                </>
              }
              description="Tell us where you'd like to go and we'll come back within 24 hours with a personalised itinerary and quote — no obligation."
            />

            <ul className="mt-10 space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Visit our office",
                  lines: ["128 Harbour Street, Suite 400", "San Diego, CA 92101, USA"],
                },
                {
                  icon: Phone,
                  title: "Call us",
                  lines: ["+1 (800) 555‑0199", "+1 (619) 555‑0142"],
                },
                {
                  icon: Mail,
                  title: "Email us",
                  lines: ["hello@horizontours.com", "bookings@horizontours.com"],
                },
                {
                  icon: Clock,
                  title: "Opening hours",
                  lines: ["Mon – Fri: 8:00 – 19:00", "Sat: 9:00 – 15:00 · Sun: Closed"],
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-600">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold text-ocean-950">{item.title}</div>
                    {item.lines.map((l) => (
                      <div key={l} className="text-sm text-slate-600">
                        {l}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-slate-50 p-6 ring-1 ring-slate-200/70 sm:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-ocean-500" />
                <h3 className="mt-6 font-display text-3xl font-semibold text-ocean-950">
                  Thank you! We've received your enquiry.
                </h3>
                <p className="mt-3 max-w-md text-slate-600">
                  One of our travel specialists will be in touch within 24 hours with a tailored
                  proposal.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-full border border-ocean-600 px-6 py-3 text-sm font-semibold text-ocean-700 hover:bg-ocean-600 hover:text-white"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <h3 className="font-display text-2xl font-semibold text-ocean-950">
                  Request a free quote
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full name">
                    <input required placeholder="Jane Doe" className={inputCls} />
                  </Field>
                  <Field label="Email address">
                    <input required type="email" placeholder="jane@example.com" className={inputCls} />
                  </Field>
                  <Field label="Phone">
                    <input type="tel" placeholder="+1 555 000 0000" className={inputCls} />
                  </Field>
                  <Field label="Interested tour">
                    <select className={inputCls} defaultValue="">
                      <option value="">Custom itinerary</option>
                      {tours.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Travel month">
                    <input type="month" className={inputCls} />
                  </Field>
                  <Field label="Travellers">
                    <input type="number" min={1} defaultValue={2} className={inputCls} />
                  </Field>
                </div>
                <Field label="Tell us about your dream trip">
                  <textarea
                    rows={4}
                    placeholder="Interests, must-see places, budget, special occasions…"
                    className={inputCls}
                  />
                </Field>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-ocean-600 py-4 text-sm font-semibold text-white shadow-lg shadow-ocean-600/25 transition hover:bg-ocean-700"
                >
                  <Send className="h-4 w-4" /> Send Enquiry
                </button>
                <p className="text-center text-xs text-slate-500">
                  By submitting you agree to our privacy policy. We never share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </span>
      {children}
    </label>
  );
}
