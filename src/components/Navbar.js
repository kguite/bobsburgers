import React from "react";
import burger from "../../src/images/burger-icon.png";


function Navbar() {
    
    return (
        <nav className="nav">
            <img src={burger} className="nav-logo" alt="burger icon"/>
            <ul className="nav-items">
                <li><a href="#characters">The Belchers</a></li>
                <li><a href="#burgerOfTheDay">Burger of the Day</a></li>
                <li><a href="#quiz">Quiz</a></li>
            </ul>
        </nav>

    )
}

export default Navbar