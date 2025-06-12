import { usePage } from '../context/PageProvider.jsx'
import { Link } from 'react-router-dom'

function ContactUs() {
    const { setPage } = usePage();

    return (
        <>
            <div className='contactus-container'>
                <Link to="/" className="header-button-menu">HomePage</Link>
                <div>Contact Us</div>
            </div>
        </>
    )
}

export default ContactUs;