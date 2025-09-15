import React from 'react'
import orderImg from '../../assets/imgs/taquitos-top.JPG'

const taquitos = () => {
    return (
    <div className="order-container">
        <div className="custome-order-container modal">
            <div className="menu-h2">#14 Taquitos</div>
            <div className='menu-h2-order-description'>Under construction</div>

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
                        <div>undecided</div>
                    </div>
                    <div className="menu-price">
                        <div>Asada</div>
                        <div>undecided</div>
                    </div>
                    <div className="menu-price">
                        <div>Chicken</div>
                        <div>undecided</div>
                    </div>
                    <div className="menu-price">
                        <div>Pastor</div>
                        <div>undecided</div>
                    </div>
                    <div className="menu-price">
                        <div>Tripe</div>
                        <div>undecided</div>
                    </div>
                    <div className="menu-price">
                        <div>Crispy Tripe</div>
                        <div>undecided</div>
                    </div>
                    <div className="menu-price">
                        <div>Buche (Pork Stomach)</div>
                        <div>undecided</div>
                    </div>
                    <div className="menu-price">
                        <div>Vegetarian Burrito</div>
                        <div>undecided</div>
                    </div>
                    <div className="menu-price">
                        <div>Cheese & Beans Burrito</div>
                        <div>undecided</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default taquitos