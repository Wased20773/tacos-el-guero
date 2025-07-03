import { useEffect, useState } from 'react'
import axios from "axios";
import { Routes, Route, useLocation } from 'react-router-dom'
import './styles/App.css'
import Header from './miscellaneous/header.jsx'
import HomePage from './pages/homepage.jsx'
import Menu from './pages/menu.jsx'
import OrderOne from './miscellaneous/orders/order-one.jsx'
import OrderTwo from './miscellaneous/orders/order-two.jsx'
import OrderThree from './miscellaneous/orders/order-three.jsx'
import OrderFour from './miscellaneous/orders/order-four.jsx'
import OrderFive from './miscellaneous/orders/order-five.jsx'
import OrderSix from './miscellaneous/orders/order-six.jsx'
import OrderSeven from './miscellaneous/orders/order-seven.jsx'
import OrderEight from './miscellaneous/orders/order-eight.jsx'
import OrderNine from './miscellaneous/orders/order-nine.jsx'
import OrderTen from './miscellaneous/orders/order-ten.jsx'
import Location from './pages/location.jsx'
import AboutUs from './pages/aboutus.jsx'
import ContactUs from './pages/contactus.jsx'
import Footer from './miscellaneous/Footer.jsx'
import NotFound from './miscellaneous/NotFound.jsx'

const validRoutePaths = [
  "/", "/menu", "/menu/order-one", "/menu/order-two", "/menu/order-three",
  "/menu/order-four", "/menu/order-five", "/menu/order-six",
  "/menu/order-seven", "/menu/order-eight", "/menu/order-nine",
  "/menu/order-ten", "/location", "/about-us", "/contact-us"
];


function App() {
  const [ notFound, setNotFound ] = useState(false)
  const location = useLocation();
  const isValidPath = validRoutePaths.includes(location.pathname);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits)
  };

  useEffect(() => {
    fetchAPI();
  }, [])

  return (
    <>
      <div className='app-container'>
      {/* Header (z-index 4-6) */}
      {isValidPath && <Header />}
        
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
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Currently fixes page to keep footer at bottom */}
      <div></div>
      <Footer />

      </div>
    </>
  )
}

export default App
