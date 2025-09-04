import React from "react";

const DESTINATIONS = [
  {
    title: "Mountain River",
    country: "Paraguay",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Dream City",
    country: "Paris",
    img: "https://i.ibb.co.com/gFvGyskJ/pexels-peng-liu-45946-169647.jpg",
  },
  {
    title: "Cloud Mountain",
    country: "Sri Lanka",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
];

const PopularDestination = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Popular Destinations
          </h2>
          <p className="mt-3 text-gray-500 max-w-3xl mx-auto">
            We all live in an age that belongs to the young at heart. Life that is
            becoming extremely fast, day.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <article
              key={d.title}
              className="relative group rounded-lg overflow-hidden shadow-sm"
            >
              {/* Image */}
              <img
                src={d.img}
                alt={`${d.title} in ${d.country}`}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Centered text */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center">
                <h3 className="text-white text-xl sm:text-2xl font-extrabold drop-shadow">
                  {d.title}
                </h3>
                <p className="text-white/90 mt-1 text-sm font-medium drop-shadow">
                  {d.country}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
