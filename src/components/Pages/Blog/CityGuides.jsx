import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const CITIES = [
  {
    id: "paris-fr",
    name: "Paris",
    country: "France",
    region: "Western Europe",
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop",
    tags: ["Museums", "Cafés", "Iconic"],
    blurb:
      "Art, fashion, and croissants—wander the Seine and the grand boulevards.",
    guides: 12,
  },
  {
    id: "barcelona-es",
    name: "Barcelona",
    country: "Spain",
    region: "Southern Europe",
    img: "https://images.unsplash.com/photo-1464798429116-8e26f96b2e9c?q=80&w=1400&auto=format&fit=crop",
    tags: ["Gaudí", "Beaches", "Tapas"],
    blurb:
      "Modernism meets Mediterranean—sunny beaches, tapas bars, and Gaudí gems.",
    guides: 9,
  },
  {
    id: "rome-it",
    name: "Rome",
    country: "Italy",
    region: "Southern Europe",
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1400&auto=format&fit=crop",
    tags: ["Ancient", "Cuisine", "Piazzas"],
    blurb:
      "Eternal City vibes—colossal ruins, espresso shots, and twilight strolls.",
    guides: 11,
  },
  {
    id: "amsterdam-nl",
    name: "Amsterdam",
    country: "Netherlands",
    region: "Western Europe",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1400&auto=format&fit=crop",
    tags: ["Canals", "Bikes", "Art"],
    blurb:
      "Cycle along canals, browse world‑class museums, and sip on cozy terraces.",
    guides: 7,
  },
  {
    id: "prague-cz",
    name: "Prague",
    country: "Czechia",
    region: "Central Europe",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    tags: ["Castles", "Bridges", "Beer"],
    blurb:
      "Storybook lanes and Gothic spires—Old Town charm on every corner.",
    guides: 8,
  },
  {
    id: "athens-gr",
    name: "Athens",
    country: "Greece",
    region: "Southern Europe",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop",
    tags: ["History", "Views", "Tavernas"],
    blurb:
      "Birthplace of drama & democracy—sunny hillsides and island day trips.",
    guides: 6,
  },
];

const REGIONS = ["All", "Western Europe", "Central Europe", "Southern Europe"];

const CityGuides = () => {
  const [region, setRegion] = useState("All");
  const [query, setQuery] = useState("");
  const [onlyBeachy, setOnlyBeachy] = useState(false); // silly quick filter demo

  const filtered = useMemo(() => {
    let list = [...CITIES];

    if (region !== "All") {
      list = list.filter((c) => c.region === region);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.country.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (onlyBeachy) {
      // crude demo filter (matches by tag)
      list = list.filter((c) => c.tags.some((t) => /beach|island|coast/i.test(t)));
    }

    return list;
  }, [region, query, onlyBeachy]);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header / Hero */}
        <div className="text-center">
          <span className="inline-block bg-yellow-500 text-[12px] tracking-[0.2em] font-semibold text-black px-3 py-1 rounded-sm">
            CITY PLAYBOOKS
          </span>
          <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            City Guides for Effortless Trips
          </h1>
          <p className="mt-3 text-gray-500 max-w-3xl mx-auto">
            Bite‑size itineraries, must‑eat spots, and neighborhood cheat sheets—curated by travelers.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {/* search */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-600">Search city, country, or tag</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Try "Paris", "Greece", or "Beaches"'
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* quick filter */}
          <div className="flex items-end gap-3">
            <label className="label cursor-pointer w-full justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                checked={onlyBeachy}
                onChange={(e) => setOnlyBeachy(e.target.checked)}
              />
              <span className="label-text text-sm">Show beachy picks</span>
            </label>
          </div>
        </div>

        {/* Region Tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {REGIONS.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={`btn btn-sm rounded-full ${
                region === r
                  ? "btn-neutral text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mt-4 text-center text-sm text-gray-500">
          {filtered.length} {filtered.length === 1 ? "city" : "cities"} found
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <article
              key={c.id}
              className="card bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden group"
            >
              <figure className="relative">
                <img
                  src={c.img}
                  alt={`${c.name}, ${c.country}`}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge badge-warning text-black font-semibold">{c.region}</span>
                </div>
              </figure>

              <div className="card-body p-5">
                <div className="flex items-center justify-between">
                  <h3 className="card-title text-xl font-extrabold text-gray-900">{c.name}</h3>
                  <span className="text-xs text-gray-500">{c.country}</span>
                </div>

                <p className="mt-1 text-gray-600 text-[15px] leading-7">{c.blurb}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="badge bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{c.guides} mini‑guides</span>
                  <div className="card-actions">
                    <Link
                      to={`/packages?city=${encodeURIComponent(c.name)}`}
                      className="btn btn-sm bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                    >
                      View Packages
                    </Link>
                    <Link
                      to={`/hotels?city=${encodeURIComponent(c.name)}`}
                      className="btn btn-sm btn-outline"
                    >
                      Hotels
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gray-900 p-8 sm:p-10 lg:p-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-white">
            <h4 className="text-2xl font-extrabold">Can’t find your city?</h4>
            <p className="mt-1 text-white/70">
              Tell us where you’re heading—we’ll whip up a custom guide in 24 hours.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/contact?subject=Custom%20City%20Guide"
              className="btn bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
            >
              Request a Guide
            </Link>
            <Link
              to="/packages"
              className="btn btn-outline text-white border-white/30 hover:bg-white/10"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityGuides;
