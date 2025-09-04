import React, { useMemo } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

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
  description:
    "A romantic long weekend in Paris blending world-class art, café culture, and glittering night views along the Seine. Perfect for first-timers and couples seeking a classic European escape.",
  highlights: [
    "Skip-the-line Louvre & Eiffel Tower",
    "Evening Seine river cruise",
    "Montmartre & Sacré-Cœur walking tour",
    "Champs-Élysées & Arc de Triomphe photo stops",
    "Free time for cafés, pastries, and boutiques"
  ],
  inclusions: [
    "3 nights in 4★ central hotel with breakfast",
    "Airport transfers",
    "Seine cruise tickets",
    "Guided city tour with licensed guide"
  ],
  exclusions: [
    "International flights",
    "Lunches & dinners unless stated",
    "Personal expenses & city tax"
  ],
  season: "Best April–June & Sept–Oct"
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
  description:
    "Sun-kissed villages, cliffside roads, and sparkling bays. Unwind in Positano, Amalfi, and Ravello with family-friendly pacing and optional Capri day trip.",
  highlights: [
    "Coastal drive: Positano, Amalfi & Ravello",
    "Limoncello tasting & local trattoria lunch",
    "Optional Capri & Blue Grotto excursion",
    "Free beach day with sunbeds",
    "Sunset viewpoint in Ravello"
  ],
  inclusions: [
    "5 nights 4★ hotel with breakfast",
    "Private arrival/departure transfers",
    "Full-day Amalfi Coast tour",
    "Professional driver-guide"
  ],
  exclusions: [
    "Capri boat tickets (optional add-on)",
    "City taxes & personal expenses",
    "Dinners except where noted"
  ],
  season: "Best May–Sept"
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
  description:
    "A week of alpine panoramas across Jungfrau and Lauterbrunnen valleys. Mountain huts, glacier vistas, and pristine trails for avid hikers.",
  highlights: [
    "Guided hikes in Jungfrau region",
    "Cable car to panoramic viewpoints",
    "Glacier walk with safety briefing",
    "Lauterbrunnen waterfalls loop",
    "Cheese farm visit in the Alps"
  ],
  inclusions: [
    "6 nights mountain lodges/3★ inns, breakfast & 4 dinners",
    "Certified mountain guide",
    "Cable car passes (select routes)",
    "Glacier safety equipment"
  ],
  exclusions: [
    "Personal hiking gear & insurance",
    "Lunches on the trail",
    "Train to Interlaken (available as add-on)"
  ],
  difficulty: "Moderate–Challenging",
  season: "Best June–Sept"
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
  description:
    "Gaudí masterpieces, beach vibes, and tapas nights. Dive into Barcelona’s architecture and food scene with time to explore on your own.",
  highlights: [
    "Sagrada Família guided entry",
    "Park Güell & Gothic Quarter walk",
    "Tapas crawl in El Born",
    "Barceloneta beach evening",
    "Optional Montserrat half-day"
  ],
  inclusions: [
    "4 nights 3–4★ hotel with breakfast",
    "Airport transfers",
    "Sagrada Família & Park Güell tickets",
    "Tapas tasting tour"
  ],
  exclusions: [
    "City tax & personal expenses",
    "Optional Montserrat trip",
    "Lunches/dinners unless stated"
  ],
  season: "Best March–June & Sept–Nov"
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
  description:
    "Whitewashed villages, caldera sunsets, and Aegean breezes—crafted for couples seeking a dreamy Greek escape.",
  highlights: [
    "Sunset catamaran cruise with dinner",
    "Oia & Fira walking tour",
    "Wine tasting at volcanic vineyards",
    "Black-sand beach time",
    "Private photo session (optional)"
  ],
  inclusions: [
    "4 nights boutique cave hotel with breakfast",
    "Round-trip airport/port transfers",
    "Catamaran sunset cruise",
    "Wine tasting experience"
  ],
  exclusions: [
    "Domestic flights/ferries",
    "Meals not mentioned",
    "Personal expenses"
  ],
  season: "Best May–Oct"
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
  description:
    "Towering spires, emerald lakes, and crisp mountain air. Explore the Dolomites via scenic hikes and cozy rifugios.",
  highlights: [
    "Lago di Braies & Tre Cime viewpoints",
    "Seceda ridgeline cable car",
    "Sunrise/sunset photo stops",
    "Local speck & alpine cheeses tasting",
    "Optional via ferrata intro"
  ],
  inclusions: [
    "5 nights chalet/inn with breakfast",
    "Transport between trailheads",
    "Cable car tickets (select routes)",
    "English-speaking mountain escort"
  ],
  exclusions: [
    "Via ferrata gear (rental available)",
    "Lunches & some dinners",
    "Travel insurance"
  ],
  difficulty: "Easy–Moderate",
  season: "Best June–Sept"
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
  description:
    "Thermal baths, grand boulevards, and a golden-hour Danube cruise. Discover Buda’s castle views and Pest’s café culture.",
  highlights: [
    "Evening Danube cruise",
    "Buda Castle & Fisherman’s Bastion",
    "Széchenyi thermal bath session",
    "Central Market Hall tasting",
    "Heroes’ Square & Andrassy Avenue"
  ],
  inclusions: [
    "4 nights 4★ hotel with breakfast",
    "Airport transfers",
    "Danube cruise tickets",
    "Half-day guided city tour"
  ],
  exclusions: [
    "Bath entry upgrades",
    "Meals not specified",
    "Personal expenses"
  ],
  season: "Best April–June & Sept–Oct"
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
  description:
    "Imperial palaces, coffeehouse elegance, and classical music. Vienna serves art and history with effortless charm.",
  highlights: [
    "Schönbrunn Palace tour",
    "St. Stephen’s Cathedral & Graben",
    "Evening classical concert",
    "Belvedere Museum (Klimt’s The Kiss)",
    "Traditional coffeehouse visit"
  ],
  inclusions: [
    "3 nights central 4★ hotel with breakfast",
    "Airport transfers",
    "Schönbrunn skip-the-line",
    "Concert ticket (category standard)"
  ],
  exclusions: [
    "Museum optional entries beyond listed",
    "Meals not mentioned",
    "City taxes"
  ],
  season: "Year-round; best April–June & Sept–Dec"
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
  description:
    "Cobblestones, spires, and riverside charm. A compact itinerary through Prague’s castle district and Old Town.",
  highlights: [
    "Prague Castle & St. Vitus",
    "Charles Bridge sunrise walk",
    "Astronomical Clock & Old Town Square",
    "Vltava evening stroll",
    "Optional Cesky Krumlov day trip"
  ],
  inclusions: [
    "3 nights 3–4★ hotel with breakfast",
    "Airport transfers",
    "Guided Old Town & Castle tour",
    "Public transport pass (48 hrs)"
  ],
  exclusions: [
    "Cesky Krumlov excursion",
    "Meals beyond breakfast",
    "Personal expenses"
  ],
  season: "Best April–June & Sept–Oct"
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
  description:
    "Island-hopping, medieval towns, and turquoise waters along the Dalmatian Coast from Split to Dubrovnik.",
  highlights: [
    "Split & Diocletian’s Palace",
    "Hvar or Brac island day cruise",
    "Dubrovnik walls & Old Town",
    "Sea-to-table seafood tasting",
    "Optional kayaking beneath city walls"
  ],
  inclusions: [
    "6 nights hotels with breakfast",
    "Ferry/boat for one island day",
    "Airport transfers (Split/Dubrovnik)",
    "Guided walking tours"
  ],
  exclusions: [
    "Kayak tour optional",
    "Dinners & lunches",
    "City taxes"
  ],
  season: "Best May–Sept"
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
  description:
    "Bikes, canals, and masterpieces. Explore the Dutch capital’s museums and neighborhoods at an easygoing pace.",
  highlights: [
    "Canal cruise welcome tour",
    "Rijksmuseum & Van Gogh Museum",
    "Jordaan & Nine Streets walk",
    "Optional Zaanse Schans windmills",
    "Cheese & stroopwafel tasting"
  ],
  inclusions: [
    "4 nights 3–4★ hotel with breakfast",
    "Airport/train station transfers",
    "Canal cruise tickets",
    "Museum entry (select)"
  ],
  exclusions: [
    "Bike rental optional",
    "Meals not stated",
    "City taxes"
  ],
  season: "Best April–June (tulips) & Sept"
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
  description:
    "Chase auroras across Iceland’s wild landscapes while hitting must-see sights like the Golden Circle and Blue Lagoon.",
  highlights: [
    "Aurora hunting with expert guides",
    "Golden Circle (Geysir, Gullfoss, Þingvellir)",
    "South Coast waterfalls & black-sand beach",
    "Blue Lagoon soak",
    "Glacier walk (optional add-on)"
  ],
  inclusions: [
    "5 nights hotels/guesthouses with breakfast",
    "Airport transfers",
    "Northern Lights outings (weather permitting)",
    "Golden Circle day tour"
  ],
  exclusions: [
    "Glacier walk add-on",
    "Dinners & lunches",
    "Thermal spa premium upgrades"
  ],
  difficulty: "Easy–Moderate (cold weather conditions)",
  season: "Best Sept–March"
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
  description:
    "Sail through dramatic fjords, quaint villages, and glacier-carved valleys on a scenic journey from Bergen.",
  highlights: [
    "Sognefjord or Geirangerfjord cruise",
    "Flåm Railway panoramic ride",
    "Bergen Bryggen heritage walk",
    "Waterfall viewpoints",
    "Optional kayaking in a fjord"
  ],
  inclusions: [
    "7 nights cabin/hotel mix with breakfast",
    "Rail & cruise tickets (select legs)",
    "Local guide in Bergen & Flåm",
    "Airport transfers"
  ],
  exclusions: [
    "Kayak excursion optional",
    "Meals not stated",
    "Personal expenses"
  ],
  difficulty: "Easy",
  season: "Best May–Sept"
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
  description:
    "Tram rides, pastel facades, and Atlantic breezes. Mix city charm with coastal day trips to Sintra or Cascais.",
  highlights: [
    "Alfama & Bairro Alto walk",
    "Tram 28 experience",
    "Belem Tower & Pastéis de Belém tasting",
    "Sintra palaces day trip (optional)",
    "Cascais seaside promenade"
  ],
  inclusions: [
    "4 nights 3–4★ hotel with breakfast",
    "Airport transfers",
    "Guided city highlights tour",
    "Pastéis tasting"
  ],
  exclusions: [
    "Sintra palace tickets (optional package)",
    "Meals not specified",
    "City taxes"
  ],
  season: "Best March–June & Sept–Nov"
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
  description:
    "A dynamic mix of Cold War history, cutting-edge art, and legendary nightlife—Berlin at its best.",
  highlights: [
    "Berlin Wall Memorial & East Side Gallery",
    "Museum Island pass (select museums)",
    "Brandenburg Gate & Reichstag dome",
    "Street-art & alternative neighborhoods",
    "Optional nightlife tour"
  ],
  inclusions: [
    "4 nights 3–4★ hotel with breakfast",
    "Airport transfers",
    "City highlights guided tour",
    "Museum Island ticket (standard)"
  ],
  exclusions: [
    "Nightlife tour optional",
    "Meals not listed",
    "Personal expenses"
  ],
  season: "Year-round; best May–Oct & Dec (markets)"
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
  description:
    "Atmospheric lanes, castle views, and dramatic Highland landscapes—Scotland’s greatest hits in one trip.",
  highlights: [
    "Edinburgh Castle & Royal Mile",
    "Loch Ness & Glencoe Highlands day trip",
    "Whisky tasting experience",
    "Arthur’s Seat sunrise option",
    "Photography stops at iconic viewpoints"
  ],
  inclusions: [
    "5 nights hotel with breakfast",
    "Airport transfers",
    "Highlands full-day coach tour",
    "Castle entry ticket"
  ],
  exclusions: [
    "Whisky distillery premium tasting",
    "Lunches & dinners",
    "Personal expenses"
  ],
  difficulty: "Easy–Moderate (walks & hills)",
  season: "Best May–Sept; Dec for festive vibes"
}
,
];


const Stars = ({ value = 0 }) => {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  const S = ({ className = "" }) => (
    <svg
      viewBox="0 0 20 20"
      className={`w-4 h-4 ${className}`}
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z" />
    </svg>
  );
  return (
    <div className="flex items-center gap-1">
      {[...Array(full)].map((_, i) => (
        <S key={`f-${i}`} className="text-yellow-400" />
      ))}
      {half && (
        <div className="relative">
          <S className="text-gray-300" />
          <div className="absolute inset-0 w-1/2 overflow-hidden">
            <S className="text-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(empty)].map((_, i) => (
        <S key={`e-${i}`} className="text-gray-300" />
      ))}
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
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-gray-600">Package not found.</p>
          <Link
            to="/packages"
            className="mt-4 inline-block text-yellow-600 hover:underline"
          >
            ← Back to Packages
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span>›</span>{" "}
          <Link to="/packages" className="hover:underline">
            Packages
          </Link>{" "}
          <span>›</span>{" "}
          <span className="text-gray-700 font-medium">{pkg.title}</span>
        </nav>

        {/* Hero */}
        <div className="mt-8 overflow-hidden rounded-3xl shadow-xl">
          <img
            src={pkg.img}
            alt={pkg.title}
            className="w-full h-[480px] object-cover"
          />
        </div>

        {/* Header */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              {pkg.title}
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              {pkg.country} · {pkg.days} days
            </p>
            <div className="mt-3 flex items-center gap-3">
              <Stars value={pkg.rating} />
              <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
              <span className="ml-3 rounded-md bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700">
                {pkg.type}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-wide text-gray-500">From</p>
            <p className="text-4xl font-extrabold text-gray-900">${pkg.price}</p>

            {/* Request This Trip */}
            <Link
              to="/contact"
              state={{ subject: `Request: ${pkg.title}` }}
              className="mt-4 inline-flex items-center rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition shadow-md"
            >
              Request This Trip
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Overview</h2>
              <p className="mt-3 text-lg text-gray-700 leading-8">{pkg.description}</p>
            </div>

            {pkg.highlights && (
              <div>
                <h3 className="text-xl font-bold text-gray-900">Trip Highlights</h3>
                <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                  {pkg.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {pkg.inclusions && (
              <div>
                <h3 className="text-xl font-bold text-gray-900">Inclusions</h3>
                <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                  {pkg.inclusions.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>
            )}

            {pkg.exclusions && (
              <div>
                <h3 className="text-xl font-bold text-gray-900">Exclusions</h3>
                <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                  {pkg.exclusions.map((e, idx) => (
                    <li key={idx}>{e}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why Choose Us */}
            <div>
              <h3 className="text-xl font-bold text-gray-900">Why Choose This Trip?</h3>
              <p className="mt-3 text-gray-700 leading-7">
                Our curated itineraries are designed with care, balancing iconic sights
                and hidden gems. You’ll enjoy expert guides, seamless logistics, and
                thoughtful touches that make your journey memorable.
              </p>
            </div>

            {/* Reviews Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900">Traveler Reviews</h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border p-4 bg-white shadow-sm">
                  <p className="text-gray-700 italic">“Absolutely unforgettable experience! Everything was perfectly organized.”</p>
                  <span className="block mt-2 text-sm text-gray-500">— Maria, Spain</span>
                </div>
                <div className="rounded-lg border p-4 bg-white shadow-sm">
                  <p className="text-gray-700 italic">“The guides were amazing and the itinerary was just the right pace.”</p>
                  <span className="block mt-2 text-sm text-gray-500">— James, UK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              <h4 className="text-lg font-extrabold text-gray-900">Quick facts</h4>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Country</dt>
                  <dd className="text-gray-800">{pkg.country}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Duration</dt>
                  <dd className="text-gray-800">{pkg.days} days</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Type</dt>
                  <dd className="text-gray-800">{pkg.type}</dd>
                </div>
                {pkg.difficulty && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Difficulty</dt>
                    <dd className="text-gray-800">{pkg.difficulty}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-gray-500">Season</dt>
                  <dd className="text-gray-800">{pkg.season}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Rating</dt>
                  <dd className="text-gray-800">{pkg.rating} / 5</dd>
                </div>
              </dl>

              {/* Book this package */}
              <Link
                to="/contact"
                state={{
                  subject: `Booking inquiry: ${pkg.title} — ${pkg.country}, ${pkg.days} days`,
                }}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-800 transition"
              >
                Book this package
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Packages */}
        <div className="mt-20">
          <h3 className="text-2xl font-extrabold text-gray-900">You might also like</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.filter((p) => p.id !== pkg.id).slice(0, 3).map((rel) => (
              <Link
                key={rel.id}
                to={`/packages/${rel.id}`}
                className="group block rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={rel.img}
                  alt={rel.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-gray-900">{rel.title}</h4>
                  <p className="text-sm text-gray-600">{rel.country} · {rel.days} days</p>
                  <p className="mt-1 font-semibold text-yellow-600">${rel.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Link to="/packages" className="text-yellow-600 hover:underline font-medium">
            ← Back to all packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;
