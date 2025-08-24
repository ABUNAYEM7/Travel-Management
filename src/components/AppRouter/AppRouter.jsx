import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'
import HomePage from '../Pages/HomePage/HomePage'
import About from '../Pages/About/About'
import Packages from '../Pages/Packages/Packages'
import Hotels from '../Pages/Hotels/Hotels'
import Insurance from '../Pages/Insurance/Insurence'
import Contact from '../Pages/Contact/Contact'
import Blog from '../Pages/Blog/Blog'

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
        <Route path="blog" element={<Blog />} />

        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  )
}

export default AppRouter
