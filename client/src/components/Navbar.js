import {NavLink} from "react-router-dom";

function Navbar(){
    return(
        <div id="navbar-container">
        <nav className="navbar">
            <NavLink to='/'>PenPrez.com</NavLink> 
            {/* <Dropdown>Menu</Dropdown> */}
            <NavLink to='/Login'>Login</NavLink>
            <NavLink to='/WorkWithUs'>Work With Us</NavLink>
        </nav>
        </div>
    );
}; 

export default Navbar;