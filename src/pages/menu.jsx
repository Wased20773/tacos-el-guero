import { Link } from 'react-router-dom'
import '../styles/Menu.css'

function Menu() {
    return (
        <>
            <div className="menu-container">
                <div>Menu</div>

                <div className="custome-order-container">
                    <div className="custome-order-h2">Tacos with onion & cilantro</div>

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

                <div className="menu-order-numbers-container">
                    <div>Order Numbers</div>
                    <Link to="/menu/order-one">
                        <img className="menu-card-image"></img>
                        <div className="menu-card-background"></div>
                        <div className="menu-card-title">#1</div>
                    </Link>
                    <Link to="/menu/order-two">
                        <img className="menu-card-image"></img>
                        <div className="menu-card-background"></div>
                        <div className="menu-card-title">#2</div>
                    </Link>
                    <Link to="/menu/order-three">
                        <img className="menu-card-image"></img>
                        <div className="menu-card-background"></div>
                        <div className="menu-card-title">#3</div>
                    </Link>
                    <Link to="/menu/order-four">
                        <img className="menu-card-image"></img>
                        <div className="menu-card-background"></div>
                        <div className="menu-card-title">#4</div>
                    </Link>
                    <Link to="/menu/order-five">
                        <img className="menu-card-image"></img>
                        <div className="menu-card-background"></div>
                        <div className="menu-card-title">#5</div>
                    </Link>
                    <Link to="/menu/order-six">
                        <img className="menu-card-image"></img>
                        <div className="menu-card-background"></div>
                        <div className="menu-card-title">#6</div>
                    </Link>
                    <Link to="/menu/order-seven">
                        <img className="menu-card-image"></img>
                        <div className="menu-card-background"></div>
                        <div className="menu-card-title">#7</div>
                    </Link>
                    <Link to="/menu/order-eight">
                        <img className="menu-card-image"></img>
                        <div className="menu-card-background"></div>
                        <div className="menu-card-title">#8</div>
                    </Link>
                    <Link to="/menu/order-nine">
                        <img className="menu-card-image"></img>
                        <div className="menu-card-background"></div>
                        <div className="menu-card-title">#9</div>
                    </Link>
                    <Link to="/menu/order-ten">
                        <img className="menu-card-image"></img>
                        <div className="menu-card-background"></div>
                        <div className="menu-card-title">#10</div>
                    </Link>
                </div>

                <div className="menu-drinks-conatiner">
                    <div className="menu-drinks-cans">
                        
                    </div>

                    <div className="menu-drinks-glass">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;
// This is a placeholder for the Menu component.