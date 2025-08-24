import React from "react";
import { Link } from "react-router-dom";

const navLeft = [
  { label: "Home", to: "/" },
  { label: "Feature", to: "/feature" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
];

const navRight = [
  { label: "Team", to: "/team" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const insta = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=200&auto=format&fit=crop",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1320] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="text-white font-extrabold tracking-wide">ABOUT AGENCY</h4>
            <p className="mt-4 leading-7 text-white/70">
              The world has become so fast paced that people don’t want to stand by
              reading a page of information, they would much rather look at a
              presentation and understand the message. It has come to a point
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-white font-extrabold tracking-wide">NAVIGATION LINKS</h4>
            <div className="mt-4 grid grid-cols-2 gap-1">
              <ul className="space-y-3">
                {navLeft.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.to}
                      className="hover:text-white transition-colors text-white/80"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {navRight.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.to}
                      className="hover:text-white transition-colors text-white/80"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-extrabold tracking-wide">NEWSLETTER</h4>
            <p className="mt-4 leading-7 text-white/70">
              For business professionals caught between high OEM price and mediocre
              print and graphic output.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex overflow-hidden rounded-md border border-white/10"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-white/50"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-yellow-500 px-4 text-[#0b1320] hover:bg-yellow-400 transition"
                aria-label="Subscribe"
                title="Subscribe"
              >
                {/* paper plane icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Instafeed */}
          <div>
            <h4 className="text-white font-extrabold tracking-wide">INSTAFEED</h4>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {insta.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`insta-${i + 1}`}
                  className="h-14 w-14 rounded-sm object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-10 h-px w-full bg-white/10" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">
            Copyright © {year} All rights reserved | This template is made with{" "}
            <span className="text-yellow-400">♥</span> by <span className="text-yellow-400">Colorlib</span>
          </p>

          {/* Socials */}
          <div className="flex items-center gap-6 text-white/70">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.22 22 17.07 22 12.06z"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M18.244 2H21l-6.32 7.22L22 22h-6.59l-5.16-6.77L3.9 22H2l6.78-7.75L2 2h6.66l4.65 6.16L18.24 2Zm-2.31 18h2.06L8.16 4H6.02l9.91 16Z"/>
              </svg>
            </a>
            {/* Dribbble */}
            <a href="#" aria-label="Dribbble" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2Zm6.92 9.06a15.5 15.5 0 00-5.07-.19 24.44 24.44 0 00-1.23-2.54 15.43 15.43 0 004.8-3.14A8.005 8.005 0 0118.92 11.06ZM15 4.64a13.74 13.74 0 01-4.23 2.76 24.21 24.21 0 00-2.1-3.67A7.97 7.97 0 0115 4.64ZM7.6 4.7A22.56 22.56 0 019.9 8.5a31.41 31.41 0 00-6.2.35A8 8 0 017.6 4.7Zm-3.92 7.7a29.53 29.53 0 017.37-.43 30.23 30.23 0 011.24 4.84 24.38 24.38 0 00-7.5 3.11A7.96 7.96 0 013.68 12.4Zm3.5 6.09a22.52 22.52 0 016.74-2.78 26.44 26.44 0 01.91 4.79A7.99 7.99 0 017.18 18.49Zm9.56 1.23a28.1 28.1 0 00-1.02-5.39 13.7 13.7 0 014.1.25 8.02 8.02 0 01-3.08 5.14Z"/>
              </svg>
            </a>
            {/* Behance */}
            <a href="#" aria-label="Behance" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M9.7 11.2a2.3 2.3 0 1 0 0-4.6H4V19h6.1a3.15 3.15 0 0 0 0-6.3H9.7Zm-3.9-2.8h3.5a1.1 1.1 0 0 1 0 2.2H5.8v-2.2Zm3.6 8.4H5.8v-2.6h3.6a1.3 1.3 0 1 1 0 2.6ZM19.3 8.4c-3.1 0-5.2 2.2-5.2 5.3s2.1 5.3 5.2 5.3c2.4 0 3.9-1.1 4.5-2.9h-2.2c-.3.8-1.1 1.3-2.3 1.3-1.6 0-2.7-1-2.9-2.6h7.5c.1-.3.1-.7.1-1 0-3-2-5.4-4.7-5.4Zm-2.6 4.4c.2-1.4 1.2-2.4 2.6-2.4s2.4 1 2.5 2.4h-5.1ZM16.5 6h4v1.3h-4V6Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
