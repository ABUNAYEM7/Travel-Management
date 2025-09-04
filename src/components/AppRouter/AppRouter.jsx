import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";
import Packages from "../Pages/Packages/Packages";
import Hotels from "../Pages/Hotels/Hotels";
import Insurance from "../Pages/Insurance/Insurence";
import Contact from "../Pages/Contact/Contact";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import TravelTips from "../Pages/Blog/TravelTips";
import CityGuides from "../Pages/Blog/CityGuides";
import DealsAndUpdate from "../Pages/Blog/DealsAndUpdate";
import HotelDetails from "../Pages/HotelDetails/HotelDetails.JSX";

const AppRouter = () => {
  return (
    <Routes>
      {/* Layout wraps all pages */}
      <Route path="/" element={<MainLayout />}>
        {/* This renders at "/" inside MainLayout's <Outlet /> */}
        <Route index element={<HomePage />} />

        {/* Other pages (note: no leading slash on child paths) */}
        <Route path="about" element={<About />} />
        <Route path="packages" element={<Packages />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/travel-tips" element={<TravelTips />} />
        <Route path="/city-guides" element={<CityGuides />} />
        <Route path="/deals-updates" element={<DealsAndUpdate />} />
        <Route path="packages/:id" element={<PackageDetails />} />
        <Route path="hotels/:id" element={<HotelDetails />} />
        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
