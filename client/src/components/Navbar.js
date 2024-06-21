import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
import './Navbar.css'

function Navbar(){
    // State variable to track the click state of the menu icon.
    const [click, setClick] = useState(false);
    // State variable to track the dropdown state.
    const [dropdown, setDropdown] = useState(false);

    // Function to handle the click event of the menu icon.
    const handleClick = () => setClick(!click)
    // closes the mobile menu
    const closeMobileMenu = () => setClick(false)

    // Handles the mouse enter event of the nav item. Sets the dropdown state based on the window width.
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else{
            setDropdown(true)
        }
    };

    // Handles the mouse leave event of the nav item. Sets the dropdown state based on the window width.
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else{
            setDropdown(false)
        }
    };

    return (
        <>
            <nav className="navbar">
                <NavLink to='/' className='navbar-logo'>
                PENPREZ.COM
                </NavLink>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item"
                        onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                            Menu <i className="fas fa-caret-down" />
                        </NavLink>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <NavLink to='/login' className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/WorkWithUs' className='nav-links' onClick={closeMobileMenu}>
                            Work With Us
                        </NavLink>
                    </li>
                </ul>
                <Button />
            </nav>      
        </>
    )
}; 

export default Navbar;