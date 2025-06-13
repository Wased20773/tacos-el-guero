import { usePage } from '../context/PageProvider.jsx'
import { Link } from 'react-router-dom'
import "../styles/ContactUs.css"

function ContactUs() {
    const { setPage } = usePage();

    return (
        <>
            <div className='contact-us-container'>
                {/* <Link to="/" className="header-button-menu">Homepage</Link> */}
                <div>Contact Us</div>
            </div>
        </>
    )
}

export default ContactUs;