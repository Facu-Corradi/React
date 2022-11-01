import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./navBar.css";

function NavBar() {
return (
    <nav >
        <ul className="navegador">
            <li>
                <a href="/">Funko Pop</a>
            </li>
            <li>
                <a href="/">Harry Potter</a>
            </li>
            <li>
                <a href="/">Game Of Thrones</a>
            </li>
            <li>
                <a href="/"><CartWidget/></a>
            </li>
        </ul>
    </nav>
)
}

export default NavBar