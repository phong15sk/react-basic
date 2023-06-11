import React from "react";
import "./Nav.scss"
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div class="topnav">
            <NavLink to="/" >home</NavLink>
            <NavLink to="/router">router</NavLink>
            <NavLink to="/redux">Contact</NavLink>
            <NavLink to="/hook">Hook</NavLink>
        </div>
    )
}

export default Nav;