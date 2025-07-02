import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Header from '../src/miscellaneous/header.jsx'
import HomePage from '../src/pages/homepage.jsx'
import Menu from '../src/pages/menu.jsx'
import Location from '../src/pages/location.jsx'
import AboutUs from '../src/pages/aboutus.jsx'
import ContactUs from '../src/pages/contactus.jsx'
import Footer from '../src/miscellaneous/Footer.jsx'

function App() {
  
  return (
    <>
      <div className='app-container'>
      {/* Header (z-index 4-6) */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      {/* Currently fixes page to keep footer at bottom */}
      <div></div>
      <Footer />

      </div>
    </>
  )
}

export default App
