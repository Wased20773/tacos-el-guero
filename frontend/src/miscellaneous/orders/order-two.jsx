import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Menu.css"

const OrderTwo = () => {
  return (
    <div className="order-conatiner">
        <Link to={"/menu"} className="back-button top">
            <div className='back-button-arrow'></div>
        </Link>

        <div className="custome-order-container">
            <div className="menu-h2">#2 Tacos</div>
            <div className='menu-h2-order-description'>3 tacos with sour cream, cheese, onion & cilantro</div>

            <div className="menu-price-container">
                <div className="menu-h3">Meat</div>
                <div className="menu-price">
                    <div>Sausage</div>
                    <div>$ 9.00</div>
                </div>
                <div className="menu-price">
                    <div>Asada Pork</div>
                    <div>$ 9.00</div>
                </div>
                <div className="menu-price">
                    <div>Chicken</div>
                    <div>$ 9.00</div>
                </div>
                <div className="menu-price">
                    <div>Pastor</div>
                    <div>$ 9.00</div>
                </div>
                <div className="menu-price">
                    <div>Tripe</div>
                    <div>$ 9.00</div>
                </div>
                <div className="menu-price">
                    <div>Crispy Tripe</div>
                    <div>$ 11.25</div>
                </div>
                <div className="menu-price">
                    <div>Buche (Pork Stomach)</div>
                    <div>$ 9.75</div>
                </div>
                <div className="menu-price">
                    <div>No Meat (rice, beans, onion, cilantro, sour cream & cheese)</div>
                    <div>$ 6.75</div>
                </div>
            </div>
        </div>

        <Link to={"/menu"} className="back-button bottom">
            <div className='back-button-arrow'></div>
        </Link>
    </div>
  )
}

export default OrderTwo