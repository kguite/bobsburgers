import React from "react";
import chalkboardBlank from "../../src/images/chalkboardBlank.png";


function BurgerOfTheDay(){

    const [burger, setBurger] = React.useState("")

// gets random burger from burgerData.js - changed to use the API instead.
    // function getBurgerOfTheDay() {
    //     const burgerArray = burgerData.data.burgers
    //     const randomBurger = Math.floor(Math.random() * burgerArray.length) 
    //     setBurger(burgerArray[randomBurger].name)
    // }


// fetches random burger from Bobs Burgers API https://bobsburgers-api.herokuapp.com/burgerOfTheDay/ 
    function fetchBurgerOfTheDay() {
        const randomBurger = Math.floor(Math.random() * 333 + 1 ) 

        fetch(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${randomBurger}`)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
            console.log(data)

        document.querySelector('#burger').innerText = data.name;

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }

    return (
        <div className="burgerOfTheDay">
            <h2 className="burgerOfTheDay--title" id="burgerOfTheDay">Burger Of The Day</h2>
            <h3>Click the chalkboard to retrieve a random Burger of the Day</h3>
            <p>Burgers are pulled from <a href="https://www.bobsburgersapi.com">Bob's Burgers API</a></p>

            <div className="chalkboard" id="chalkboard">
                <div className="chalkboard--image--button" onClick={fetchBurgerOfTheDay} style={{ backgroundImage: `url(${chalkboardBlank})` }}>
                <div className="chalkboard--text">
                    <p className="burger--text" id="burger">{burger}</p>
                </div>
            </div>
        </div>
        </div>

    )
}

export default BurgerOfTheDay