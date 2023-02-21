import React from "react";
import Axios from "axios";
import Burger from "./Burger.js";
import burgerData from "./burgerData"
import chalkboardBlank from "../../src/images/chalkboardBlank.png";


function BurgerOfTheDay(){

    const [burger, setBurger] = React.useState("")
    const [burgerPrice, setBurgerPrice] = React.useState("")

  //   https://bobsburgers-api.herokuapp.com/burgerOfTheDay/ for later, for now the info is copy/pasted into burgerData.js

    function getBurgerOfTheDay() {
        const burgerArray = burgerData.data.burgers
        const randomBurger = Math.floor(Math.random() * burgerArray.length) 
        // const burgerName = burgerArray[randomBurger].name
        // const burgerPrice = burgerArray[randomBurger].price
        
        setBurger(burgerArray[randomBurger].name)
        setBurgerPrice(burgerArray[randomBurger].price)
    }


    return (
        <div className="burgerOfTheDay">
            <h2 className="burgerOfTheDay--title">Burger Of The Day</h2>

            <div className="chalkboard" id="chalkboard">
                <div className="chalkboard--image--button" onClick={getBurgerOfTheDay} style={{ backgroundImage: `url(${chalkboardBlank})` }}>
                <div className="chalkboard--text">
                    <p className="burger--text">{burger}</p>
                    <p className="burger--price">{burgerPrice}</p>
                </div>
                </div>

                <div>
                    <button onClick={getBurgerOfTheDay} className="burger--button">
                    🍔 Get Random Burger 🍔
                    </button>   
                </div>
            </div>
        </div>

    )
}

export default BurgerOfTheDay