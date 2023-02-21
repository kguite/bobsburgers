import React from "react"

function Burger(burger) {
    

    return (
        <div>
            <h3>{burger.name}</h3>
            <p>{burger.withIngredient}</p>
            <hr />
        </div>
    )
}

export default Burger