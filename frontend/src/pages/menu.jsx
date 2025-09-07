import { useState } from 'react'
import '../styles/Menu.css'

// Order images
import OrderOneJPG from '../assets/imgs/order-one.JPG'
import OrderTwoJPG from '../assets/imgs/order-two.JPG'
import OrderThreeJPG from '../assets/imgs/order-three.JPG'
import OrderFourJPG from '../assets/imgs/order-four.JPG'
import OrderFiveJPG from '../assets/imgs/order-five.JPG'
import OrderSixJPG from '../assets/imgs/order-six.JPG'
import OrderSevenJPG from '../assets/imgs/order-seven.JPG'
import OrderEightJPG from '../assets/imgs/order-eight.JPG'
import OrderNineJPG from '../assets/imgs/order-nine.JPG'
import OrderTenJPG from '../assets/imgs/order-ten.JPG'
import OrderElevenJPG from '../assets/imgs/order-eleven.JPG'

// Order components
import OrderOne from '../miscellaneous/orders/order-one'
import OrderTwo from '../miscellaneous/orders/order-two'
import OrderThree from '../miscellaneous/orders/order-three'
import OrderFour from '../miscellaneous/orders/order-four'
import OrderFive from '../miscellaneous/orders/order-five'
import OrderSix from '../miscellaneous/orders/order-six'
import OrderSeven from '../miscellaneous/orders/order-seven'
import OrderEight from '../miscellaneous/orders/order-eight'
import OrderNine from '../miscellaneous/orders/order-nine'
import OrderTen from '../miscellaneous/orders/order-ten'
import OrderEleven from '../miscellaneous/orders/order-eleven'

import MenuOrderArtTopPNG from '../assets/imgs/menu-order-art-top.png'
import Modal from '../miscellaneous/orders/modal'

function Menu() {
    const [selectedOrder, setSelectedOrder] = useState(null);



    // Full list of orders with their respective image, title, and component
    const orders = [
        { id: 1, title: "Order 1", img: OrderOneJPG, component: OrderOne },
        { id: 2, title: "Order 2", img: OrderTwoJPG, component: OrderTwo },
        { id: 3, title: "Order 3", img: OrderThreeJPG, component: OrderThree },
        { id: 4, title: "Order 4", img: OrderFourJPG, component: OrderFour },
        { id: 5, title: "Order 5", img: OrderFiveJPG, component: OrderFive },
        { id: 6, title: "Order 6", img: OrderSixJPG, component: OrderSix },
        { id: 7, title: "Order 7", img: OrderSevenJPG, component: OrderSeven },
        { id: 8, title: "Order 8", img: OrderEightJPG, component: OrderEight },
        { id: 9, title: "Order 9", img: OrderNineJPG, component: OrderNine },
        { id: 10, title: "Order 10", img: OrderTenJPG, component: OrderTen },
        { id: 11, title: "Order 11", img: OrderElevenJPG, component: OrderEleven },
    ];

    // State to track which order is selected
    const SelectedOrderComponent = selectedOrder !== null ? orders[selectedOrder - 1]?.component : null;

    // Function to handle opening and closing the modal
    const openModal = (order) => setSelectedOrder(order);
    const closeModal = () => setSelectedOrder(null);
    return (
        <>
            <div className="menu-container">
                <div>Menu</div>

                <div className="custome-order-container">
                    <div className="menu-h2">Tacos with onion & cilantro</div>

                    <div className="menu-price-container">
                        <div className="menu-h3">Meat</div>
                        <div className="menu-price">
                            <div>Sausage</div>
                            <div>$2.50</div>
                        </div>
                        <div className="menu-price">
                            <div>Asada</div>
                            <div>$2.50</div>
                        </div>
                        <div className="menu-price">
                            <div>Chicken</div>
                            <div>$2.50</div>
                        </div>
                        <div className="menu-price">
                            <div>Pastor</div>
                            <div>$2.50</div>
                        </div>
                        <div className="menu-price">
                            <div>Tripe</div>
                            <div>$2.50</div>
                        </div>
                        <div className="menu-price">
                            <div>Crispy Tripe</div>
                            <div>$3.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Buche (Pork Stomach)</div>
                            <div>$2.75</div>
                        </div>
                        <div className="menu-price">
                            <div>Vegetarian Tacos (rice, beans, onions and cilantro)</div>
                            <div>$1.75</div>
                        </div>
                    </div>

                    <div className="menu-h2">Our Toppings</div>
                    <div className="menu-price-container">
                        <div className="menu-h3">Each Taco</div>
                        <div className="menu-price">
                            <div>Sour Cream</div>
                            <div>$0.25</div>
                        </div>
                        <div className="menu-price">
                            <div>Cheese</div>
                            <div>$0.25</div>
                        </div>
                        <div className="menu-price">
                            <div>Avocado</div>
                            <div>$0.25</div>
                        </div>
                        <div className="menu-price">
                            <div>Tomato</div>
                            <div>$0.25</div>
                        </div>
                        <div className="menu-price">
                            <div>Lettuce</div>
                            <div>$0.25</div>
                        </div>
                    </div>

                    <div className="menu-price-container">
                        <div className="menu-h3">Burrito, Quesadilla, Nachos</div>
                        <div className="menu-price">
                            <div>Avocado</div>
                            <div>$1.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Tomato</div>
                            <div>$1.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Lettuce</div>
                            <div>$1.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Grilled Jalapeno</div>
                            <div>(each)$1.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Side of Grilled Onions</div>
                            <div>$2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Side of Rice and Beans</div>
                            <div>$7.50</div>
                        </div>
                        <div className="menu-price">
                            <div>One side of rice: small</div>
                            <div>$3.75</div>
                        </div>
                    </div>
                </div>

                <div className="custome-order-container">
                    <div className="menu-h2 menu-drinks-header">Drinks</div>

                    <div className="menu-price-container">
                        <div className="menu-h3">Cans</div>
                        <div className="menu-price">
                            <div>Coke</div>
                            <div>$2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Fanta</div>
                            <div>$2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Sprite</div>
                            <div>$2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Moutain Dew</div>
                            <div>$2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Pepsi</div>
                            <div>$2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Diet Coke</div>
                            <div>$2.00</div>
                        </div>
                        <div className="menu-h3">Bottles</div>
                        <div className="menu-price">
                            <div>Coke</div>
                            <div>$5.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Mandarin</div>
                            <div>$4.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Tamarind</div>
                            <div>$4.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Pinapple</div>
                            <div>$4.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Apple</div>
                            <div>$4.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Sangria</div>
                            <div>$4.00</div>
                        </div>
                    </div>
                </div>

                <div className='menu-order-background-graphic'>
                    <img
                        src={MenuOrderArtTopPNG}
                        className='menu-order-art-top'
                        width={"270px"}
                        height={"370px"}
                    />
                </div>
                <div className="menu-order-numbers-container">
                    <div className="menu-order-background">
                    <div className="menu-h3 orders">Order Numbers</div>
                    <div className="menu-order-numbers-inner-container">
                        {orders.map((order) => (
                        <div
                            key={order.id}
                            className="menu-order-card"
                            onClick={() => openModal(order)}
                        >
                            <img
                            src={order.img}
                            alt={order.title}
                            className="menu-order-card-image"
                            />
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">{order.title}</div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Modal when order is clicked */}
                {selectedOrder && (
                    <Modal 
                        closeModal={closeModal}
                        order={selectedOrder}
                    >
                    {SelectedOrderComponent && <SelectedOrderComponent />}
                    </Modal>
                )}

                <div className='menu-order-background-graphic-flipped'></div>
            </div>
        </>
    )
}

export default Menu;