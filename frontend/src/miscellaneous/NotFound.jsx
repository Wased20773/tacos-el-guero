import React from 'react'
import PageNotFoundJPG from '../assets/imgs/page-not-found.JPG'
import { Link, Navigate } from 'react-router-dom'
import "../styles/PageNotFound.css"

const NotFound = () => {

  return (
    <div className='page-not-found-container'>
        <div className='page-not-found-h1'>404</div>
        <div className='page-not-found-p'>The requested URL could not be found</div>
        <img className="page-not-found-image" src={PageNotFoundJPG} width={"500px"} height={"500px"} alt='3 tacos and a lemon in the middle on a plate'/>
        <div className='page-not-found-p'>Try these links below</div>
            <div className='page-not-found-quick-links'>
                <Link to="/">homepage</Link>
                <Link to="/menu">menu</Link>
                <Link to="/location">location</Link>
                <Link to="/about-us">about us</Link>
            </div>
        <div className='page-not-found-separator'></div>
        <div className='page-not-found-p'>If you think this is a mistake, please contact us through the link below</div>
        <div className='page-not-found-quick-links'>
            <Link to="/contact-us">contact us</Link>
        </div>
    </div>
  )
}

export default NotFound