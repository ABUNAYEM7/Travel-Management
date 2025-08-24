import React, { useMemo } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const PACKAGES = [
  { id: "paris-city-break", title: "Paris City Break", country: "France", days: 4, rating: 4.8, reviews: 231, price: 799, type: "City", img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop" },
  { id: "amalfi-coast-sun", title: "Amalfi Coast Sun", country: "Italy", days: 6, rating: 4.7, reviews: 188, price: 1190, type: "Beach", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1400&auto=format&fit=crop" },
  { id: "swiss-alps-trek", title: "Swiss Alps Trek", country: "Switzerland", days: 7, rating: 4.9, reviews: 142, price: 1390, type: "Adventure", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop" },
  { id: "barcelona-culture", title: "Barcelona Culture", country: "Spain", days: 5, rating: 4.6, reviews: 201, price: 920, type: "City", img: "https://images.unsplash.com/photo-1464798429116-8e26f96b2e9c?q=80&w=1400&auto=format&fit=crop" },
  { id: "santorini-romance", title: "Santorini Romance", country: "Greece", days: 5, rating: 4.8, reviews: 167, price: 1290, type: "Beach", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop" },
  { id: "dolomites-escape", title: "Dolomites Escape", country: "Italy", days: 6, rating: 4.7, reviews: 96, price: 1150, type: "Adventure", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop" },
];

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
      {half && <div className="relative"><S className="text-gray-300" /><div className="absolute inset-0 w-1/2 overflow-hidden"><S className="text-yellow-400" /></div></div>}
      {[...Array(empty)].map((_, i) => <S key={`e-${i}`} className="text-gray-300" />)}
    </div>
  );
};

const PackageDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const statePkg = location.state?.pkg;

  const pkg = useMemo(() => {
    if (statePkg?.id === id) return statePkg;
    return PACKAGES.find((p) => p.id === id);
  }, [id, statePkg]);

  if (!pkg) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-gray-600">Package not found.</p>
          <Link to="/packages" className="mt-4 inline-block text-yellow-600 hover:underline">
            ← Back to Packages
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500">
          <Link to="/" className="hover:underline">Home</Link> <span>›</span>{" "}
          <Link to="/packages" className="hover:underline">Packages</Link> <span>›</span>{" "}
          <span className="text-gray-700">{pkg.title}</span>
        </nav>

        {/* Hero */}
        <div className="mt-6 overflow-hidden rounded-2xl">
          <img src={pkg.img} alt={pkg.title} className="w-full h-[340px] object-cover" />
        </div>

        {/* Header */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">{pkg.title}</h1>
            <p className="text-gray-500">{pkg.country} · {pkg.days} days</p>
            <div className="mt-2 flex items-center gap-2">
              <Stars value={pkg.rating} />
              <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
              <span className="ml-3 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700">{pkg.type}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-wide text-gray-500">From</p>
            <p className="text-3xl font-extrabold text-gray-900">${pkg.price}</p>

            {/* Request This Trip → subject = title only */}
            <Link
              to="/contact"
              state={{ subject: `Request: ${pkg.title}` }}
              className="mt-3 inline-flex items-center rounded-md bg-yellow-500 px-5 py-2.5 font-semibold text-black hover:bg-yellow-400 transition"
            >
              Request This Trip
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-extrabold text-gray-900">Overview</h2>
            <p className="mt-2 text-gray-600 leading-7">
              {pkg.summary || "A wonderful itinerary crafted for comfort, culture, and cuisine."}
            </p>

            <h3 className="mt-8 font-extrabold text-gray-900">What’s included</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              {["Handpicked stays", "Daily breakfast", "Local expert guide", "All transfers"].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-white text-[11px] font-bold">✓</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <h4 className="font-extrabold text-gray-900">Quick facts</h4>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-gray-500">Country</dt><dd className="text-gray-800">{pkg.country}</dd></div>
                <div className="flex justify-between"><dt className="text-gray-500">Duration</dt><dd className="text-gray-800">{pkg.days} days</dd></div>
                <div className="flex justify-between"><dt className="text-gray-500">Type</dt><dd className="text-gray-800">{pkg.type}</dd></div>
                <div className="flex justify-between"><dt className="text-gray-500">Rating</dt><dd className="text-gray-800">{pkg.rating} / 5</dd></div>
              </dl>

              {/* Book this package → subject = title + country + duration */}
              <Link
                to="/contact"
                state={{ subject: `Booking inquiry: ${pkg.title} — ${pkg.country}, ${pkg.days} days` }}
                className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2.5 font-semibold text-white hover:bg-gray-800 transition"
              >
                Book this package
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <Link to="/packages" className="text-yellow-600 hover:underline">← Back to all packages</Link>
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;
