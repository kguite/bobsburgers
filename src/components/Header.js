import React from "react";
import bobsBurgersName from "../../src/images/bobsBurgerName.png";


function Header() {
    
    return (
        <header className="header">
            <img src={bobsBurgersName} alt="Bob's Burgers" className="header--img" />
            <div className="header--text">
                <p>This Bob's Burgers site was built from scratch using React.</p>
                <p>Future additions will include:</p>
                    <ul>
                        <li>Burger of the Day info pulled from the API (for now, it's in a file called burgerData.js)</li>
                        
                    </ul>
            </div>
        </header>

    )
}

export default Header