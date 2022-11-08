import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./navBar.css";
import {Link} from "react-router-dom";

function NavBar() {
return (
    <nav >
        <ul className="navegador">
            <li>
                <Link to="/">Funko Pop</Link>
            </li>
            <li>
                <Link to="/">Harry Potter</Link>
            </li>
            <li>
                <Link to="/">Game Of Thrones</Link>
            </li>
            <li>
                <Link to="/"><CartWidget/></Link>
            </li>
        </ul>
    </nav>
)
}

export default NavBar