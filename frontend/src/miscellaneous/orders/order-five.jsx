import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Menu.css"

const OrderFive = () => {
    return (
    <div className="order-conatiner">
        <Link to={"/menu"} className="back-button top">
            <div className='back-button-arrow'></div>
        </Link>

        <div className="custome-order-container">
            <div className="menu-h2">#5 Quesadilla</div>
            <div className='menu-h2-order-description'>Contains cheese, onion, cilantro, choice of meat, and rice & beans on the side</div>

            <div className="menu-price-container">
                <div className="menu-h3">Meat</div>
                <div className="menu-price">
                    <div>Sausage</div>
                    <div>$ 16.50</div>
                </div>
                <div className="menu-price">
                    <div>Asada Pork</div>
                    <div>$ 16.50</div>
                </div>
                <div className="menu-price">
                    <div>Chicken</div>
                    <div>$ 16.50</div>
                </div>
                <div className="menu-price">
                    <div>Pastor</div>
                    <div>$ 16.50</div>
                </div>
                <div className="menu-price">
                    <div>Tripe</div>
                    <div>$ 16.50</div>
                </div>
                <div className="menu-price">
                    <div>Crispy Tripe</div>
                    <div>$ 18.00</div>
                </div>
                <div className="menu-price">
                    <div>Buche (Pork Stomach)</div>
                    <div>$ 17.25</div>
                </div>
                <div className="menu-price">
                    <div>No Meat</div>
                    <div>$ 11.00</div>
                </div>
            </div>
        </div>

        <Link to={"/menu"} className="back-button bottom">
            <div className='back-button-arrow'></div>
        </Link>
    </div>
  )
}

export default OrderFive