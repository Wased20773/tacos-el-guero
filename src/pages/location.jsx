import { usePage } from '../context/PageProvider.jsx'
import { Link } from 'react-router-dom'

function Location() {
    const { setPage } = usePage();
    return (
        <>
            <div className="location-container">
                <Link to="/" className="header-button-menu">Homepage</Link>
                <div>Location</div>
            </div>
        </>
    )
}

export default Location;