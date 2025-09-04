import React from "react";

const CATEGORIES = [
  {
    title: "Cheap Packages",
    items: ["New York", "Maldives", "Sri Lanka", "Nepal", "Thiland", "Singapore"],
    price: "$1500",
  },
  {
    title: "Luxury Packages",
    items: ["New York", "Maldives", "Sri Lanka", "Nepal", "Thiland", "Singapore"],
    price: "$1500",
  },
  {
    title: "Camping Packages",
    items: ["New York", "Maldives", "Sri Lanka", "Nepal", "Thiland", "Singapore"],
    price: "$1500",
  },
];

const Prices = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            We Provide Affordable Prices
          </h2>
          <p className="mt-3 text-gray-500 max-w-3xl mx-auto">
            Well educated, intellectual people, especially scientists at all times demonstrate considerably.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.title}
              className="rounded-xl bg-white/90 border border-gray-100 shadow-sm"
            >
              {/* Card header */}
              <div className="px-8 pt-8">
                <h3 className="text-center text-xl font-extrabold text-gray-900">
                  {cat.title}
                </h3>
                <div className="mx-auto mt-3 h-[2px] w-40 bg-yellow-400" />
              </div>

              {/* List */}
              <ul className="px-6 sm:px-8 py-6 space-y-4">
                {cat.items.map((place) => (
                  <li
                    key={place}
                    className="flex items-center justify-between text-[15px] text-gray-700"
                  >
                    <span>{place}</span>
                    <span className="min-w-[88px] text-center rounded-md border border-gray-200 bg-white px-4 py-2 font-semibold text-gray-800 shadow-xs">
                      {cat.price}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
