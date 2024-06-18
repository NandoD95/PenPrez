import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import { Menu } from "./Menu"

function Dropdown(){

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <div className="dropdown">
            <ul onClick={handleClick}
                className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
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