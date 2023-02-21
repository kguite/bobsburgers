import React from "react";



function CharacterCard(character) {

   

    return (
        <div className="character-card">
            
            <div className="character--image">
                <img src={character.image} alt="character" />
            </div>

            <div className="character--name">
                <h3>{character.name}</h3>
            </div>

            <div className="character--desc">
                <p>{character.desc}</p>
            </div>

        </div>
    )
}

export default CharacterCard