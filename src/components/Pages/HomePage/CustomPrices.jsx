import React from "react";
import { Link } from "react-router-dom";

const CustomPrices = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
              Custom Trip Builder
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Didn’t find the right package?
              <br />
              <span className="text-gray-900">Tell us what you want—</span>
              <span className="text-yellow-500"> we’ll craft it.</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-7 max-w-xl">
              Skip the cookie‑cutter plans. Choose your cities, dates, pace, and budget.
              Our experts turn your wishlist into a seamless European itinerary—flights,
              hotels, trains, and experiences included.
            </p>

            {/* Perks */}
            <ul className="mt-6 space-y-3">
              {[
                "Personalized day‑by‑day plan in under 24h",
                "Handpicked hotels near top sights",
                "Transparent pricing—no hidden fees",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-white text-[11px] font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
              to={"/contact"}
               className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-white font-semibold shadow-sm hover:bg-gray-800 transition">
                Request Custom Price
              </Link>

              <p className="text-sm text-gray-500">
                Avg. turnaround <span className="font-semibold text-gray-700">6–12 hours</span>
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop"
              alt="Custom Europe trip"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Soft gradient on the left edge so the split feels natural */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPrices;
