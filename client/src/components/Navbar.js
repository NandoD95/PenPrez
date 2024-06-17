import {NavLink} from "react-router-dom";

function Navbar(){
    return(
        <div id="navbar-container">
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink> 
            <div>
            <NavLink to='/SignUp'>Sign Up</NavLink>
            </div>
        </nav>
        </div>
    );
}; 

export default Navbar;