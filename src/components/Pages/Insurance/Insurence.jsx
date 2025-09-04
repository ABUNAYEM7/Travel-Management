import React, { useState } from "react";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    title: "Medical & Emergency",
    desc: "Hospitalization, prescriptions, emergency dental, and 24/7 assistance anywhere in Europe.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M19 3H5a2 2 0 00-2 2v14l4-3h12a2 2 0 002-2V5a2 2 0 00-2-2zm-5 9h-2v2H10v-2H8V10h2V8h2v2h2v2z" />
      </svg>
    ),
  },
  {
    title: "Trip Cancellation",
    desc: "Get reimbursed for prepaid, non‑refundable costs if plans change due to covered reasons.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2l7 4v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4zm-1 6v3H8v2h3v3h2v-3h3v-2h-3V8h-2z" />
      </svg>
    ),
  },
  {
    title: "Baggage Protection",
    desc: "Covers lost, stolen, or delayed baggage so your essentials are always within reach.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M9 6V4a3 3 0 016 0v2h3a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h3zm2 0h2V4a1 1 0 10-2 0v2z" />
      </svg>
    ),
  },
  {
    title: "Adventure Add‑ons",
    desc: "Optional coverage for hiking, skiing, scuba, and other activities across Europe.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2l4 7H8l4-7zm0 20l-4-7h8l-4 7zM2 12l7-4v8l-7-4zm20 0l-7 4V8l7 4z" />
      </svg>
    ),
  },
];

const PLANS = [
  {
    name: "Standard",
    price: 39,
    period: "/trip",
    badge: "Great for short city breaks",
    features: [
      "Up to $50k medical",
      "Trip delay up to $300",
      "Baggage loss up to $800",
      "24/7 assistance hotline",
    ],
  },
  {
    name: "Plus",
    price: 69,
    period: "/trip",
    badge: "Best value for most travelers",
    highlight: true,
    features: [
      "Up to $150k medical",
      "Trip cancellation up to $3,000",
      "Baggage loss up to $1,500",
      "Missed connections coverage",
    ],
  },
  {
    name: "Premium",
    price: 119,
    period: "/trip",
    badge: "Long journeys & families",
    features: [
      "Up to $500k medical",
      "Cancel for any covered reason",
      "Gadget & sports add‑on",
      "Priority claims handling",
    ],
  },
];

const faqs = [
  {
    q: "Do I need travel insurance for Europe?",
    a: "It’s highly recommended. Many countries require proof of coverage for visas, and private medical care can be expensive. Our plans meet or exceed Schengen requirements.",
  },
  {
    q: "What counts as a ‘covered reason’ to cancel?",
    a: "Examples include sudden illness or injury, severe weather, airline strikes, or jury duty. Exact terms vary by plan—check the policy wording for details.",
  },
  {
    q: "When should I purchase insurance?",
    a: "For full benefits (like cancellation cover), buy as soon as you book your trip. You can still purchase later for medical and baggage coverage.",
  },
  {
    q: "Are adventure sports covered?",
    a: "Standard policies exclude high‑risk activities, but our Adventure add‑ons cover hiking, skiing, scuba, and more. Select the add‑on during checkout.",
  },
];

const Accordion = ({ items }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-100 bg-white shadow-sm">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-gray-900">{item.q}</span>
              <svg
                viewBox="0 0 20 20"
                className={`h-5 w-5 text-gray-500 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.13l3.71-3.9a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-gray-600 leading-7 text-[15px]">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Insurance = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            alt="Travel insurance in Europe"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl text-white">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
              Travel Insurance
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold leading-tight">
              Peace of mind for every mile.
            </h1>
            <p className="mt-6 text-white/90 text-lg leading-8">
              Flexible plans that protect your trip, your health, and your gear—so you can
              focus on the experience.
            </p>
            <div className="mt-10 flex gap-4">
              <a
                href="#plans"
                className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400 transition shadow-lg"
              >
                Compare Plans
              </a>
              <a
                href="#faq"
                className="rounded-xl border border-white/60 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            What’s included
          </h2>
          <p className="mt-4 text-gray-500 text-center max-w-3xl mx-auto text-lg">
            Cover the essentials—and the unexpected. Add optional extras for adventure sports
            and gadgets.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700">
                  {f.icon}
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-600 leading-7 text-[15px]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Choose a plan
            </h2>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-lg">
              Transparent pricing. Cancel anytime before departure for a full refund.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border ${
                  p.highlight ? "border-yellow-300 ring-2 ring-yellow-200" : "border-gray-100"
                } bg-white p-8 shadow-md hover:shadow-lg transition`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">{p.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{p.badge}</p>
                  </div>
                  {p.highlight && (
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-gray-900">${p.price}</span>
                  <span className="text-gray-500 text-lg">{p.period}</span>
                </div>

                <ul className="mt-6 space-y-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-gray-700 text-[15px]">
                      <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-yellow-500 text-white text-[12px] font-bold flex items-center justify-center">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className={`inline-flex w-full items-center justify-center rounded-xl px-6 py-3 font-semibold transition shadow-md ${
                      p.highlight
                        ? "bg-yellow-500 text-black hover:bg-yellow-400"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Get Covered
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Coverage limits and terms vary by plan and destination. Read the policy wording before purchase.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-extrabold text-gray-900">Traveler Stories</h3>
          <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
            Hear from travelers who trusted us on their European adventures.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-md text-left">
                <p className="text-gray-700 italic">
                  “The insurance gave me total peace of mind. When my luggage got delayed, they handled everything.”
                </p>
                <span className="block mt-4 text-sm text-gray-500">— Alex, UK</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h3>
            <p className="mt-3 text-gray-500 text-lg">
              Quick answers about travel insurance for Europe.
            </p>
          </div>
          <div className="mt-10">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gray-800 p-10 sm:p-12 lg:p-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-white text-3xl font-extrabold">
                Not sure which plan fits your trip?
              </h4>
              <p className="mt-3 text-white/70 text-lg">
                Tell us your itinerary—we’ll recommend the best coverage in minutes.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400 transition shadow-lg"
              >
                Talk to an Expert
              </Link>
              <Link
                to="/packages"
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
              >
                See Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
