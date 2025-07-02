import { Link } from 'react-router-dom'
import '../styles/Menu.css'

function Menu() {
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
                            <div>$ 2.50</div>
                        </div>
                        <div className="menu-price">
                            <div>Asada Pork</div>
                            <div>$ 2.50</div>
                        </div>
                        <div className="menu-price">
                            <div>Chicken</div>
                            <div>$ 2.50</div>
                        </div>
                        <div className="menu-price">
                            <div>Pastor</div>
                            <div>$ 2.50</div>
                        </div>
                        <div className="menu-price">
                            <div>Tripe</div>
                            <div>$ 2.50</div>
                        </div>
                        <div className="menu-price">
                            <div>Crispy Tripe</div>
                            <div>$ 3.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Buche (Pork Stomach)</div>
                            <div>$ 2.75</div>
                        </div>
                        <div className="menu-price">
                            <div>Vegetarian Tacos (rice, beans, onions and cilantro)</div>
                            <div>$ 1.75</div>
                        </div>
                    </div>

                    <div className="menu-price-container">
                        <div className="menu-h3">Toppings (Tacos)</div>
                        <div className="menu-price">
                            <div>Sour Cream</div>
                            <div>$ 0.25</div>
                        </div>
                        <div className="menu-price">
                            <div>Cheese</div>
                            <div>$ 0.25</div>
                        </div>
                        <div className="menu-price">
                            <div>Avocado</div>
                            <div>$ 0.25</div>
                        </div>
                        <div className="menu-price">
                            <div>Tomato</div>
                            <div>$ 0.25</div>
                        </div>
                        <div className="menu-price">
                            <div>Lettuce</div>
                            <div>$ 0.25</div>
                        </div>
                    </div>

                    <div className="menu-price-container">
                        <div className="menu-h3">Toppings (Burrito, Quesadilla, Nachos)</div>
                        <div className="menu-price">
                            <div>Avocado</div>
                            <div>$ 1.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Tomato</div>
                            <div>$ 1.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Lettuce</div>
                            <div>$ 1.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Grilled Jalapeno</div>
                            <div>(each) $ 1.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Side of Grilled Onions</div>
                            <div>$ 2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Side of Rice and Beans</div>
                            <div>$ 7.50</div>
                        </div>
                        <div className="menu-price">
                            <div>One side of rice: small</div>
                            <div>$ 3.75</div>
                        </div>
                    </div>
                </div>

                <div className="custome-order-container">
                    <div className="menu-h2 menu-drinks-header">Drinks</div>

                    <div className="menu-price-container">
                        <div className="menu-h3">Cans</div>
                        <div className="menu-price">
                            <div>Coke</div>
                            <div>$ 2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Fanta</div>
                            <div>$ 2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Sprite</div>
                            <div>$ 2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Moutain Dew</div>
                            <div>$ 2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Pepsi</div>
                            <div>$ 2.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Diet Coke</div>
                            <div>$ 2.00</div>
                        </div>
                        <div className="menu-h3">Bottles</div>
                        <div className="menu-price">
                            <div>Coke</div>
                            <div>$ 5.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Mandarin</div>
                            <div>$ 4.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Tamarind</div>
                            <div>$ 4.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Pinapple</div>
                            <div>$ 4.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Apple</div>
                            <div>$ 4.00</div>
                        </div>
                        <div className="menu-price">
                            <div>Sangria</div>
                            <div>$ 4.00</div>
                        </div>
                    </div>
                </div>

                <div className="menu-order-numbers-container">
                    <div className="menu-h3">Order Numbers</div>
                    <div className='menu-order-numbers-inner-container'>
                        <Link to="/menu/order-one" className="menu-order-card">
                            <img src="../../src/assets/imgs/order-one.JPG" className="menu-order-card-image" width={"150px"} height={"150px"}></img>
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">#1</div>
                        </Link>
                        <Link to="/menu/order-two" className="menu-order-card">
                            <img src="../../src/assets/imgs/order-two.JPG" className="menu-order-card-image" width={"150px"} height={"150px"}></img>
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">#2</div>
                        </Link>
                        <Link to="/menu/order-three" className="menu-order-card" >
                            <img src="../../src/assets/imgs/order-three.JPG" className="menu-order-card-image" width={"150px"} height={"150px"}></img>
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">#3</div>
                        </Link>
                        <Link to="/menu/order-four" className="menu-order-card">
                            <img src="../../src/assets/imgs/order-four.JPG" className="menu-order-card-image" width={"150px"} height={"150px"}></img>
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">#4</div>
                        </Link>
                        <Link to="/menu/order-five" className="menu-order-card">
                            <img src="../../src/assets/imgs/order-five.JPG" className="menu-order-card-image" width={"150px"} height={"150px"}></img>
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">#5</div>
                        </Link>
                        <Link to="/menu/order-six" className="menu-order-card">
                            <img className="menu-order-card-image" width={"150px"} height={"150px"}></img>
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">#6</div>
                        </Link>
                        <Link to="/menu/order-seven" className="menu-order-card">
                            <img src="../../src/assets/imgs/order-seven.JPG" className="menu-order-card-image" width={"150px"} height={"150px"}></img>
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">#7</div>
                        </Link>
                        <Link to="/menu/order-eight" className="menu-order-card">
                            <img src="../../src/assets/imgs/order-eight.JPG" className="menu-order-card-image" width={"150px"} height={"150px"}></img>
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">#8</div>
                        </Link>
                        <Link to="/menu/order-nine" className="menu-order-card">
                            <img src="../../src/assets/imgs/order-nine.JPG" className="menu-order-card-image" width={"150px"} height={"150px"}></img>
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">#9</div>
                        </Link>
                        <Link to="/menu/order-ten" className="menu-order-card">
                            <img src="../../src/assets/imgs/order-ten.JPG" className="menu-order-card-image" width={"150px"} height={"150px"}></img>
                            <div className="menu-order-card-background"></div>
                            <div className="menu-order-card-title">#10</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;
// This is a placeholder for the Menu component.