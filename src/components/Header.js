import React from "react";
import bobsBurgersName from "../../src/images/bobsBurgerName.png";


function Header() {
    
    return (
        <header className="header">
            <img src={bobsBurgersName} alt="Bob's Burgers" className="header--img" />
            <div className="header--text">
                <p>This page was built from scratch using React.</p>
                <ul className="skills">Skills practiced include:
                    <li>Flexbox</li>
                    <li>Custom Components</li>
                    <li>Props(Character Cards, Burgers of the Day)</li>
                    <li>Object Destructuring</li>
                    <li>Mapping data</li>

                    <li>Event Listeners</li>
                    <li>State</li>
                    <li>Conditional Rendering</li>
                    <li>Forms</li>
                    <li>Side effects</li>
                </ul>
            </div>
        </header>

    )
}

export default Header