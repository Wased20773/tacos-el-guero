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
                    {/* Place container of cards with all 10 orders */}
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