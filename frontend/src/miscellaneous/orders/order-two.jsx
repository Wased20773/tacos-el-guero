import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Menu.css"
import orderImg from '../../assets/imgs/order-two-top.JPG'

const OrderTwo = () => {
  return (
    <div className="order-container">
        <div className="custome-order-container modal">
            <div className="menu-h2">#2 Tacos</div>
            <div className='menu-h2-order-description'>3 tacos with sour cream, cheese, onion & cilantro</div>

            <div className='menu-order-details'>
                <img
                    src={orderImg}
                    alt="Order Two - Tacos"
                    className="menu-order-image"
                    width={"400px"}
                    height={"325px"}
                />
                <div className='menu-modal-order-prices'>
                    <div className="menu-h3">Meat</div>
                    <div className="menu-price">
                        <div>Sausage</div>
                        <div>$9.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Asada</div>
                        <div>$9.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Chicken</div>
                        <div>$9.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Pastor</div>
                        <div>$9.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Tripe</div>
                        <div>$9.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Crispy Tripe</div>
                        <div>$11.25</div>
                    </div>
                    <div className="menu-price">
                        <div>Buche (Pork Stomach)</div>
                        <div>$9.75</div>
                    </div>
                    <div className="menu-price">
                        <div>No Meat (rice, beans, onion, cilantro, sour cream & cheese)</div>
                        <div>$6.75</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderTwo