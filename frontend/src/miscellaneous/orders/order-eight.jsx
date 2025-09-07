import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Menu.css"
import orderImg from '../../assets/imgs/order-eight-top.JPG'

const OrderEight = () => {
    return (
    <div className="order-container">
        <div className="custome-order-container modal">
            <div className="menu-h2">#8 Burrito</div>
            <div className='menu-h2-order-description'>Burritos come with rice & beans, onion, cilantro, sour cream & cheese, and choice of meat</div>

            <div className='menu-order-details'>
                <img
                    src={orderImg}
                    alt="Order Eight - Burrito"
                    className="menu-order-image"
                    width={"400px"}
                    height={"325px"}
                />
                <div className="menu-modal-order-prices">
                    <div className="menu-h3">Meat</div>
                    <div className="menu-price">
                        <div>Sausage</div>
                        <div>$10.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Asada</div>
                        <div>$10.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Chicken</div>
                        <div>$10.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Pastor</div>
                        <div>$10.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Tripe</div>
                        <div>$10.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Crispy Tripe</div>
                        <div>$11.50</div>
                    </div>
                    <div className="menu-price">
                        <div>Buche (Pork Stomach)</div>
                        <div>$10.75</div>
                    </div>
                    <div className="menu-price">
                        <div>Vegetarian Burrito</div>
                        <div>$7.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Cheese & Beans Burrito</div>
                        <div>$5.50</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderEight