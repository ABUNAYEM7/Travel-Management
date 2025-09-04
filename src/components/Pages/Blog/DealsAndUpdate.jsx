import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const ITEMS = [
  // --- Deals ---
  {
    id: "deal-paris-spring",
    type: "Deal",
    title: "Paris Spring Escape – 15% OFF",
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop",
    desc: "4 nights in central Paris with breakfast and Seine cruise.",
    badge: "-15%",
    expires: "2025-04-30",
    cta: { text: "View Package", to: "/packages?city=Paris" },
  },
  {
    id: "deal-amalfi-sun",
    type: "Deal",
    title: "Amalfi Coast Summer – Save $200",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1400&auto=format&fit=crop",
    desc: "6 days on the coast with cliffside hotel & transfers.",
    badge: "SAVE $200",
    expires: "2025-06-15",
    cta: { text: "View Package", to: "/packages?country=Italy" },
  },
  {
    id: "deal-swiss-hike",
    type: "Deal",
    title: "Swiss Alps Trek – 10% OFF",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop",
    desc: "Guided 7‑day trek with mountain huts and rail pass.",
    badge: "-10%",
    expires: "2025-09-01",
    cta: { text: "View Package", to: "/packages?type=Adventure" },
  },

  // --- News ---
  {
    id: "news-rail-pass",
    type: "News",
    title: "Eurail announces flexible summer pass",
    date: "2025-03-02",
    desc: "Extra travel days and upgraded seat reservations across major lines.",
  },
  {
    id: "news-venice-fee",
    type: "News",
    title: "Venice introduces peak‑day entry fee",
    date: "2025-02-18",
    desc: "Applies to day‑trippers on select weekends—book in advance to avoid fines.",
  },

  // --- Tips ---
  {
    id: "tip-handluggage",
    type: "Tip",
    title: "Hand‑luggage packing list for Europe",
    date: "2025-01-28",
    desc: "From universal adapters to smart layers—travel light, stress less.",
  },
  {
    id: "tip-shoulderseason",
    type: "Tip",
    title: "Why shoulder season is the sweet spot",
    date: "2025-01-10",
    desc: "Better prices, softer crowds, and mellow weather across top cities.",
  },
];

const TABS = ["All", "Deal", "News", "Tip"];

const DealsAndUpdate = () => {
  const [tab, setTab] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const now = new Date();
    return ITEMS.filter((it) => {
      if (tab !== "All" && it.type !== tab) return false;
      if (q.trim()) {
        const s = `${it.title} ${it.desc || ""}`.toLowerCase();
        if (!s.includes(q.toLowerCase())) return false;
      }
      // hide expired deals
      if (it.type === "Deal" && it.expires) {
        const exp = new Date(it.expires);
        if (exp < now) return false;
      }
      return true;
    });
  }, [tab, q]);

  const deals = filtered.filter((i) => i.type === "Deal");
  const newsAndTips = filtered.filter((i) => i.type !== "Deal");

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center">
          <span className="inline-block bg-yellow-500 text-[12px] tracking-[0.2em] font-semibold text-black px-3 py-1 rounded-sm">
            DEALS & UPDATES
          </span>
          <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Fresh Europe Deals, Travel News & Tips
          </h1>
          <p className="mt-3 text-gray-500 max-w-3xl mx-auto">
            Limited‑time offers plus bite‑size updates to plan smarter and save more.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-600">Search</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder='Try "Paris", "rail", or "packing"'
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
          <div className="flex items-end gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  tab === t
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Deals Grid */}
        {deals.length > 0 && (
          <>
            <div className="mt-10 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">Limited‑time deals</h2>
              <Link to="/packages" className="text-sm text-yellow-600 hover:underline">
                See all packages →
              </Link>
            </div>

            <div className="mt-6 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
              {deals.map((d) => (
                <article
                  key={d.id}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
                >
                  <div className="relative">
                    <img
                      src={d.img}
                      alt={d.title}
                      className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {d.badge && (
                      <span className="absolute top-3 left-3 rounded-md bg-yellow-500 px-2.5 py-1 text-xs font-bold text-black shadow">
                        {d.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-gray-900">{d.title}</h3>
                    <p className="mt-2 text-gray-600 text-[15px] leading-7">{d.desc}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs text-gray-500">
                        Expires{" "}
                        <span className="font-semibold">
                          {new Date(d.expires).toLocaleDateString()}
                        </span>
                      </p>
                      <Link
                        to={d.cta.to}
                        state={{ subject: `Deal Inquiry: ${d.title}` }}
                        className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400 transition"
                      >
                        {d.cta.text}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Updates timeline (News & Tips) */}
        {newsAndTips.length > 0 && (
          <>
            <h2 className="mt-14 text-xl sm:text-2xl font-extrabold text-gray-900">
              Travel news & quick tips
            </h2>

            <ol className="mt-6 relative border-l border-gray-200 pl-6 space-y-8">
              {newsAndTips
                .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
                .map((n) => (
                  <li key={n.id} className="relative">
                    <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-yellow-500 ring-4 ring-white" />
                    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded ${
                            n.type === "News"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {n.type}
                        </span>
                        {n.date && (
                          <time className="text-xs text-gray-500">
                            {new Date(n.date).toLocaleDateString()}
                          </time>
                        )}
                      </div>
                      <h3 className="mt-2 text-lg font-extrabold text-gray-900">{n.title}</h3>
                      <p className="mt-1 text-gray-600 text-[15px] leading-7">{n.desc}</p>
                    </div>
                  </li>
                ))}
            </ol>
          </>
        )}

        {/* Newsletter / CTA */}
        <div className="mt-16 rounded-2xl bg-gray-900 p-8 sm:p-10 lg:p-12 grid gap-6 sm:grid-cols-3">
          <div className="sm:col-span-2 text-white">
            <h3 className="text-2xl font-extrabold">Get deals before they’re public</h3>
            <p className="mt-1 text-white/70">
              Join our list for flash sales, mistake fares, and city‑by‑city travel alerts.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // hook up to EmailJS or your backend if you want
              alert("Thanks! You’re on the list.");
            }}
            className="flex flex-col sm:flex-row gap-3 items-stretch"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DealsAndUpdate;
