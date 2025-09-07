import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Menu.css"
import orderImg from '../../assets/imgs/order-eleven-top.JPG'

const OrderEleven = () => {
    return (
    <div className="order-container">
        <div className="custome-order-container modal">
            <div className="menu-h2">#11 Chavindeca</div>
            <div className='menu-h2-order-description'>with beans, cheese, sour cream, lettuce, onion, cilantro, and choice of meat</div>

            <div className='menu-order-details'>
                <img
                    src={orderImg}
                    alt="Order Eleven - Chavindeca"
                    className="menu-order-image"
                    width={"400px"}
                    height={"325px"}
                />
                <div className="menu-modal-order-prices">
                    <div className="menu-h3">Meat</div>
                    <div className="menu-price">
                        <div>Sausage</div>
                        <div>$13.00</div>
                    </div>
                    <div className="menu-price">
                        <div>Asada</div>
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
                        <div>$9.00</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderEleven