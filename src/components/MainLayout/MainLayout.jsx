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
        // Home header with hero + background
        <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
          <div className="bg-black/40">
            <Navbar />
            <Hero />
          </div>
        </div>
      ) : (
        // Other pages: navbar only (no hero/background)
        <header>
          <Navbar />
        </header>
      )}

      {/* Content */}
      <main className={`flex-1 ${isHome ? "" : "pt-4 min-h-screen"}`}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
