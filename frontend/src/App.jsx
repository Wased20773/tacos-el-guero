import { useEffect, useState } from 'react'
import axios from "axios";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './styles/App.css'
import Header from './miscellaneous/header.jsx'
import HomePage from './pages/homepage.jsx'
import Menu from './pages/menu.jsx'

import Location from './pages/location.jsx'
import AboutUs from './pages/aboutus.jsx'
import ContactUs from './pages/contactus.jsx'
import Footer from './miscellaneous/Footer.jsx'
import NotFound from './miscellaneous/NotFound.jsx'

const validRoutePaths = [
  "/", "/menu", "/menu/order-one", "/menu/order-two", "/menu/order-three",
  "/menu/order-four", "/menu/order-five", "/menu/order-six",
  "/menu/order-seven", "/menu/order-eight", "/menu/order-nine",
  "/menu/order-ten", "/location", "/about-us", "/contact-us", "/not-found"
];

function App() {
  const location = useLocation();
  const isValidPath = location.pathname !== "/not-found";

  console.log(location.pathname);
  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:8080/api");
  //   console.log(response.data.fruits)
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, [])

  useEffect(() => {
    // hook to the top of the page
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <>
      <div className='app-container'>
      {/* Header (z-index 4-6) */}
      {isValidPath && <Header />}
        
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>

      {/* Currently fixes page to keep footer at bottom */}
      <div></div>

      <div className="homepage-divider-for-footer"></div>
      <Footer />

      </div>
    </>
  )
}

export default App
