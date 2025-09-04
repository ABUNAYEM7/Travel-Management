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
                "url('https://i.ibb.co.com/0Vy0Wmmb/pexels-marek-piwnicki-3907296-15964408.jpg')",
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
