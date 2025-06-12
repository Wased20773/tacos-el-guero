import { usePage } from '../context/PageProvider.jsx'
import { Link } from 'react-router-dom'

function AboutUs() {
    const { setPage } = usePage();

    return (
        <>
            <div className='aboutus-container'>
                <Link to="/" className="header-button-menu">Homepage</Link>
                <div>About Us</div>
            </div>
        </>
    )
}

export default AboutUs;