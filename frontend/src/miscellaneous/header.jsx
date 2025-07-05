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

    if (!openHeader) {
      return;
    }

    if (linkClicked && openHeader) {
      setOpenHeader(false);
      setLinkClicked(false);
    } else {
      setOpenHeader(true);
    }
  }, [linkClicked])

  return <>
    {/* Header (z-index 4-6) */}
    <div className="header-container">
      <div className="header-background"></div>
      <div className="burger-container">
        <BurgerButton 
          size={"50px"}
          color={"white"}
          strokeWidth={"2"}
          setOpenHeader={setOpenHeader}
        />
        <LogoButton setLinkClicked={setLinkClicked}/>
      </div>
      <div className={`header-buttons-group ${openHeader ? "header-open" : "header-close" }`}>
        <Link to="/" className={`header-button ${location.pathname === "/" ? "active-header" : ""}`} onClick={() => setLinkClicked((prev) => (!prev))}>Homepage</Link>
        <Link to="/menu" className={`header-button-menu ${location.pathname === "/menu" ? "active-header" : ""}`} onClick={() => setLinkClicked((prev) => (!prev))}>Menu</Link>
        <Link to="/location" className={`header-button ${location.pathname === "/location" ? "active-header" : ""}`} onClick={() => setLinkClicked((prev) => (!prev))}>Location</Link>
        <Link to="/about-us" className={`header-button ${location.pathname === "/about-us" ? "active-header" : ""}`} onClick={() => setLinkClicked((prev) => (!prev))}>About Us</Link>
        {/* <Link to="/contact-us" className={`header-button ${location.pathname === "/contact-us" ? "active-header" : ""}`}>Contact Us</Link> */}
      </div>
    </div>
    
  </>
}

export default Header