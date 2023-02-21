import React from "react";
import bobsBurgersName from "../../src/images/bobsBurgerName.png";


function Header() {
    
    return (
        <header className="header">
            <img src={bobsBurgersName} alt="Bob's Burgers" className="header--img" />
            <div className="header--text">
                <p>This Bob's Burgers site was built from scratch using React.</p>
                    <ul><strong>Future additions will include:</strong>
                        <li>Burger of the Day info pulled from the API <br />
                        (for now, it's in a file called burgerData.js)</li>
                        <li>A form where you can create your own Burger of the Day</li>
                        <li>A proper footer</li>
                        <li>Refactoring the CSS into SASS</li>
                        <li>Lots more REACT practice and features</li>
                    </ul>
                    <p>Thanks for visiting my practice project!</p>
                    <p><a href="https://github.com/kguite/bobsburgers">Github</a></p>
            </div>
        </header>

    )
}

export default Header