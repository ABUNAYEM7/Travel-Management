import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const PACKAGES = [
  {
    id: "paris-city-break",
    title: "Paris City Break",
    country: "France",
    days: 4,
    rating: 4.8,
    reviews: 231,
    price: 799,
    type: "City",
    category: "Couple",
    img: "https://i.ibb.co.com/JjmKkwwN/pexels-michael-pointner-134459625-30187613.jpg",
  },
  {
    id: "amalfi-coast-sun",
    title: "Amalfi Coast Sun",
    country: "Italy",
    days: 6,
    rating: 4.7,
    reviews: 188,
    price: 1190,
    type: "Beach",
    category: "Family",
    img: "https://i.ibb.co.com/N2ck0Z9N/pexels-mikegiugliano-3009069.jpg",
  },
  {
    id: "swiss-alps-trek",
    title: "Swiss Alps Trek",
    country: "Switzerland",
    days: 7,
    rating: 4.9,
    reviews: 142,
    price: 1390,
    type: "Adventure",
    category: "Group",
    img: "https://i.ibb.co.com/y2krZrd/pexels-pameilama-10799234.jpg",
  },
  {
    id: "barcelona-culture",
    title: "Barcelona Culture",
    country: "Spain",
    days: 5,
    rating: 4.6,
    reviews: 201,
    price: 920,
    type: "City",
    category: "Single",
    img: "https://i.ibb.co.com/kV5cnRJD/pexels-orlovamaria-4969900.jpg",
  },
  {
    id: "santorini-romance",
    title: "Santorini Romance",
    country: "Greece",
    days: 5,
    rating: 4.8,
    reviews: 167,
    price: 1290,
    type: "Beach",
    category: "Couple",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "dolomites-escape",
    title: "Dolomites Escape",
    country: "Italy",
    days: 6,
    rating: 4.7,
    reviews: 96,
    price: 1150,
    type: "Adventure",
    category: "Group",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
  },

  // --- NEW EUROPE PACKAGES ---
  {
    id: "budapest-danube",
    title: "Budapest & Danube Cruise",
    country: "Hungary",
    days: 5,
    rating: 4.7,
    reviews: 123,
    price: 890,
    type: "City",
    category: "Couple",
    img: "https://i.ibb.co.com/bjjP3KX8/pexels-pixabay-326840.jpg",
  },
  {
    id: "vienna-classical",
    title: "Vienna Classical Tour",
    country: "Austria",
    days: 4,
    rating: 4.6,
    reviews: 98,
    price: 870,
    type: "City",
    category: "Family",
    img: "https://i.ibb.co.com/tMV9yNGP/pexels-icarus-12341465.jpg",
  },
  {
    id: "prague-fairytale",
    title: "Prague Fairytale Escape",
    country: "Czech Republic",
    days: 4,
    rating: 4.8,
    reviews: 210,
    price: 860,
    type: "City",
    category: "Couple",
    img: "https://i.ibb.co.com/YB9c5SZq/pexels-mehmet-altintas-392989477-18601099.jpg",
  },
  {
    id: "croatia-coastline",
    title: "Croatia Adriatic Coastline",
    country: "Croatia",
    days: 7,
    rating: 4.9,
    reviews: 178,
    price: 1420,
    type: "Beach",
    category: "Group",
    img: "https://i.ibb.co.com/HpPtnk1n/pexels-ramonkaphotography-33677034.jpg",
  },
  {
    id: "amsterdam-canals",
    title: "Amsterdam Canals & Culture",
    country: "Netherlands",
    days: 5,
    rating: 4.7,
    reviews: 134,
    price: 980,
    type: "City",
    category: "Single",
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "iceland-northernlights",
    title: "Iceland Northern Lights",
    country: "Iceland",
    days: 6,
    rating: 4.9,
    reviews: 245,
    price: 1690,
    type: "Adventure",
    category: "Group",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "norway-fjords",
    title: "Norway Fjords Cruise",
    country: "Norway",
    days: 8,
    rating: 4.8,
    reviews: 188,
    price: 1750,
    type: "Adventure",
    category: "Couple",
    img: "https://i.ibb.co.com/N2wrdJfy/pexels-jonathanborba-33647418.jpg",
  },
  {
    id: "lisbon-seaside",
    title: "Lisbon Seaside Retreat",
    country: "Portugal",
    days: 5,
    rating: 4.7,
    reviews: 112,
    price: 920,
    type: "Beach",
    category: "Family",
    img: "https://i.ibb.co.com/q3t9G7QK/pexels-jackie-jabson-4621053-5894703.jpg",
  },
  {
    id: "berlin-history",
    title: "Berlin History & Nightlife",
    country: "Germany",
    days: 5,
    rating: 4.6,
    reviews: 145,
    price: 930,
    type: "City",
    category: "Single",
    img: "https://images.unsplash.com/photo-1472393365320-db77a5abbecc?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "edinburgh-castles",
    title: "Edinburgh Castles & Highlands",
    country: "Scotland (UK)",
    days: 6,
    rating: 4.8,
    reviews: 167,
    price: 1180,
    type: "Adventure",
    category: "Group",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
  },
];


const FILTERS = ["All", "City", "Beach", "Adventure"];
const TRAVELER_CATEGORIES = ["All", "Single", "Couple", "Family", "Group"];

/* Stars (with halves) */
const Stars = ({ value = 0 }) => {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  const S = ({ className = "" }) => (
    <svg viewBox="0 0 20 20" className={`w-4 h-4 ${className}`} fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z"/>
    </svg>
  );

  return (
    <div className="flex items-center gap-1">
      {[...Array(full)].map((_, i) => <S key={`f-${i}`} className="text-yellow-400" />)}
      {half && (
        <div className="relative">
          <S className="text-gray-300" />
          <div className="absolute inset-0 w-1/2 overflow-hidden">
            <S className="text-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(empty)].map((_, i) => <S key={`e-${i}`} className="text-gray-300" />)}
    </div>
  );
};

const Packages = () => {
  const [activeType, setActiveType] = useState("All");
  const [activeTraveler, setActiveTraveler] = useState("All"); // 👈 NEW
  const [visible, setVisible] = useState(6);
  const [country, setCountry] = useState("All Countries");

  // Build country list from data
  const countries = useMemo(() => {
    const set = new Set(PACKAGES.map(p => p.country));
    return ["All Countries", ...Array.from(set).sort()];
  }, []);

  // Filter by country, then type, then traveler category
  const filtered = useMemo(() => {
    let list = PACKAGES;
    if (country !== "All Countries") list = list.filter(p => p.country === country);
    if (activeType !== "All") list = list.filter(p => p.type === activeType);
    if (activeTraveler !== "All") list = list.filter(p => p.category === activeTraveler);
    return list;
  }, [country, activeType, activeTraveler]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
    setVisible(6);
  };

  const onChangeType = (t) => {
    setActiveType(t);
    setVisible(6);
  };

  const onChangeTraveler = (t) => {
    setActiveTraveler(t);
    setVisible(6);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Handpicked Packages
          </h1>
          <p className="mt-3 text-gray-500 max-w-3xl mx-auto">
            From city breaks to coastal escapes and alpine adventures—find a trip that fits your vibe.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col gap-4">
          {/* Top row: Country dropdown */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="w-full sm:w-72">
              <label className="block text-xs font-semibold text-gray-600">Country</label>
              <select
                value={country}
                onChange={onChangeCountry}
                className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Type chips (City/Beach/Adventure/All) */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => onChangeType(f)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition
                    ${activeType === f
                      ? "bg-gray-900 text-white"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Second row: Traveler category chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {TRAVELER_CATEGORIES.map((t) => (
              <button
                key={t}
                onClick={() => onChangeTraveler(t)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition
                  ${activeTraveler === t
                    ? "bg-yellow-500 text-black"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`}
                title="Filter by traveler type"
              >
                {t === "Single" ? "Single Tour" :
                 t === "Couple" ? "Couple" :
                 t === "Family" ? "Family" :
                 t === "Group" ? "Group Tour" : "All Travelers"}
              </button>
            ))}
          </div>
        </div>

        {/* Results info */}
        <div className="mt-4 text-center sm:text-left text-sm text-gray-500">
          Showing {Math.min(visible, filtered.length)} of {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          {country !== "All Countries" ? ` in ${country}` : ""}
          {activeType !== "All" ? ` · ${activeType}` : ""}
          {activeTraveler !== "All" ? ` · ${activeTraveler}` : ""}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
            No packages found. Try a different country, type, or traveler category.
          </div>
        ) : (
          <div className="mt-6 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, visible).map((p) => (
              <article key={p.id} className="group rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                {/* image */}
                <Link to={`/packages/${p.id}`} className="block relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* type badge */}
                  <span className="absolute top-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow">
                    {p.type}
                  </span>
                  {/* traveler badge */}
                  <span className="absolute top-3 right-3 rounded-md bg-yellow-500/95 px-2.5 py-1 text-xs font-semibold text-black shadow">
                    {p.category === "Single" ? "Single Tour" :
                     p.category === "Couple" ? "Couple" :
                     p.category === "Family" ? "Family" : "Group Tour"}
                  </span>
                </Link>

                {/* content */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{p.country} · {p.days} days</p>
                    <div className="flex items-center gap-2">
                      <Stars value={p.rating} />
                      <span className="text-sm text-gray-500">({p.reviews})</span>
                    </div>
                  </div>

                  <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                    <Link to={`/packages/${p.id}`} className="hover:underline">
                      {p.title}
                    </Link>
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">From</p>
                      <p className="text-2xl font-extrabold text-gray-900">${p.price}</p>
                    </div>
                    <Link
                      to={`/packages/${p.id}`}
                      className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load more */}
        {filtered.length > visible && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisible((v) => v + 3)}
              className="rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
              Load more
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gray-900 p-8 sm:p-10 lg:p-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-white">
            <h4 className="text-2xl font-extrabold">Didn’t find the perfect plan?</h4>
            <p className="mt-1 text-white/70">Tell us your dates and wishlist—we’ll craft a custom itinerary in 24h.</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition"
            >
              Request Custom Price
            </Link>
            <Link
              to="/about"
              className="rounded-md border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Why choose us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
