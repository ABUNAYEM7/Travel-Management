import React from "react";

const SERVICES = [
  {
    title: "Rent a Car",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop",
    desc:
      "The preservation of human life is the ultimate value, a pillar of ethics and the foundation.",
  },
  {
    title: "Cruise Booking",
    img: "https://i.ibb.co.com/ZzhCT24c/pexels-troopper84-33710229.jpg", // ✅ working cruise ship image
    desc:
      "I was always somebody who felt quite sorry for myself, what I had not got compared.",
  },
  {
    title: "To Do List",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    desc:
      "The following article covers a topic that has recently moved to center stage—at least it seems.",
  },
  {
    title: "Food Features",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
    desc:
      "There are many kinds of narratives and organizing principles. Science is driven by evidence.",
  },
];

const OthersServices = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Our Others Services
          </h2>
          <p className="mt-3 text-gray-500 max-w-3xl mx-auto">
            We all live in an age that belongs to the young at heart. Life that is.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-4"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-md">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-lg font-extrabold text-gray-900">{s.title}</h3>

              <p className="mt-3 text-[15px] leading-7 text-gray-600">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OthersServices;
