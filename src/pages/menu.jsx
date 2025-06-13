import { usePage } from '../context/PageProvider.jsx'
import { Link } from 'react-router-dom'
import '../styles/Menu.css'

function Menu() {
    const { setPage } = usePage();

    return (
        <>
            <div className="menu-container">
                {/* <Link to="/" className="header-button-menu">Homepage</Link> */}
                <div>Menu</div>
            </div>
        </>
    )
}

export default Menu;
// This is a placeholder for the Menu component.