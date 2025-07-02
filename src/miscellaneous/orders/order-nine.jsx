import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Menu.css"

const OrderNine = () => {
    return (
    <div className="order-conatiner">
        <Link to={"/menu"} className="back-button top">
            <div className='back-button-arrow'></div>
        </Link>

        <div className="custome-order-container">
            <div className="menu-h2">#9 Burrito</div>
            <div className='menu-h2-order-description'>Burritos come with rice & beans, onion, cilantro, sour cream & cheese, and choice of meat</div>

            <div className="menu-price-container">
                <div className="menu-h3">Meat</div>
                <div className="menu-price">
                    <div>Sausage</div>
                    <div>$ 10.00</div>
                </div>
                <div className="menu-price">
                    <div>Asada Pork</div>
                    <div>$ 10.00</div>
                </div>
                <div className="menu-price">
                    <div>Chicken</div>
                    <div>$ 10.00</div>
                </div>
                <div className="menu-price">
                    <div>Pastor</div>
                    <div>$ 10.00</div>
                </div>
                <div className="menu-price">
                    <div>Tripe</div>
                    <div>$ 10.00</div>
                </div>
                <div className="menu-price">
                    <div>Crispy Tripe</div>
                    <div>$ 11.50</div>
                </div>
                <div className="menu-price">
                    <div>Buche (Pork Stomach)</div>
                    <div>$ 10.75</div>
                </div>
                <div className="menu-price">
                    <div>Vegetarian Burrito</div>
                    <div>$ 7.00</div>
                </div>
                <div className="menu-price">
                    <div>Cheese & Beans Burrito</div>
                    <div>$ 5.50</div>
                </div>
            </div>
        </div>

        <Link to={"/menu"} className="back-button bottom">
            <div className='back-button-arrow'></div>
        </Link>
    </div>
  )
}

export default OrderNine