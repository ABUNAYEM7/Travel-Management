import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Hero from "../Hero/Hero";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {isHome ? (
        // ✅ Homepage: shared hero background
        <header className="relative">
          {/* background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop')",
            }}
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-black/45" />
          {/* content */}
          <div className="relative">
            <Navbar transparent /> {/* 👈 pass prop to make it transparent */}
            <Hero overlay={false} /> {/* 👈 disable Hero’s own overlay */}
          </div>
        </header>
      ) : (
        // ✅ Other pages: normal navbar with background
        <header>
          <Navbar /> {/* no transparent prop → has bg */}
        </header>
      )}

      {/* Main content */}
      <main className="flex-1 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
