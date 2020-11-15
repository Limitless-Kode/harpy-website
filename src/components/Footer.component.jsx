import React from 'react'
import storeLogo from "../assets/images/storeLogo.png";
import logo from "../assets/images/logo-white.png";
import facebook from "../assets/images/icons/facebook.png";
import twitter from "../assets/images/icons/twitter.png";
import instagram from "../assets/images/icons/instagram.png";
import linkedin from "../assets/images/icons/linkedin.png";
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="column">
                    <h3>AVAILABLE ON</h3>
                    <div className="store_logo">
                        <img src={storeLogo} alt=""/>
                    </div>
                </div>
                <div className="column">
                    <h3>SUPPORT</h3>
                    <Link to="/faqs">Help &amp; FAQs</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/refunds">Refunds</Link>
                    <Link to="/refunds">Platform Status</Link>
                </div>
                <div className="column">
                    <h3>OUR PRODUCTS</h3>
                    <Link to="/rider">Ride</Link>
                    <Link to="/business">Business</Link>
                    <Link to="/fleets">Fleets</Link>
                    <Link to="/scooters">Scooters</Link>
                </div>
            </div>
            <div className="social">
                <div className="brand">
                    <img src={logo} alt="Harpy Logo"/> 
                    <p>2020 Harpy Technology</p>
                </div>
                <div className="links">
                    <a href="https://facebook.com"><img src={facebook} alt="Facebook"/></a>
                    <a href="https://twitter.com"><img src={twitter} alt="Twitter"/></a>
                    <a href="https://instagram.com"><img src={instagram} alt="Instagram"/></a>
                    <a href="https://linkedin.com"><img src={linkedin} alt="LinkedIn"/></a>
                </div>
            </div>
        </div>
    )
}
