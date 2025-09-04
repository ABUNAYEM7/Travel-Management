import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

/* --- local mock data (kept here so you don't need to modify Hotels.jsx) --- */
const HOTELS = [
  {
    id: "ritz-paris",
    name: "Ritz Paris",
    city: "Paris, France",
    rating: 4.9,
    reviews: 1321,
    price: 420,
    type: "Luxury",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    amenities: ["wifi", "pool", "spa", "breakfast"],
  },
  {
    id: "amalfi-view",
    name: "Amalfi View Resort",
    city: "Amalfi, Italy",
    rating: 4.7,
    reviews: 742,
    price: 260,
    type: "Resort",
    img: "https://i.ibb.co.com/5WW0WH2X/pexels-paco-de-bydzia-279247111-12986067.jpg",
    amenities: ["wifi", "pool", "breakfast"],
  },
  {
    id: "barca-hub",
    name: "Barcelona Hub",
    city: "Barcelona, Spain",
    rating: 4.5,
    reviews: 598,
    price: 150,
    type: "Boutique",
    img: "https://i.ibb.co.com/NgQywW1f/pexels-lovetosmile-33721957.jpg",
    amenities: ["wifi", "gym"],
  },
  {
    id: "swiss-peak-lodge",
    name: "Swiss Peak Lodge",
    city: "Zermatt, Switzerland",
    rating: 4.8,
    reviews: 431,
    price: 310,
    type: "Lodge",
    img: "https://i.ibb.co.com/yFshf3Nn/pexels-adrien-olichon-1257089-18332453.jpg",
    amenities: ["wifi", "spa", "breakfast"],
  },
  {
    id: "santorini-blues",
    name: "Santorini Blues",
    city: "Oia, Greece",
    rating: 4.6,
    reviews: 711,
    price: 220,
    type: "Boutique",
    img: "https://i.ibb.co.com/HpbNK00T/pexels-atypeek-12606920.jpg",
    amenities: ["wifi", "pool", "breakfast"],
  },
  {
    id: "budapest-bridge",
    name: "Budapest Bridge Hotel",
    city: "Budapest, Hungary",
    rating: 4.4,
    reviews: 382,
    price: 120,
    type: "City",
    img: "https://images.unsplash.com/photo-1504893524553-b8553fbbdf55?q=80&w=1600&auto=format&fit=crop",
    amenities: ["wifi", "gym"],
  },
];

/* --- tiny UI helpers (same look as listing) --- */
const Stars = ({ value = 0 }) => {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  const S = ({ className = "" }) => (
    <svg viewBox="0 0 20 20" className={`w-4 h-4 ${className}`} fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z" />
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

const AmenityIcon = ({ type }) => {
  const map = {
    wifi: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7-4a11 11 0 0 0-14 0l2 2a8 8 0 0 1 10 0l2-2Zm4-4a17 17 0 0 0-22 0l2 2a14 14 0 0 1 18 0l2-2Z" />
      </svg>
    ),
    pool: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M6 22c-2 0-3-1-3-1v-2s1 1 3 1 3-1 5-1 3 1 5 1 3-1 5-1v2s-1 1-3 1-3-1-5-1-3 1-5 1-3-1-5-1Zm0-5c-2 0-3-1-3-1v-2s1 1 3 1 3-1 5-1 3 1 5 1 3-1 5-1v2s-1 1-3 1-3-1-5-1-3 1-5 1-3-1-5-1Zm7-13a3 3 0 0 1 3 3v10h-2V7a1 1 0 0 0-1-1h-2a3 3 0 0 1 3-2Z" />
      </svg>
    ),
    spa: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 2s-5 4-5 9a5 5 0 1 0 10 0c0-5-5-9-5-9Zm-8 18h16v2H4z" />
      </svg>
    ),
    breakfast: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M2 20h18v2H2zM6 2h2v12H6zM10 2h2v12h-2zM14 2h2v7a3 3 0 0 1-3 3h-1V2z" />
      </svg>
    ),
    gym: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M7 7h2v10H7zM15 7h2v10h-2zM3 10h2v4H3zM19 10h2v4h-2zM10 9h4v6h-4z" />
      </svg>
    ),
  };
  return <span className="text-gray-600">{map[type]}</span>;
};

const useClickOutside = (ref, onClose) => {
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onClose]);
};

/* ===================== */
/*      DETAILS VIEW     */
/* ===================== */
const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = useMemo(() => HOTELS.find((h) => h.id === id), [id]);

  // Dates & guests (same interaction as listing)
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [guestOpen, setGuestOpen] = useState(false);
  const guestRef = useRef(null);
  useClickOutside(guestRef, () => setGuestOpen(false));

  const nights =
    checkIn && checkOut
      ? Math.max(
          0,
          Math.ceil(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  if (!hotel) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900"
        >
          ← Back
        </button>
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
          <h1 className="text-2xl font-extrabold text-gray-900">Hotel not found</h1>
          <p className="mt-2 text-gray-600">
            We couldn’t find this property. Please return to the{" "}
            <Link to="/hotels" className="text-blue-600 hover:underline">Hotels</Link> page.
          </p>
        </div>
      </div>
    );
  }

  const total = nights * hotel.price * rooms;

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb + Back */}
        <div className="flex items-center justify-between">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/hotels" className="hover:underline">Hotels</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">{hotel.name}</span>
          </nav>
          <button
            onClick={() => navigate(-1)}
            className="text-sm font-semibold text-gray-700 hover:text-gray-900"
          >
            ← Back
          </button>
        </div>

        {/* Hero */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="relative">
            <img
              src={hotel.img}
              alt={hotel.name}
              className="w-full aspect-[16/9] object-cover"
            />
            <span className="absolute top-4 left-4 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow">
              {hotel.type}
            </span>
          </div>

          {/* Content grid */}
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-3">
            {/* Left: overview */}
            <div className="md:col-span-2">
              <p className="text-sm text-gray-500">{hotel.city}</p>
              <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-gray-900">
                {hotel.name}
              </h1>

              <div className="mt-2 flex items-center gap-2">
                <Stars value={hotel.rating} />
                <span className="text-sm text-gray-600">
                  {hotel.rating} • {hotel.reviews} reviews
                </span>
              </div>

              {/* Amenities */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-700">Amenities</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-gray-700">
                  {hotel.amenities.map((a) => (
                    <span key={a} className="inline-flex items-center gap-1 text-sm">
                      <AmenityIcon type={a} /> {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* About (placeholder) */}
              <div className="mt-6 prose prose-sm max-w-none text-gray-700">
                <p>
                  Experience {hotel.name} in {hotel.city}. Handpicked for our collection,
                  this property blends comfort, style, and location. Enjoy{" "}
                  {hotel.amenities.slice(0, 3).join(", ")}
                  {hotel.amenities.length > 3 ? ", and more" : ""}.
                </p>
              </div>
            </div>

            {/* Right: booking card */}
            <aside className="md:col-span-1">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">From</p>
                    <p className="text-2xl font-extrabold text-gray-900">
                      ${hotel.price} <span className="text-sm font-semibold text-gray-500">/ night</span>
                    </p>
                  </div>
                </div>

                {/* Dates */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || undefined}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="mt-3" ref={guestRef}>
                  <label className="block text-xs font-semibold text-gray-600">
                    Rooms and Guests
                  </label>
                  <button
                    type="button"
                    onClick={() => setGuestOpen((s) => !s)}
                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-left outline-none focus:ring-2 focus:ring-gray-900/10"
                  >
                    {rooms} {rooms === 1 ? "room" : "rooms"}, {adults}{" "}
                    {adults === 1 ? "adult" : "adults"}, {children}{" "}
                    {children === 1 ? "child" : "children"}
                  </button>

                  {guestOpen && (
                    <div className="relative">
                      <div className="absolute z-20 mt-2 w-full rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
                        {[
                          { label: "Rooms", value: rooms, set: setRooms, min: 1 },
                          { label: "Adults", value: adults, set: setAdults, min: 1 },
                          { label: "Children", value: children, set: setChildren, min: 0 },
                        ].map((row) => (
                          <div key={row.label} className="flex items-center justify-between py-2">
                            <span className="text-sm font-medium text-gray-700">{row.label}</span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => row.set(Math.max(row.min, row.value - 1))}
                                className="h-8 w-8 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                −
                              </button>
                              <span className="w-6 text-center text-sm font-semibold text-gray-900">
                                {row.value}
                              </span>
                              <button
                                onClick={() => row.set(row.value + 1)}
                                className="h-8 w-8 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        ))}
                        <div className="pt-2">
                          <button
                            onClick={() => setGuestOpen(false)}
                            className="w-full rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Summary */}
                <div className="mt-4 rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Nights</span>
                    <span>{nights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rooms</span>
                    <span>{rooms}</span>
                  </div>
                  <div className="mt-2 border-t border-gray-200 pt-2 flex justify-between font-semibold">
                    <span>Estimated total</span>
                    <span>${Number.isFinite(total) ? total : 0}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  state={{
                    subject: `Hotel booking: ${hotel.name} – ${hotel.city}${
                      nights > 0 ? ` (${nights} ${nights === 1 ? "night" : "nights"})` : ""
                    }`,
                    details: {
                      id: hotel.id,
                      price: hotel.price,
                      checkIn,
                      checkOut,
                      rooms,
                      adults,
                      children,
                    },
                  }}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-yellow-500 px-4 py-2.5 text-sm font-semibold text-black hover:bg-yellow-400 transition"
                >
                  Book now
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {/* Similar stays */}
        <div className="mt-10">
          <h3 className="text-lg font-extrabold text-gray-900">Similar stays</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOTELS.filter((h) => h.type === hotel.type && h.id !== hotel.id)
              .slice(0, 3)
              .map((s) => (
                <article
                  key={s.id}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
                >
                  <Link to={`/hotels/${s.id}`} className="block relative">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow">
                      {s.type}
                    </span>
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">{s.city}</p>
                      <div className="flex items-center gap-2">
                        <Stars value={s.rating} />
                        <span className="text-sm text-gray-500">({s.reviews})</span>
                      </div>
                    </div>
                    <h4 className="mt-1 text-base font-extrabold text-gray-900">
                      <Link to={`/hotels/${s.id}`} className="hover:underline">
                        {s.name}
                      </Link>
                    </h4>
                    <div className="mt-3 flex items-center gap-3 text-gray-600">
                      {s.amenities.slice(0, 4).map((a) => (
                        <span key={a} className="inline-flex items-center gap-1 text-xs font-medium">
                          <AmenityIcon type={a} /> {a}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">From</p>
                        <p className="text-xl font-extrabold text-gray-900">
                          ${s.price} <span className="text-sm font-semibold text-gray-500">/ night</span>
                        </p>
                      </div>
                      <Link
                        to="/contact"
                        state={{ subject: `Hotel booking: ${s.name} – ${s.city}` }}
                        className="inline-flex items-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold text-black hover:bg-yellow-400 transition"
                      >
                        Book now
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;
