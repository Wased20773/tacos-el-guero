import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Header from '../src/miscellaneous/header.jsx'
import HomePage from '../src/pages/homepage.jsx'
import Menu from '../src/pages/menu.jsx'
import OrderOne from '../src/miscellaneous/orders/order-one.jsx'
import OrderTwo from '../src/miscellaneous/orders/order-two.jsx'
import OrderThree from '../src/miscellaneous/orders/order-three.jsx'
import OrderFour from '../src/miscellaneous/orders/order-four.jsx'
import OrderFive from '../src/miscellaneous/orders/order-five.jsx'
import OrderSix from '../src/miscellaneous/orders/order-six.jsx'
import OrderSeven from '../src/miscellaneous/orders/order-seven.jsx'
import OrderEight from '../src/miscellaneous/orders/order-eight.jsx'
import OrderNine from '../src/miscellaneous/orders/order-nine.jsx'
import OrderTen from '../src/miscellaneous/orders/order-ten.jsx'
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

        {/* Menu pages */}
        <Route path="/menu/order-one" element={<OrderOne />} />
        <Route path="/menu/order-two" element={<OrderTwo />} />
        <Route path="/menu/order-three" element={<OrderThree />} />
        <Route path="/menu/order-four" element={<OrderFour />} />
        <Route path="/menu/order-five" element={<OrderFive />} />
        <Route path="/menu/order-six" element={<OrderSix />} />
        <Route path="/menu/order-seven" element={<OrderSeven />} />
        <Route path="/menu/order-eight" element={<OrderEight />} />
        <Route path="/menu/order-nine" element={<OrderNine />} />
        <Route path="/menu/order-ten" element={<OrderTen />} />

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
