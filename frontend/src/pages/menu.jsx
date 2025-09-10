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

// Drink component
import DrinkComp from '../miscellaneous/drinks/drinkComp'

import MenuOrderArtTopPNG from '../assets/imgs/menu-order-art-top.png'
import Modal from '../miscellaneous/orders/modal'

function Menu() {
    const [selectedItem, setSelectedItem] = useState(null);

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

    // Full list of drinks with their respective image, name, price, description, and component
    const cans = [
        {id: 12, name: "Coke", img: OrderOneJPG, price: "$2.00", description: "Coca-Cola can, crispy refreshing original taste.", component: DrinkComp },
        {id: 13, name: "Fanta", img: OrderOneJPG, price: "$2.00", description: "crisp orange soda can, natural flavors.", component: DrinkComp },
        {id: 14, name: "Sprite", img: OrderOneJPG, price: "$2.00", description: "cool and crisp lemon-lime soda can, natural flavors.", component: DrinkComp },
        {id: 15, name: "Mountain Dew", img: OrderOneJPG, price: "$2.00", description: "Sweet lemon flavor, contains caffeine.", component: DrinkComp },
        {id: 16, name: "Pepsi", img: OrderOneJPG, price: "$2.00", description: "classic pepsi can, contains caffeine.", component: DrinkComp },
        {id: 17, name: "Diet Coke", img: OrderOneJPG, price: "$2.00", description: "sugar free, no calorie Coca-Cola can, ", component: DrinkComp },
    ];

    const bottles = [
        {id: 18, name: "Coke", img: OrderOneJPG, price: "$5.00", description: "Classic Coca-Cola in a bottle.", component: DrinkComp },
        {id: 19, name: "Mandarin", img: OrderOneJPG, price: "$4.00", description: "Sweet citrusy mandarin orange, natural sugar.", component: DrinkComp },
        {id: 20, name: "Tamarindo", img: OrderOneJPG, price: "$4.00", description: "A sweet tamarind soda, naturaly flavored.", component: DrinkComp },
        {id: 21, name: "Pineapple", img: OrderOneJPG, price: "$4.00", description: "Refreshing pineapple soda, sweet refreshing flavors.", component: DrinkComp },
        {id: 22, name: "Apple", img: OrderOneJPG, price: "$4.00", description: "Crisp and light fizzy apple soda.", component: DrinkComp },
        {id: 23, name: "Sangria", img: OrderOneJPG, price: "$4.00", description: "Citric fresh grape soda, mocking the traditional alcoholic Mexican sangria-flavor, non-alcoholic.", component: DrinkComp },
    ];

    const aguaFrescas = [
        {id: 24, name: "Horchata", img: OrderOneJPG, price: "$4.00", description: "Sweet rice drink with cinnamon and vanilla.", component: DrinkComp },
        {id: 25, name: "Jamaica", img: OrderOneJPG, price: "$4.00", description: "Hibiscus tea with a tart, refreshing flavor.", component: DrinkComp },
    ];

    // Function to handle opening and closing the modal
    const openModal = (item) => setSelectedItem(item);
    const closeModal = () => setSelectedItem(null);
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

                <div className="custome-order-container drinks">
                    <div className="menu-h2 menu-drinks-header">Drinks</div>
                    <div className="menu-h3">Cans (12oz)</div>
                    <div className="menu-drink-card-container">
                        {/* Render cans */}
                        {cans.map((can) => (
                            <div
                                key={can.id}
                                className="menu-drink-card"
                                onClick={() => openModal(can)}
                            >
                                <img
                                    src={can.img}
                                    className="menu-drink-card-image"
                                />
                                <div className="menu-drink-card-info">
                                    <div>
                                        <div className="drink-name">{can.name}</div>
                                        <div className="drink-description">{can.description}</div>
                                    </div>
                                    <div className="drink-price">{can.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-h3">Bottles (made in Mexico)</div>
                    <div className="menu-drink-card-container">
                        {/* Render bottles */}
                        {bottles.map((bottle) => (
                            <div
                                key={bottle.id}
                                className="menu-drink-card"
                                onClick={() => openModal(bottle)}
                            >
                                <img
                                    src={bottle.img}
                                    className="menu-drink-card-image"
                                />
                                <div className="menu-drink-card-info">
                                    <div>
                                        <div className="drink-name">{bottle.name}</div>
                                        <div className="drink-description">{bottle.description}</div>
                                    </div>
                                    <div className="drink-price">{bottle.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-h3">Agua Frescas</div>
                    <div className="menu-drink-card-container">
                        {/* Render agua frescas */}
                        {aguaFrescas.map((aguaFresca) => (
                            <div
                                key={aguaFresca.id}
                                className="menu-drink-card"
                                onClick={() => openModal(aguaFresca)}
                            >
                                <img
                                    src={aguaFresca.img}
                                    className="menu-drink-card-image"
                                />
                                <div className="menu-drink-card-info">
                                    <div>
                                        <div className="drink-name">{aguaFresca.name}</div>
                                    <div className="drink-description">{aguaFresca.description}</div>
                                    </div>
                                    <div className="drink-price">{aguaFresca.price}</div>
                                </div>
                            </div>
                        ))}
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

                {/* Modal when item is clicked */}
                {selectedItem && (
                    <Modal 
                        closeModal={closeModal}
                        item={selectedItem}
                    />
                )}

                <div className='menu-order-background-graphic-flipped'></div>
            </div>
        </>
    )
}

export default Menu;