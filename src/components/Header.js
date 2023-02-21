import React from "react";
import bobsBurgersName from "../../src/images/bobsBurgerName.png";


function Header() {
    
    return (
        <header className="header">
            <img src={bobsBurgersName} alt="Bob's Burgers" className="header--img" />
            <div className="header--text">
                <p>This Bob's Burgers site was built from scratch using React.</p>
                    <ul>Future additions will include:
                        <li>Burger of the Day info pulled from the API (for now, it's in a file called burgerData.js)</li>
                        <li>A form where you can create your own Burger of the Day</li>
                    </ul>
            </div>
        </header>

    )
}

export default Header