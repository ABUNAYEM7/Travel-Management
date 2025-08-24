import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Happy Travelers", value: "48K+" },
  { label: "Trips Crafted", value: "6,200+" },
  { label: "Countries Covered", value: "42" },
  { label: "Avg. Rating", value: "4.9/5" },
];

const values = [
  {
    title: "Traveler‑first",
    desc:
      "We design every itinerary around your pace, interests, and budget—never a one‑size‑fits‑all tour.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4 8.24 4 9.91 4.81 11 6.08 12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Local Expertise",
    desc:
      "Handpicked guides and stays. We work with trusted locals to unlock experiences you won’t find online.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8zm0 10.5A2.5 2.5 0 119.5 10 2.5 2.5 0 0112 12.5z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc:
      "Clear, itemized quotes. No surprise fees. You approve every change before we book.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4.18l5 2.22v3.6c0 4.01-2.66 7.85-5 8.95-2.34-1.1-5-4.94-5-8.95V7.4l5-2.22z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Mila Kovács",
    role: "Head of Travel Design",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Leo Martins",
    role: "Partnerships (EU)",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sofia Rossi",
    role: "Customer Success",
    img: "https://images.unsplash.com/photo-1544005316-04ce1f2d2d1e?q=80&w=400&auto=format&fit=crop",
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero / Intro */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop"
            alt="About Europa Odyssey"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl text-white">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
              About Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
              We craft European journeys you’ll talk about for years.
            </h1>
            <p className="mt-4 text-white/90 text-[15px] leading-7">
              From sun‑splashed coasts to alpine villages, we plan everything end‑to‑end—
              flights, trains, stays, and unique experiences—so you can just show up and enjoy.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/packages"
                className="rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition"
              >
                Explore Packages
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-white/60 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Our mission
              </h2>
              <p className="mt-4 text-gray-600 leading-7">
                Travel should feel simple, personal, and inspiring. We combine
                data‑driven planning with local human insight to remove hassle and
                maximize wonder—whether it’s a honeymoon in Santorini or a rail
                adventure across Central Europe.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Custom day‑by‑day itineraries tailored to you",
                  "Curated hotels, apartments, and boutique stays",
                  "24/7 support while you’re on the road",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-yellow-500 text-white text-[11px] font-bold flex items-center justify-center">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold text-gray-900 text-center">
            What we believe
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-yellow-100 text-yellow-700">
                  {v.icon}
                </div>
                <h4 className="mt-4 font-extrabold text-gray-900">{v.title}</h4>
                <p className="mt-2 text-gray-600 leading-7 text-[15px]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold text-gray-900 text-center">
            Meet the team
          </h3>
          <p className="mt-3 text-center text-gray-500">
            A small, passionate crew who loves getting every detail right.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-52 w-full rounded-lg object-cover"
                />
                <div className="mt-4">
                  <p className="font-extrabold text-gray-900">{m.name}</p>
                  <p className="text-sm text-gray-500">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gray-800 p-8 sm:p-10 lg:p-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-white text-2xl font-extrabold">
                Ready to plan your European escape?
              </h4>
              <p className="mt-2 text-white/70">
                Tell us where you want to go—we’ll send a custom plan within 24 hours.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition"
              >
                Get a Free Plan
              </Link>
              <Link
                to="/packages"
                className="rounded-md border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Browse Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
