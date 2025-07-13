import React from 'react'
import PageNotFoundJPG from '../assets/imgs/page-not-found.JPG'
import { Link, Navigate } from 'react-router-dom'
import "../styles/PageNotFound.css"

const NotFound = () => {

  return (
    <div className='page-not-found-container'>
        <div className='page-not-found-404'>
          <div className='page-not-found-h1'>4</div>
          <img 
            className="page-not-found-image"
            src={PageNotFoundJPG} width={"300px"}
            height={"300px"}
            alt='3 tacos and a lemon in the middle on a plate'
          />
          <div className='page-not-found-h1'>4</div>
        </div>
        <div className='page-not-found-links-card'>
          <div className='page-not-found-h2'>The requested URL could not be found</div>
          <div className='page-not-found-p'>Try these links below</div>
          <div className='page-not-found-quick-links'>
              <Link to="/">homepage</Link>
              <Link className='page-not-found-menu' to="/menu">menu</Link>
              <Link to="/location">location</Link>
              <Link to="/about-us">about us</Link>
          </div>
        </div>
        <div className='page-not-found-separator'></div>
        <div className='page-not-found-contact-card'>
          <div className='page-not-found-p contact'>If you think this is a mistake, please contact us and we will investigate the issue</div>
          <div className='page-not-found-contact'>
              <Link to="/contact-us">contact us</Link>
          </div>
        </div>
    </div>
  )
}

export default NotFound