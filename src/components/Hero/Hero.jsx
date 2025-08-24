import { useState } from "react";

export default function Hero() {
  const [tab, setTab] = useState("flights");

  const tabs = [
    { id: "flights", label: "FLIGHTS" },
    { id: "hotels", label: "HOTELS" },
    { id: "holidays", label: "HOLIDAYS" },
  ];

  return (
    <section className="relative min-h-[78vh] bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16">
        {/* frosted bar behind navbar look-alike (optional) */}
        {/* <div className="absolute -top-8 left-0 h-14 w-[92%] rounded-xl bg-white/10 backdrop-blur-md border border-white/10" /> */}

        {/* Tag */}
        <span className="inline-block bg-yellow-500 text-[12px] tracking-[0.2em] font-semibold text-black px-3 py-1 rounded-sm">
          AWAY FROM MONOTONOUS LIFE
        </span>

        {/* Title */}
        <h1 className="mt-6 text-white font-extrabold leading-[0.95] tracking-tight
                       text-5xl sm:text-6xl md:text-7xl">
          MAGICAL TRAVEL
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-white/90 text-[15px] leading-7">
          If you are looking at blank cassettes on the web, you may be very confused at
          the difference in price. You may see some for as low as $.17 each.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <button
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold
                       px-7 py-3 rounded-sm shadow-sm transition"
          >
            GET STARTED
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex gap-2">
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={[
                  "px-6 py-3 text-sm font-semibold tracking-wide rounded-sm",
                  "border border-white/15 backdrop-blur-md",
                  active
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/90 hover:bg-white/15",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Tab content placeholder */}
        <div className="mt-5 text-white/90">
          {tab === "flights" && <div>Search flights UI goes here…</div>}
          {tab === "hotels" && <div>Search hotels UI goes here…</div>}
          {tab === "holidays" && <div>Holiday packages UI goes here…</div>}
        </div>
      </div>
    </section>
  );
}
