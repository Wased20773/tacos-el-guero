import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import HomePage from '../src/pages/homepage.jsx'
import Menu from '../src/pages/menu.jsx'
import Location from '../src/pages/location.jsx'
import AboutUs from '../src/pages/aboutus.jsx'
import ContactUs from '../src/pages/contactus.jsx'
import Footer from '../src/miscellaneous/Footer.jsx'
import {usePage} from '../src/context/PageProvider.jsx'

function App() {
  const {page} = usePage();

  // For testing purposes
  useEffect(() => {
    console.log("Current page:", page);
  } , [page]);
  
  return (
    <>
      <div className='app-container'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      {/* {page === "homepage" ? (
        <HomePage />
      ) : page === "menu" ? (
        <Menu />
      ) : page == "location" ?
      <Location />
      : page == "about us" ?
        <AboutUs />
      : page == "contact us" ?
        <ContactUs />
      : null} */}
      <Footer />

      </div>
    </>
  )
}

export default App
