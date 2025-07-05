import React from 'react'
import { Link } from 'react-router-dom'
import LogoPrototype from '../../assets/logo-prototype.png'

const LogoButton = ( { setLinkClicked } ) => {
  return (
    <Link to={"/"} className='logo-button'>
        <img
            src={LogoPrototype}
            width={"45px"}
            height={"45px"}
            onClick={() => setLinkClicked((prev) => (!prev))}
    /></Link>
  )
}

export default LogoButton