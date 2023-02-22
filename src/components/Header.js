import React from "react";
import bobsBurgersName from "../../src/images/bobsBurgerName.png";


function Header() {
    
    return (
        <header className="header">
            <img src={bobsBurgersName} alt="Bob's Burgers" className="header--img" />
            <div className="header--text">
                <h2 className="header--subtitle">This site was built from scratch using React.</h2>

                    <ul className="header--ul"><strong>Current Features:</strong>
                        <li><strong>- Characters</strong> are stored in an array, and the map function is used to iterate through them and display them using a CharacterCard component. </li>
                        <li><strong>- Burger of the Day</strong> info is pulled from the <a href="https://www.bobsburgersapi.com">Bob's Burgers API</a> with a Math.Random() function used to randomize the result.</li>
                        <li><strong>- Quiz</strong> utilizes useState and useEffect</li>
                    </ul>

                    <ul className="header--ul"><strong>Future additions:</strong>
                        <li>- A form to create your own Burger of the Day</li>
                        <li>- Refactoring the CSS into SASS</li>
                        <li>- Prettier styling</li>
                    </ul>
                    <p>Thanks for visiting my practice project!</p>
                    <p><a href="https://github.com/kguite/bobsburgers">View the GitHub</a></p>
            </div>
        </header>

    )
}

export default Header