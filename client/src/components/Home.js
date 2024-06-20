import React from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

function Home(){
    return (
        <div className="home-page">
            <div className="content-section">
                <div className="hp-content">
                    <h1 className="main-heading">Listening and adjusting are the keys to our coaching approach. Let us help you take your company to new levels.</h1>
                </div>
            </div>
            <div className="services-section">
                <div className="service-content">
                    <h2>Services</h2>
                    <Service />
                </div>
            </div>
            <div className="buttons-container">
                <Link to='About'>
                    <button className="about-btn">About</button>
                </Link>
                <Link to='Podcast'>
                    <button className="pod-btn">Podcast</button>
                </Link>
                <Link to='WorkWithUs'>
                    <button className="wwu-btn">Work With Us</button>
                </Link>
                <Link to='TermsCondition'>
                    <button className="tc-btn">Terms & Condition</button>
                </Link>
                <Link to='PrivatePolicy'>
                    <button className="pp-btn">Private Policy</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;