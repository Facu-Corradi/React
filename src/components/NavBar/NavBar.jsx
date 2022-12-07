import React from 'react'
import CartWidget from './CartWidget';
import "./navBar.css";
import {Link} from "react-router-dom";

function NavBar() {
return (
    <nav className='nav' >
        <ul className="navegador">
            <li>
                <Link to="/">Funko Pop</Link>
            </li>
            <li>
                <Link to="/category/GOT">Game Of Thrones</Link>
            </li>
            <li>
                <Link to="/category/HarryP">Harry Potter</Link>
            </li>
            <li>
                <CartWidget/>
            </li>
        </ul>
    </nav>
)
}

export default NavBar