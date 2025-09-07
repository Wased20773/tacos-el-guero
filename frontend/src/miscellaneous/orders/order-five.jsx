import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Menu.css"
import orderImg from '../../assets/imgs/order-five-top.JPG'
const OrderFive = () => {
    return (
    <div className="order-container">
        <div className="custome-order-container modal">
            <div className="menu-h2">#5 Quesadilla</div>
            <div className='menu-h2-order-description'>Contains cheese, onion, cilantro, choice of meat, and rice & beans on the side</div>

            <div className='menu-order-details'>
                <img
                    src={orderImg}
                    alt="Order Five - Quesadilla"
                    className="menu-order-image"
                    width={"400px"}
                    height={"325px"}
                />
                <div className="menu-modal-order-prices">
                    <div className="menu-h3">Meat</div>
                    <div className="menu-price">
                        <div>Sausage</div>
                        <div>$16.50</div>
                    </div>
                    <div className="menu-price">
                        <div>Asada</div>
                        <div>$16.50</div>
                    </div>
                    <div className="menu-price">
                        <div>Chicken</div>
                        <div>$16.50</div>
                    </div>
                    <div className="menu-price">
                        <div>Pastor</div>
                        <div>$16.50</div>
                    </div>
                    <div className="menu-price">
                        <div>Tripe</div>
                        <div>$16.50</div>
                    </div>
                    <div className="menu-price">
                        <div>Crispy Tripe</div>
                        <div>$18.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Buche (Pork Stomach)</div>
                        <div>$17.25</div>
                    </div>
                    <div className="menu-price">
                        <div>No Meat</div>
                        <div>$11.00</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderFive