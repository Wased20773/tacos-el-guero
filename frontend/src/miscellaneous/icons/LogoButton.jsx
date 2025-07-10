import React from 'react';
import { Link } from 'react-router-dom';
import LogoPrototype from '../../assets/logo-prototype.png';

const LogoButton = ({ setLinkClicked }) => {
  return (
    <div className='logo-button-container'>
      <Link 
        to="/" 
        className='logo-button-link' 
        onClick={() => setLinkClicked((prev) => !prev)}
      >
        <img
          className='logo-button-image'
          src={LogoPrototype}
          alt="Logo"
        />
      </Link>
    </div>
  );
};

export default LogoButton;
