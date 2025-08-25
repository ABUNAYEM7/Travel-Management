// Hero.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero({ overlay = true }) {
  const [tab, setTab] = useState("flights");

  const tabs = [
    { id: "flights", label: "FLIGHTS", to: "/packages?type=City" },
    { id: "hotels", label: "HOTELS", to: "/hotels" },
    { id: "holidays", label: "HOLIDAYS", to: "/packages?type=Beach" },
  ];
  return (
    <section className="relative">
      {/* remove this overlay when parent already provides one */}
      {overlay && <div className="absolute inset-0 bg-black/45" />}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16">
        <span className="inline-block bg-yellow-500 text-[12px] tracking-[0.2em] font-semibold text-black px-3 py-1 rounded-sm">
          AWAY FROM MONOTONOUS LIFE
        </span>

        <h1 className="mt-6 text-white font-extrabold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl">
          MAGICAL TRAVEL
        </h1>

        <p className="mt-6 max-w-2xl text-white/90 text-[15px] leading-7">
          If you are looking at blank cassettes on the web, you may be very confused at
          the difference in price. You may see some for as low as $.17 each.
        </p>

        <div className="mt-8">
          <Link
          to={'/packages'}
           className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-7 py-3 rounded-sm shadow-sm transition">
            GET STARTED
          </Link>
        </div>

        <div className="mt-10 flex gap-2">
           {tabs.map((t) => (
            <Link
              key={t.id}
              to={t.to}
              className="px-6 py-3 text-sm font-semibold tracking-wide rounded-sm border border-white/15 backdrop-blur-md bg-white/10 text-white/90 hover:bg-white hover:text-black transition"
            >
              {t.label}
            </Link>
          ))}
        </div>

        <div className="mt-5 text-white/90">
          {tab === "flights" && <div>Search flights UI goes here…</div>}
          {tab === "hotels" && <div>Search hotels UI goes here…</div>}
          {tab === "holidays" && <div>Holiday packages UI goes here…</div>}
        </div>
      </div>
    </section>
  );
}
