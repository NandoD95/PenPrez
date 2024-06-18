import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import { Button } from "./Button"
import Dropdown from "./Dropdown"

function Navbar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else{
            setDropdown(true)
        }
    };

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
                    <li className="nav item">
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