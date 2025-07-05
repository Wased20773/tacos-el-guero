import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Menu.css"

const OrderThree = () => {
  return (
    <div className="order-conatiner">
        <Link to={"/menu"} className="back-button top">
            <div className='back-button-arrow'></div>
        </Link>

        <div className="custome-order-container">
            <div className="menu-h2">#3 Nachos</div>
            <div className='menu-h2-order-description'>Contains tortialla chip, beans, onion, cilantro, sour cream, cheese, and choice of meat</div>

            <div className="menu-price-container">
                <div className="menu-h3">Meat</div>
                <div className="menu-price">
                    <div>Sausage</div>
                    <div>$13.00</div>
                </div>
                <div className="menu-price">
                    <div>Asada Pork</div>
                    <div>$13.00</div>
                </div>
                <div className="menu-price">
                    <div>Chicken</div>
                    <div>$13.00</div>
                </div>
                <div className="menu-price">
                    <div>Pastor</div>
                    <div>$13.00</div>
                </div>
                <div className="menu-price">
                    <div>Tripe</div>
                    <div>$13.00</div>
                </div>
                <div className="menu-price">
                    <div>Crispy Tripe</div>
                    <div>$14.50</div>
                </div>
                <div className="menu-price">
                    <div>Buche (Pork Stomach)</div>
                    <div>$13.75</div>
                </div>
                <div className="menu-price">
                    <div>No Meat</div>
                    <div>$8.00</div>
                </div>
            </div>
        </div>

        <Link to={"/menu"} className="back-button bottom">
            <div className='back-button-arrow'></div>
        </Link>
    </div>
  )
}

export default OrderThree