import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

/* ------------------------------------------------------
   Top‑1% ABOUT PAGE — React + Tailwind + Framer Motion
   Drop into src/pages/About.jsx (or similar)
   Requirements: tailwindcss, framer-motion, react-router-dom
   ------------------------------------------------------ */

// --- Small helpers ---
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay } },
});

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-16 sm:py-20 ${className}`}>{children}</section>
);

const kpi = [
  { label: "Happy Travelers", value: "48K+" },
  { label: "Trips Crafted", value: "6,200+" },
  { label: "Countries Covered", value: "42" },
  { label: "Avg. Rating", value: "4.9/5" },
];

const values = [
  {
    title: "Traveler‑first",
    desc: "We design every itinerary around your pace, interests, and budget—never a one‑size‑fits‑all tour.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4 8.24 4 9.91 4.81 11 6.08 12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
    ),
  },
  {
    title: "Local Expertise",
    desc: "Handpicked guides and stays. We work with trusted locals to unlock experiences you won’t find online.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8zm0 10.5A2.5 2.5 0 119.5 10 2.5 2.5 0 0112 12.5z" /></svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "Clear, itemized quotes. No surprise fees. You approve every change before we book.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4.18l5 2.22v3.6c0 4.01-2.66 7.85-5 8.95-2.34-1.1-5-4.94-5-8.95V7.4l5-2.22z" /></svg>
    ),
  },
  {
    title: "Human Support",
    desc: "Real humans on WhatsApp/phone 24/7 while you travel—no bots when you need help.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0v1H5v-1z"/></svg>
    )
  }
];

const story = [
  { year: "2016", title: "Humble Beginnings", text: "Started as two travelers planning trips for friends across Europe." },
  { year: "2018", title: "First 1,000 Travelers", text: "Scaled with curated local partners and exclusive experiences." },
  { year: "2021", title: "EU‑Wide Network", text: "Guides & stays in 40+ regions; 24/7 in‑trip support launched." },
  { year: "2024", title: "Sustainability Pledge", text: "Carbon‑aware routing and rail‑first planning introduced." },
];

const awards = [
  { name: "TripLeaders 2024", img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=300&auto=format&fit=crop" },
  { name: "Best Boutique Agency", img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=300&auto=format&fit=crop" },
  { name: "Top Customer Care", img: "https://images.unsplash.com/photo-1549921296-3ecf8a1b7aeb?q=80&w=300&auto=format&fit=crop" },
  { name: "Design Awards", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=300&auto=format&fit=crop" },
];

const team = [
  { name: "Mila Kovács", role: "Head of Travel Design", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" },
  { name: "Leo Martins", role: "Partnerships (EU)", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop" },
  { name: "Sofia Rossi", role: "Customer Success", img: "https://images.unsplash.com/photo-1544005316-04ce1f2d2d1e?q=80&w=600&auto=format&fit=crop" },
  { name: "Jonas Weber", role: "Ops & Logistics", img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=600&auto=format&fit=crop" },
  { name: "Amelia Novak", role: "Experience Curator", img: "https://images.unsplash.com/photo-1545996124-0501ebae84d3?q=80&w=600&auto=format&fit=crop" },
  { name: "Clara Moreau", role: "Rail Specialist", img: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop" },
];

const testimonials = [
  {
    quote: "Flawless planning. The rail routes saved us hours and the hotels were exactly our style.",
    name: "Priya & Ayaan",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop",
    trip: "Italy + Switzerland",
  },
  {
    quote: "They rescued us during a strike with instant rerouting. 10/10 support.",
    name: "Nora Jensen",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=300&auto=format&fit=crop",
    trip: "Netherlands + Belgium",
  },
  {
    quote: "Our Santorini proposal shoot & catamaran were magical. Worth every penny.",
    name: "Marco & Ana",
    img: "https://images.unsplash.com/photo-1520975922076-3d8a18b70717?q=80&w=300&auto=format&fit=crop",
    trip: "Greece",
  },
];

const partners = [
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Eurowings_logo_2015.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/Deutsche_Bahn_AG-Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/31/Airbnb_Logo_B%C3%A9lo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1f/Expedia_2012_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3b/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg",
];

// --- Components ---
const Counter = ({ target }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(String(target).replace(/\D/g, ""), 10) || 0;
    if (!end) return;
    const step = Math.ceil(end / 60); // ~1s
    const id = setInterval(() => {
      start += step;
      if (start >= end) {
        setValue(end);
        clearInterval(id);
      } else setValue(start);
    }, 16);
    return () => clearInterval(id);
  }, [target]);
  const suffix = String(target).replace(/\d+/g, "");
  return (
    <span>
      {value.toLocaleString()}<span className="align-text-top text-[.8em]">{suffix}</span>
    </span>
  );
};

const InView = ({ children, variants = fadeUp(), className = "", as: Tag = "div" }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();
  useEffect(() => { if (inView) controls.start("show"); }, [inView]);
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      <Tag>{children}</Tag>
    </motion.div>
  );
};

const Accordion = ({ items }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-100 bg-white shadow-sm">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-gray-900">{item.q}</span>
              <svg
                viewBox="0 0 20 20"
                className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.13l3.71-3.9a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-gray-600 leading-7 text-[15px]">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// --- Page ---
const About = () => {
  // simple auto‑advancing testimonial index
  const [ti, setTi] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTi((p) => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, []);

  const faqs = useMemo(() => ([
    { q: "What makes you different?", a: "We combine data‑driven planning, human local insight, and real 24/7 support. Every trip is tailored—no generic bus tours." },
    { q: "Can you plan rail‑only trips?", a: "Yes. We love rail! We prioritize scenic and time‑efficient routes across Europe with seat reservations where needed." },
    { q: "Do you handle visas and insurance?", a: "We provide documentation support and partner with insurers. We’ll guide you with requirements and best options." },
    { q: "How fast is the first proposal?", a: "Typically within 24 hours for standard trips; complex multi‑country journeys may take a bit longer." },
  ]), []);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1800&auto=format&fit=crop"
            alt="About Euro Travel"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-3xl text-white">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">About Us</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              We craft European journeys you’ll talk about for years.
            </h1>
            <p className="mt-4 text-white/90 text-[15px] leading-7 max-w-2xl">
              From sun‑splashed coasts to alpine villages, we plan everything end‑to‑end—
              flights, trains, stays, and unique experiences—so you can just show up and enjoy.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/packages" className="rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition">Explore Packages</Link>
              <Link to="/contact" className="rounded-md border border-white/60 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">Talk to an Expert</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {kpi.map((s, idx) => (
              <InView key={s.label} variants={scaleIn(idx * 0.05)}>
                <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                    <Counter target={s.value} />
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{s.label}</p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </Section>

      {/* STORY TIMELINE */}
      <Section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InView>
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our story</h2>
            <p className="mt-3 text-gray-500 text-center max-w-3xl mx-auto">From two friends with a spreadsheet to a Europe‑wide network of local experts.</p>
          </InView>
          <div className="mt-10 relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-200 hidden md:block" />
            <ol className="space-y-8">
              {story.map((s, i) => (
                <li key={s.year} className={`md:grid md:grid-cols-2 md:items-center md:gap-12 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <InView variants={fadeUp(i * 0.05)}>
                    <div className={`p-6 rounded-2xl bg-white border border-gray-100 shadow-sm ${i % 2 ? "md:order-2" : ""}`}>
                      <span className="text-xs font-semibold tracking-wider text-yellow-700 bg-yellow-100 rounded-full px-2 py-0.5">{s.year}</span>
                      <h3 className="mt-2 text-xl font-extrabold text-gray-900">{s.title}</h3>
                      <p className="mt-2 text-gray-600 leading-7">{s.text}</p>
                    </div>
                  </InView>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* MISSION & VALUES */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
            <InView>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Our mission</h2>
                <p className="mt-4 text-gray-600 leading-7">Travel should feel simple, personal, and inspiring. We combine data‑driven planning with local human insight to remove hassle and maximize wonder—whether it’s a honeymoon in Santorini or a rail adventure across Central Europe.</p>
                <ul className="mt-6 space-y-3">
                  {["Custom day‑by‑day itineraries tailored to you","Curated hotels, apartments, and boutique stays","24/7 support while you’re on the road"].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-yellow-500 text-white text-[11px] font-bold flex items-center justify-center">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </InView>
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              {values.map((v, i) => (
                <InView key={v.title} variants={scaleIn(i * 0.05)}>
                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-yellow-100 text-yellow-700">{v.icon}</div>
                    <h4 className="mt-4 font-extrabold text-gray-900">{v.title}</h4>
                    <p className="mt-2 text-gray-600 leading-7 text-[15px]">{v.desc}</p>
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* AWARDS */}
      <Section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InView>
            <h3 className="text-2xl font-extrabold text-gray-900 text-center">Awards & recognition</h3>
            <p className="mt-3 text-center text-gray-500">Grateful to be noticed by folks we admire.</p>
          </InView>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a, i) => (
              <InView key={a.name} variants={scaleIn(i * 0.05)}>
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm text-center">
                  <img src={a.img} alt={a.name} className="h-16 w-full object-contain mx-auto" />
                  <p className="mt-3 text-sm font-semibold text-gray-700">{a.name}</p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </Section>

      {/* SUSTAINABILITY */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[{title:"Rail‑first Routing",desc:"We bias for scenic rail where practical—lower carbon, less stress.",img:"https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1400&auto=format&fit=crop"},{title:"Local Communities",desc:"We hire local guides and family‑run stays, keeping money where you visit.",img:"https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1400&auto=format&fit=crop"},{title:"Lower Footprint",desc:"We offset ops and share tips to travel lighter without losing comfort.",img:"https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=1400&auto=format&fit=crop"}].map((c,i)=> (
              <InView key={c.title} variants={fadeUp(i*0.05)}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <img src={c.img} alt={c.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h4 className="font-extrabold text-gray-900">{c.title}</h4>
                    <p className="mt-2 text-gray-600 leading-7 text-[15px]">{c.desc}</p>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </Section>

      {/* TEAM */}
      <Section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InView>
            <h3 className="text-2xl font-extrabold text-gray-900 text-center">Meet the team</h3>
            <p className="mt-3 text-center text-gray-500">A small, passionate crew who loves getting every detail right.</p>
          </InView>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <InView key={m.name} variants={scaleIn(i * 0.05)}>
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <img src={m.img} alt={m.name} className="h-56 w-full rounded-lg object-cover" />
                  <div className="mt-4">
                    <p className="font-extrabold text-gray-900">{m.name}</p>
                    <p className="text-sm text-gray-500">{m.role}</p>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS CAROUSEL */}
      <Section>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <InView>
            <h3 className="text-2xl font-extrabold text-gray-900 text-center">Traveler love</h3>
            <p className="mt-3 text-center text-gray-500">Real words from real journeys.</p>
          </InView>
          <div className="mt-8 relative">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="relative h-full">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    className="p-8 grid gap-6 sm:grid-cols-[120px_1fr] items-center"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: i === ti ? 1 : 0, x: i === ti ? 0 : -40 }}
                    transition={{ duration: .5 }}
                    style={{ position: i === ti ? "relative" : "absolute", inset: 0 }}
                  >
                    <img src={t.img} alt={t.name} className="h-24 w-24 rounded-full object-cover mx-auto sm:mx-0" />
                    <div>
                      <p className="text-lg leading-8 text-gray-800">“{t.quote}”</p>
                      <p className="mt-3 text-sm font-semibold text-gray-700">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.trip}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTi(i)} className={`h-2.5 w-2.5 rounded-full ${i===ti?"bg-gray-900":"bg-gray-300"}`} aria-label={`Show testimonial ${i+1}`} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PARTNERS MARQUEE */}
      <Section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InView>
            <h3 className="text-2xl font-extrabold text-gray-900 text-center">Trusted partners</h3>
            <p className="mt-3 text-center text-gray-500">We work with the best to deliver a seamless trip.</p>
          </InView>
          <div className="mt-8 overflow-hidden">
            <div className="flex gap-12 animate-[scroll_30s_linear_infinite] will-change-transform" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
              {partners.concat(partners).map((src, i) => (
                <img key={i} src={src} alt="partner" className="h-10 w-auto opacity-70 hover:opacity-100 transition" />
              ))}
            </div>
          </div>
          {/* marquee keyframes */}
          <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </div>
      </Section>

      {/* PRESS */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="grid gap-6 sm:grid-cols-3 items-center">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500">As seen in</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/The_Guardian_2018.svg" className="mx-auto mt-2 h-6" alt="Guardian" />
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500">Featured by</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Forbes_logo.svg" className="mx-auto mt-2 h-6" alt="Forbes" />
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500">Reviewed on</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/TripAdvisor_Logo.svg" className="mx-auto mt-2 h-6" alt="Tripadvisor" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA BANNER */}
      <Section className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gray-800 p-8 sm:p-10 lg:p-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-white text-2xl font-extrabold">Ready to plan your European escape?</h4>
              <p className="mt-2 text-white/70">Tell us where you want to go—we’ll send a custom plan within 24 hours.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/contact" className="rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition">Get a Free Plan</Link>
              <Link to="/packages" className="rounded-md border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">Browse Packages</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-gray-900">Frequently asked questions</h3>
            <p className="mt-3 text-gray-500">Quick answers about how we work.</p>
          </div>
          <div className="mt-8"><Accordion items={faqs} /></div>
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm text-center">
            <h4 className="text-xl font-extrabold text-gray-900">Get fresh Euro travel ideas</h4>
            <p className="mt-2 text-gray-600">Monthly inspo—no spam. Rail routes, hidden stays, seasonal picks.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <input type="email" required placeholder="Your email" className="w-full sm:w-80 rounded-md border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-300" />
              <button className="rounded-md bg-gray-900 px-6 py-2.5 font-semibold text-white hover:bg-gray-800 transition">Subscribe</button>
            </form>
            <p className="mt-2 text-xs text-gray-500">By subscribing, you agree to our privacy policy.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
