import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-dark.png';

export default function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation__group">
                <div id="brand">
                    <img src={logo} alt="Harpy Logo"/>
                </div>
                <div className="links">
                    <div className="link"> <Link to="/">Personal</Link> </div>
                    <div className="link"> <Link to="/rider">Rider</Link> </div>
                    <div className="link"> <Link to="/business">Business</Link> </div>
                </div>
            </div>
            <div className="navigation__feedback">
                <Link className="btn" to="/feedback">Feedback</Link>
            </div>
        </div>
    )
}
