import { Link } from 'react-router-dom'
import "../styles/Location.css"
import PinIcon from "../miscellaneous/icons/PinIcon.jsx"
import ClockIcon from "../miscellaneous/icons/ClockIcon.jsx"

const mapLocation = 'https://www.google.com/maps/search/tacos+el+guero/@45.5560045,-122.6212069,6088m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D';

function Location() {
    
    return (
        <>
            <div className="location-container">
                {/* <Link to="/" className="header-button-menu">Homepage</Link> */}
                <div>Location</div>
                <div className="location-group-section">
                    <div className='location-section'>
                        <PinIcon 
                            width={"100px"}
                            height={"100px"}
                            innerCircleRadius={"5"}
                            strockWidth={"1"}
                            strockColor={"#ffffff"}
                        />
                        <div className='location-h2'>4549 NE Cully Blvd</div>
                        <div className='location-h2'>Portland, Or 97218</div>
                        <a className='location-p-map' href={mapLocation}>map</a>
                    </div>
                    <div className='location-group-seperator'></div>
                    <div className='location-section'>
                        <ClockIcon 
                            width={"100px"}
                            height={"100px"}
                            innerCircleRadius={"5"}
                            strockWidth={"0.50"}
                            strockColor={"#ffffff"}
                        />
                        <div className='location-h2'>Opening Hours</div>
                        <div className='location-day'>
                            <div className='location-p'>Monday</div>
                            <div className='location-p'>11AM - 8:30PM</div>
                        </div>
                        <div className='location-day'>
                            <div className='location-p'>Tuesday</div>
                            <div className='location-p'>11AM - 8:30PM</div>
                        </div>
                        <div className='location-day'>
                            <div className='location-p'>Wednesday</div>
                            <div className='location-p'>11AM - 8:30PM</div>
                        </div>
                        <div className='location-day'>
                            <div className='location-p'>Thursday</div>
                            <div className='location-p'>11AM - 8:30PM</div>
                        </div>
                        <div className='location-day'>
                            <div className='location-p'>Friday</div>
                            <div className='location-p'>11AM - 8:30PM</div>
                        </div>
                        <div className='location-day'>
                            <div className='location-p'>Saturday</div>
                            <div className='location-p'>11AM - 8:30PM</div>
                        </div>
                        <div className='location-day'>
                            <div className='location-p'>Sunday</div>
                            <div className='location-p'>Closed</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Location;