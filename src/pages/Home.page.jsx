import React from 'react'
import Jumbotron from '../components/Jumbotron.component'
import Navigation from '../components/Navigation.component'
import '../assets/scss/home.scss'
import { Link } from 'react-router-dom'
import packageImage from '../assets/images/package.png'
import storeLogo from "../assets/images/storeLogo.png";
import routeImage from '../assets/images/route.png'
import Footer from '../components/Footer.component'

export default function Home() {
    return (
        <>
            <Navigation />
            <Jumbotron title="Harpy" subtitle="Delivery" description="Let's get your products delivered fast and safe"/>
            <div className="banner">
               <div className="text">
                   <h3>Earn extra money delivering</h3>
                   <p>Set your own schedule, be your own boss.</p>
               </div>
               <div className="button">
                   <Link to="/rider" className="btn">SIGN UP TO DELIVER</Link>
               </div>
            </div>

            <div className="package row">
                <div className="package__image">
                    <img src={packageImage} alt="package"/>
                </div>
                <div className="package__text">
                    <h2>Get your package <span>at your doorstep</span></h2>
                    <p>Securely acquire a delivery man to go get your product delivered in no time with no hustle.</p>
                    <p>Harpy delivery, Happy Delivery.</p>

                    <div className="button">
                        <Link to="/rider" className="btn">SIGN UP TODAY</Link>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="text">
                    <h2>Get your package in easy steps</h2>
                    <p>Pick your package location, approve driver's request for your package code, relax and wait for your package.</p>
                    <div className="store_logo">
                        <img src={storeLogo} alt=""/>
                    </div>
                </div>
                <div className="image">
                    <img src={routeImage} alt=""/>
                </div>
            </div>

            <div className="contact">
                <div className="text">
                <h3>Hi, do you have anything to tell us?</h3>
                <div className="button">
                    <Link to="/contact" className="btn">CONTACT US</Link>
                </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
