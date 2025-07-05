import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Menu.css'

const OrderOne = () => {
  return (
    <div className="order-conatiner">
      <Link to={"/menu"} className="back-button top">
        <div className='back-button-arrow'></div>
      </Link>
      <div className="custome-order-container">
        <div className="menu-h2">#1 Tacos</div>
        <div className='menu-h2-order-description'>3 tacos regulares with onion & cilantro</div>

        <div className="menu-price-container">
            <div className="menu-h3">Meat</div>
            <div className="menu-price">
                <div>Sausage</div>
                <div>$7.50</div>
            </div>
            <div className="menu-price">
                <div>Asada Pork</div>
                <div>$7.50</div>
            </div>
            <div className="menu-price">
                <div>Chicken</div>
                <div>$7.50</div>
            </div>
            <div className="menu-price">
                <div>Pastor</div>
                <div>$7.50</div>
            </div>
            <div className="menu-price">
                <div>Tripe</div>
                <div>$7.50</div>
            </div>
            <div className="menu-price">
                <div>Crispy Tripe</div>
                <div>$9.00</div>
            </div>
            <div className="menu-price">
                <div>Buche (Pork Stomach)</div>
                <div>$8.25</div>
            </div>
            <div className="menu-price">
                <div>No Meat (rice, beans, onion & cilantro)</div>
                <div>$5.25</div>
            </div>
        </div>
      </div>
    

      <Link to={"/menu"} className="back-button bottom">
        <div className='back-button-arrow'></div>
      </Link>
    </div>
  )
}

export default OrderOne