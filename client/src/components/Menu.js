import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <div>
        <nav>
            <NavLink to='/About'> About Us </NavLink>
            <NavLink to='Podcast'>Podcast</NavLink>
            <NavLink to='WorkWithUs'>Work With Us</NavLink>
            <NavLink to='TermsCondition'>Terms & Conditions</NavLink>
            <NavLink to='PrivatePolicy'>Private Policy</NavLink>
        </nav>
        </div>
    );
}


export default Menu;