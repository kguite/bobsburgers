import React from "react";
import bobsGreen from "../../src/images/bobsGreen.jpg";


function Navbar() {
    
    return (
        <nav className="nav">
            <img src={bobsGreen} className="nav-logo"/>
            <ul className="nav-items">
                <li><a href="#characters">Characters</a></li>
                <li><a href="botd">Burger of the Day</a></li>
            </ul>
        </nav>

    )
}

export default Navbar