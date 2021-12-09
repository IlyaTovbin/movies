import React from 'react';
import { NavLink  } from "react-router-dom";

const Nav = () => {
    return (
        <ul class="nav nav-pills nav-justified mb-3">
            <li class="nav-item">
                <NavLink  activeClassName='active' className="nav-link " to="/">Movies</NavLink>
            </li>
            <li class="nav-item">
                <NavLink  activeClassName='active' className="nav-link "to="/admin">Admin</NavLink>
            </li>
        </ul>
    )    
}

export default Nav;