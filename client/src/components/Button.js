import React from "react";
import { Link } from "react-router-dom";

export function Button(){
    return(
        <Link to='SignUp'>
            <button className="btn">Sign Up</button>
        </Link>
    )
}