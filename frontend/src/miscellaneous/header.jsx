import { Link, useLocation } from "react-router-dom";
import BurgerButton from "./icons/BurgerButton.jsx";
import LogoButton from "./icons/LogoButton.jsx";
import { useEffect, useState } from "react";

function Header() {
  const [ openHeader, setOpenHeader ] = useState(false);
  const [ linkClicked, setLinkClicked ] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // if pathname is modified/touched, then close the header
    console.log("link: ", linkClicked);
    console.log("header: ", openHeader);

    // Check if the header is even open
    if (!openHeader) {
      setLinkClicked(false);
      return;
    }

    // Check if any link is clicked AND if the header is open
    if (linkClicked && openHeader) {
      setOpenHeader(false);
      setLinkClicked(false);
    } else { // else just open the header
      setOpenHeader(true);
    }

    // Check if we have clicked outside the header
    const handleClickOutside = (event) => {
      if (openHeader && !event.target.closest(".header-container")) {
        setOpenHeader(false);
        setLinkClicked(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };

  })

  return <>
    {/* Header (z-index 4-6) */}
    <div className="header-container">
      <div className="header-background"></div>
      <BurgerButton 
        size={"50px"}
        color={"white"}
        strokeWidth={"2"}
        setOpenHeader={setOpenHeader}
      />
      {/* <LogoButton setLinkClicked={setLinkClicked}/> */}
      <div className={`header-buttons-group ${openHeader ? "header-open" : "header-close" }`}>
        <div className="header-button-links-group">
          <LogoButton setLinkClicked={setLinkClicked} className="header-logo-big-screen"/>
          <Link to="/" className={`header-button ${location.pathname === "/" ? "active-header" : ""}`} onClick={() => setLinkClicked((prev) => (!prev))}>Homepage</Link>
          <Link to="/menu" className={`header-button-menu ${location.pathname === "/menu" ? "active-header" : ""}`} onClick={() => setLinkClicked((prev) => (!prev))}>Menu</Link>
          <Link to="/location" className={`header-button ${location.pathname === "/location" ? "active-header" : ""}`} onClick={() => setLinkClicked((prev) => (!prev))}>Location</Link>
          <Link to="/about-us" className={`header-button ${location.pathname === "/about-us" ? "active-header" : ""}`} onClick={() => setLinkClicked((prev) => (!prev))}>About Us</Link>
        </div>
        {/* <Link to="/contact-us" className={`header-button ${location.pathname === "/contact-us" ? "active-header" : ""}`}>Contact Us</Link> */}
      </div>
    </div>
    
  </>
}

export default Header