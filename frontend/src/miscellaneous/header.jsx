import { Link } from "react-router-dom";

function Header() {
    return <>
      {/* Header (z-index 4-6) */}
      <div className="header-container">
        <div className="header-background"></div>
        <div className="header-buttons-group">
          <Link to="/" className="header-button">Homepage</Link>
          <Link to="/menu" className="header-button-menu">Menu</Link>
          <Link to="/location" className="header-button">Location</Link>
          <Link to="/about-us" className="header-button">About Us</Link>
          <Link to="/contact-us" className="header-button">Contact Us</Link>
        </div>
      </div>
      
    </>
}

export default Header