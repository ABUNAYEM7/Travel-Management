import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false); // mobile menu
  const [blogOpen, setBlogOpen] = useState(false); // desktop blog dropdown
  const blogRef = useRef(null);
  const mobileRef = useRef(null);

  const navItems = [
    { name: "HOME", path: "/", end: true },
    { name: "PACKAGES", path: "/packages" },
    { name: "HOTELS", path: "/hotels" },
    { name: "INSURANCE", path: "/insurance" },
    { name: "CONTACT", path: "/contact" },
    { name: "ABOUT", path: "/about" },
  ];

  // close dropdowns/menus on outside click or ESC
  useEffect(() => {
    const onClickOutside = (e) => {
      if (blogRef.current && !blogRef.current.contains(e.target))
        setBlogOpen(false);
      if (open && mobileRef.current && !mobileRef.current.contains(e.target))
        setOpen(false);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setBlogOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  // color system: light-on-dark for home, dark-on-light for others
  const brandCls = isHome ? "text-white" : "text-gray-900";
  const topBarText = isHome ? "text-white" : "text-gray-700";
  const iconCls = isHome ? "text-white" : "text-gray-700";
  const linkBase = "text-sm font-semibold tracking-wide transition-colors";
  const linkActive = isHome ? "text-yellow-400" : "text-gray-900";
  const linkInactive = isHome
    ? "text-white/90 hover:text-white"
    : "text-gray-600 hover:text-gray-900";

  // container styles
  const shellOuter = "sticky top-0 z-50";
  const shellInner = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
  // The frosted/rounded bg only on HOME
  const shellBox = isHome
    ? "mt-3 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md"
    : ""; // no bg/box on other pages

  return (
    <header className="relative">
      {/* Top utility bar */}
      <div className="hidden sm:block w-full text-[13px]">
        <div className={`${shellInner} flex items-center justify-between py-2`}>
          <div className={`${topBarText} space-x-6`}>
            <Link to="/visit" className="hover:underline">
              Visit Us
            </Link>
            <Link to="/tickets" className="hover:underline">
              Buy Tickets
            </Link>
          </div>

          <div className={`flex items-center gap-4 ${iconCls}`}>
            <Link
              to="/facebook"
              aria-label="Facebook"
              className="hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.22 22 17.07 22 12.06z" />
              </svg>
            </Link>
            <Link
              to="/twitter"
              aria-label="Twitter/X"
              className="hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.244 2H21l-6.32 7.22L22 22h-6.59l-5.16-6.77L3.9 22H2l6.78-7.75L2 2h6.66l4.65 6.16L18.24 2Zm-2.31 18h2.06L8.16 4H6.02l9.91 16Z" />
              </svg>
            </Link>
            <Link
              to="/behance"
              aria-label="Behance"
              className="hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M9.7 11.2a2.3 2.3 0 1 0 0-4.6H4V19h6.1a3.15 3.15 0 0 0 0-6.3H9.7Zm-3.9-2.8h3.5a1.1 1.1 0 0 1 0 2.2H5.8v-2.2Zm3.6 8.4H5.8v-2.6h3.6a1.3 1.3 0 1 1 0 2.6ZM19.3 8.4c-3.1 0-5.2 2.2-5.2 5.3s2.1 5.3 5.2 5.3c2.4 0 3.9-1.1 4.5-2.9h-2.2c-.3.8-1.1 1.3-2.3 1.3-1.6 0-2.7-1-2.9-2.6h7.5c.1-.3.1-.7.1-1 0-3-2-5.4-4.7-5.4Zm-2.6 4.4c.2-1.4 1.2-2.4 2.6-2.4s2.4 1 2.5 2.4h-5.1ZM16.5 6h4v1.3h-4V6Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={shellOuter}>
        <div className={shellInner}>
          <div className={shellBox}>
            <div className="flex items-center justify-between px-4 py-3">
              {/* Brand */}
              <Link
                to="/"
                className={`${brandCls} font-extrabold tracking-wide text-2xl`}
              >
                Euro Travel
              </Link>

              {/* Desktop menu */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.end}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? linkActive : linkInactive}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                {/* Blog dropdown */}
                <div className="relative" ref={blogRef}>
                  <button
                    onClick={() => setBlogOpen((v) => !v)}
                    aria-expanded={blogOpen}
                    className={`${linkBase} ${linkInactive} flex items-center gap-1`}
                  >
                    BLOG
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        blogOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <x
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.127l3.71-3.896a.75.75 0 1 1 1.08 1.04l-4.24 4.46a.75.75 0 0 1-1.08 0l-4.24-4.46a.75.75 0 0 1 .02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {blogOpen && (
                    <div
                      className={`absolute right-0 mt-2 w-44 rounded-lg border p-2 backdrop-blur-md
                      ${
                        isHome
                          ? "border-white/10 bg-black/80"
                          : "border-gray-200 bg-white shadow-xl"
                      }`}
                    >
                      <Link
                        to="/travel-tips"
                        className={`block px-3 py-2 text-sm rounded-md
                        ${
                          isHome
                            ? "text-white/90 hover:bg-white/10"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Travel Tips
                      </Link>
                      <Link
                        to="/city-guides"
                        className={`block px-3 py-2 text-sm rounded-md
                        ${
                          isHome
                            ? "text-white/90 hover:bg-white/10"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        City Guides
                      </Link>
                      <Link
                        to="/deals-updates"
                        className={`block px-3 py-2 text-sm rounded-md
                        ${
                          isHome
                            ? "text-white/90 hover:bg-white/10"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Deals & Updates
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile burger */}
              <button
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-current focus:outline-none focus:ring-2 focus:ring-white/30"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
                style={{ color: isHome ? "#fff" : "#111827" }} // white on home, gray-900 on others
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {open ? (
                    <path d="M6 6l12 12M6 18L18 6" />
                  ) : (
                    <>
                      <path d="M3 6h18" />
                      <path d="M3 12h18" />
                      <path d="M3 18h18" />
                    </>
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            {open && (
              <>
                {/* Click-away backdrop */}
                <div
                  className="lg:hidden fixed inset-0 z-40 bg-black/30"
                  onClick={() => setOpen(false)}
                />
                <div
                  ref={mobileRef}
                  className={`lg:hidden z-50 border-t px-4 pb-4 relative backdrop-blur-md
                    ${
                      isHome
                        ? "border-white/10 bg-black/60"
                        : "border-gray-200 bg-white/90"
                    }`}
                >
                  <div className="flex flex-col gap-2 pt-3">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        end={item.end}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `py-2 text-sm font-semibold tracking-wide ${
                            isHome
                              ? isActive
                                ? "text-yellow-400"
                                : "text-white/90 hover:text-white"
                              : isActive
                              ? "text-gray-900"
                              : "text-gray-700 hover:text-gray-900"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}

                    {/* Blog collapsible (mobile) */}
                    <details className="group">
                      <summary
                        className={`list-none flex items-center justify-between py-2 text-sm font-semibold tracking-wide cursor-pointer
                          ${isHome ? "text-white/90" : "text-gray-700"}`}
                      >
                        BLOG
                        <svg
                          className="w-4 h-4 transition-transform group-open:rotate-180"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.127l3.71-3.896a.75.75 0 1 1 1.08 1.04l-4.24 4.46a.75.75 0 0 1-1.08 0l-4.24-4.46a.75.75 0 0 1 .02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </summary>
                      <div className="pl-3 space-y-1">
                        <Link
                          to="/blog/tips"
                          onClick={() => setOpen(false)}
                          className={`block px-2 py-2 rounded-md ${
                            isHome
                              ? "text-white/90 hover:bg-white/10"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Travel Tips
                        </Link>
                        <Link
                          to="/blog/guides"
                          onClick={() => setOpen(false)}
                          className={`block px-2 py-2 rounded-md ${
                            isHome
                              ? "text-white/90 hover:bg-white/10"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          City Guides
                        </Link>
                        <Link
                          to="/blog/deals"
                          onClick={() => setOpen(false)}
                          className={`block px-2 py-2 rounded-md ${
                            isHome
                              ? "text-white/90 hover:bg-white/10"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Deals & Updates
                        </Link>
                      </div>
                    </details>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
