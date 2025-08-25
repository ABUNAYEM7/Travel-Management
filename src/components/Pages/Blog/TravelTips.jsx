import React, { useMemo, useState } from "react";

/** ---- demo data ---- */
const CATEGORIES = ["All", "Flights", "Hotels", "Packing", "Safety", "Money"];

const TIPS = [
  {
    id: "carry-on-kit",
    title: "Build a perfect carry‑on kit",
    category: "Packing",
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Liquids in a transparent 100ml bag",
      "A change of clothes + meds",
      "Universal adapter + power bank",
    ],
  },
  {
    id: "seat-pick",
    title: "Pick seats smartly",
    category: "Flights",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Aisle for freedom, window for rest",
      "Exit rows = legroom, limited recline",
      "Check SeatGuru-style maps",
    ],
  },
  {
    id: "hotel-checkin",
    title: "Smooth hotel check‑in",
    category: "Hotels",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Ask politely for quiet/high floors",
      "Photograph room condition on arrival",
      "Keep passport in room safe",
    ],
  },
  {
    id: "money-mix",
    title: "Money & cards mix",
    category: "Money",
    img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Carry two cards on separate days",
      "Use ATMs for better FX vs. kiosks",
      "Turn on bank travel alerts",
    ],
  },
  {
    id: "health-pack",
    title: "Mini health pack",
    category: "Safety",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Band‑aids, painkillers, ORS",
      "Your prescriptions + copies",
      "Hand sanitizer & wipes",
    ],
  },
  {
    id: "roll-pack",
    title: "Roll, don’t fold",
    category: "Packing",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Roll soft fabrics to save space",
      "Use packing cubes to segment",
      "Stuff socks inside shoes",
    ],
  },
  {
    id: "delay-plan",
    title: "Delay & cancellation plan",
    category: "Flights",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Know your airline’s policy",
      "Keep essentials in carry‑on",
      "Use travel insurance hotline",
    ],
  },
  {
    id: "neighborhoods",
    title: "Choose the right neighborhood",
    category: "Hotels",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Prioritize transit access first",
      "Walk the block on Street View",
      "Check late‑night safety on forums",
    ],
  },
];

/** ---- small ui bits ---- */
const Badge = ({ children }) => (
  <span className="badge badge-sm bg-yellow-100 text-yellow-700 border-none">{children}</span>
);

const TipCard = ({ tip }) => (
  <article className="card bg-white/90 border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition">
    <figure className="aspect-[16/10] overflow-hidden">
      <img src={tip.img} alt={tip.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
    </figure>
    <div className="card-body p-5">
      <div className="flex items-center justify-between">
        <h3 className="card-title text-[18px]">{tip.title}</h3>
        <Badge>{tip.category}</Badge>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-gray-600">
        {tip.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-white text-[10px]">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default function TravelTips() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = TIPS;
    if (active !== "All") list = list.filter((t) => t.category === active);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.bullets.some((b) => b.toLowerCase().includes(q))
      );
    }
    return list;
  }, [active, query]);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-yellow-500 text-[12px] tracking-[0.2em] font-semibold text-black px-3 py-1 rounded-sm">
            SMARTER TRAVEL
          </span>
          <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Practical Travel Tips & Tricks
          </h1>
          <p className="mt-3 text-gray-500">
            Pack lighter, move faster, and save money—with field‑tested advice for flights, hotels, packing, and more.
          </p>
        </header>

        {/* Search + Filters */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-600">Search tips</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try “packing cubes” or “seat”"
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600">Category</label>
            <select
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="select select-bordered w-full mt-1"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Pills (quick filters) */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition
                ${active === c ? "bg-gray-900 text-white" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Tips grid */}
        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tip) => <TipCard key={tip.id} tip={tip} />)}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-500">No tips found. Try a different keyword.</div>
          )}
        </div>

        {/* Two-column: Checklist + FAQ */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Checklist */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-gray-900">Quick Trip Checklist</h2>
            <p className="mt-2 text-gray-600">Run through these essentials before you leave.</p>
            <ul className="mt-4 space-y-3 text-[15px] text-gray-700">
              {[
                "Passport validity (6+ months), visas, travel insurance",
                "Boarding passes downloaded + airline app installed",
                "Offline maps + hotel confirmations saved",
                "International roaming / eSIM or local SIM plan",
                "Essential meds + prescriptions packed",
                "Emergency numbers & embassy address noted",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-white text-[11px]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ (DaisyUI collapse) */}
          <div className="rounded-2xl border border-gray-100 bg-white p-2 sm:p-4 shadow-sm">
            <h2 className="px-4 pt-4 text-xl font-extrabold text-gray-900">FAQ</h2>

            <div className="mt-2 space-y-2">
              <div className="collapse collapse-arrow border border-gray-100 bg-white">
                <input type="checkbox" />
                <div className="collapse-title text-[15px] font-semibold">Is travel insurance really necessary?</div>
                <div className="collapse-content text-gray-600">
                  Yes—medical coverage abroad and trip interruption protection can save thousands if plans go sideways.
                </div>
              </div>

              <div className="collapse collapse-arrow border border-gray-100 bg-white">
                <input type="checkbox" />
                <div className="collapse-title text-[15px] font-semibold">How early should I arrive at the airport?</div>
                <div className="collapse-content text-gray-600">
                  Domestic: 2 hours; International: 3 hours. Add buffer at peak times or if checking bags.
                </div>
              </div>

              <div className="collapse collapse-arrow border border-gray-100 bg-white">
                <input type="checkbox" />
                <div className="collapse-title text-[15px] font-semibold">Best way to avoid hefty roaming fees?</div>
                <div className="collapse-content text-gray-600">
                  Use an eSIM or local SIM, turn off background refresh, and download offline maps beforehand.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-16 rounded-2xl bg-gray-900 p-8 sm:p-10 lg:p-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-white">
            <h3 className="text-2xl font-extrabold">Get fresh travel hacks weekly</h3>
            <p className="mt-1 text-white/70">Short, practical tips—no spam, unsubscribe anytime.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full sm:w-auto gap-3"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="input input-bordered w-full sm:w-80 bg-white text-gray-900"
            />
            <button className="btn bg-yellow-500 hover:bg-yellow-400 text-black border-none font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
