import { Link } from "react-router-dom";

const mapLocation = 'https://www.google.com/maps/dir//Tacos+El+Guero,+4549+NE+Cully+Blvd,+Portland,+OR+97218/@45.5387521,-122.6123254,9215m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x5495a6b5bffe7957:0x3c3bffcb7fc23b6b!2m2!1d-122.6004505!2d45.556268?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/place/Tacos+El+Guero/@45.5562397,-122.6005799,49m/data=!3m1!1e3!4m6!3m5!1s0x5495a6b5bffe7957:0x3c3bffcb7fc23b6b!8m2!3d45.556277!4d-122.60045!16s%2Fg%2F11cjd73mqt?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D';

function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-content">
            <div className="footer-list-container">
              <div className="footer-list-contact">
                <div className="footer-list-h1">Contact</div>
                <Link className="footer-fit-content footer-p" to="/contact-us">Email</Link>
                <a className="footer-fit-content footer-p" href="tel:+15039872325">(503) 987-2325</a>
              </div>
              <div className="footer-list-find-us">
                <div className="footer-list-h1">Find Us</div>
                <div className="footer-fit-content footer-p">4549 NE Cully Blvd</div>
                <div className="footer-fit-content footer-p">Portland, Or 97218</div>
                <a className="footer-fit-content map footer-p" href={mapLocation}>map</a>
                <div className="footer-day-group">
                  <div>Opening Hours</div>
                  <div className="footer-day footer-p">
                      <div >Monday - Saturday</div>
                      <div >11AM - 8:30PM</div>
                  </div>
                  <div className="footer-day footer-p">
                      <div >Sunday</div>
                      <div >Closed</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">&copy; 2025 Tacos El Guero. All rights reserved.</div>
        </div>
        
    </div>
  );
}

export default Footer;