import { usePage } from '../context/PageProvider.jsx'
import { Link } from 'react-router-dom'
import '../styles/AboutUs.css'
function AboutUs() {
    const { setPage } = usePage();

    return (
        <>
            <div className='about-us-container'>
                <Link to="/" className="header-button-menu">Homepage</Link>
                <div>About Us</div>
            </div>
        </>
    )
}

export default AboutUs;