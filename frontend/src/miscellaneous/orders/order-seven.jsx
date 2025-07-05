import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Menu.css"

const OrderSeven = () => {
    return (
    <div className="order-conatiner">
        <Link to={"/menu"} className="back-button top">
            <div className='back-button-arrow'></div>
        </Link>

        <div className="custome-order-container">
            <div className="menu-h2">#7 Torta</div>
            <div className='menu-h2-order-description'>Contains mayonnaise, beans, cheese, onion, cilantro, tomato, avocado, lettuce, and choice of meat</div>

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
                    <div>$14.00</div>
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

export default OrderSeven