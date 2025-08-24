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
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1400&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1464798429116-8e26f96b2e9c?q=80&w=1400&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
  },
];

const FILTERS = ["All", "City", "Beach", "Adventure"];

// small star row
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
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    if (active === "All") return PACKAGES;
    return PACKAGES.filter((p) => p.type === active);
  }, [active]);

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

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => { setActive(f); setVisible(6); }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition
                ${active === f
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, visible).map((p) => (
            <article key={p.id} className="group rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              {/* image */}
              <Link to={`/packages/${p.id}`} className="block relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* badge */}
                <span className="absolute top-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow">
                  {p.type}
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
