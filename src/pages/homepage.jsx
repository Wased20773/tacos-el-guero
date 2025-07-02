import {useState} from "react"
import { Link } from 'react-router-dom'
import '../styles/App.css'
import '../styles/Hero.css'
import '../styles/HeaderButtons.css'
import '../styles/HomePage.css'
import HeroJPG from "../assets/imgs/hero-image.JPG"
import MenuJPG from '../assets/imgs/menu-tacos.JPG'
import Locationjpg from '../assets/imgs/location.jpg'
import AboutUsJPG from '../assets/imgs/about-us-image.JPG'
import ContactUsjpg from '../assets/imgs/contact-us-image.jpg'

function HomePage() {

  return (
    <div className="homepage-container">
      {/* hero image (z-index: 1-3)*/}
      <div className="hero-container">
        <div className="hero-image">
          <img src={HeroJPG} alt="Food Truck" />
        </div>
        <div className="hero-cover"></div>
        <div className="hero-content">
          <div className="hero-title">Tacos El Guero</div>
        </div>
      </div>

      {/* below hero image */}
      <div className="homepage-context-container">
        <div className="homepage-description-h2">Welcome to Our Food Truck!</div>
        <div className="homepage-description-p">Delicious Mexican foods from Tacos El Guero. Your taste buds will thank you!</div>
        <div className="homepage-description-p">You can find more about us below</div>
      </div>

      {/* Cards for header buttons */}
      <div className="homepage-cards-container">
        <Link to="/menu" className="homepage-card">
          <img className="homepage-card-image" src={MenuJPG} alt="tacos on a plate"/>
          <div className="homepage-card-background"></div>
          <div className="homepage-card-title">Menu</div>
        </Link>
        <Link to="/location" className="homepage-card">
          <img className="homepage-card-image" src={Locationjpg} alt="image of waypoint map"/>
          <div className="homepage-card-background"></div>
          <div className="homepage-card-title">Location</div>
        </Link>
        <Link to="/about-us" className="homepage-card">
          <img className="homepage-card-image" src={AboutUsJPG} alt="owner looking at customer from truck"/>
          <div className="homepage-card-background"></div>
          <div className="homepage-card-title">About Us</div>
        </Link>
        <Link to="/contact-us" className="homepage-card">
          <img className="homepage-card-image" src={ContactUsjpg} alt="image of a telephone"/>
          <div className="homepage-card-background"></div>
          <div className="homepage-card-title">Contact Us</div>
        </Link>
        
      </div>
    </div>
  );
}

export default HomePage;