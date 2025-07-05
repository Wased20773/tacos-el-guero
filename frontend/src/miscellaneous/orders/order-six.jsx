import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Menu.css"

const OrderSix = () => {
    return (
    <div className="order-conatiner">
        <Link to={"/menu"} className="back-button top">
            <div className='back-button-arrow'></div>
        </Link>

        <div className="custome-order-container">
            <div className="menu-h2">#6 Quesadilla</div>
            <div className='menu-h2-order-description'>Contains cheese, onion, cilantro, choice of meat, rice & beans and a can of soda</div>

            <div className="menu-price-container">
                <div className="menu-h3">Meat</div>
                <div className="menu-price">
                    <div>Sausage</div>
                    <div>$18.50</div>
                </div>
                <div className="menu-price">
                    <div>Asada Pork</div>
                    <div>$18.50</div>
                </div>
                <div className="menu-price">
                    <div>Chicken</div>
                    <div>$18.50</div>
                </div>
                <div className="menu-price">
                    <div>Pastor</div>
                    <div>$18.50</div>
                </div>
                <div className="menu-price">
                    <div>Tripe</div>
                    <div>$18.50</div>
                </div>
                <div className="menu-price">
                    <div>Crispy Tripe</div>
                    <div>$20.00</div>
                </div>
                <div className="menu-price">
                    <div>Buche (Pork Stomach)</div>
                    <div>$19.00</div>
                </div>
                <div className="menu-price">
                    <div>No Meat</div>
                    <div>$12.75</div>
                </div>
            </div>
        </div>

        <Link to={"/menu"} className="back-button bottom">
            <div className='back-button-arrow'></div>
        </Link>
    </div>
  )
}

export default OrderSix