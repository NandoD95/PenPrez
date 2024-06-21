import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import { Menu } from "./Menu"
import './Dropdown.css';

function Dropdown(){
    /**
     * State variable to track the click state of the dropdown menu.
     * Initial value is set to false, meaning the menu is not clicked initially.
     */
    const [click, setClick] = useState(false)

    /**
     * Handle click event on the dropdown menu.
     * Toggle the click state by setting it to the opposite of its current value.
     */
    const handleClick = () => setClick(!click)

    return(
        <div className="dropdown">
             {/*
             * Ul element that represents the dropdown menu.
             * The onClick event is handled by the handleClick function.
             * The className is conditionally set based on the click state.
             */}
            <ul onClick={handleClick}
                className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                    {/* /**
                     * Map over the Menu array and render a list item for each item.
                     */}
                    {Menu.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
            </ul>
        </div>
    );
}

export default Dropdown;