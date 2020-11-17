import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () =>{
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/mountain">mountain</NavLink>
                </li>
                <li>
                    <NavLink to="/beach">beach</NavLink>
                </li>
                <li>
                    <NavLink to="/bird">bird</NavLink>
                </li>
                <li>
                    <NavLink to="/food">food</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;