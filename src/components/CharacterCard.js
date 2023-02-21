import React from "react";

function CharacterCard(character) {

    return (
        <div className="character-card">
            <img className="character--image" src={character.image} alt="character" />
            <h3 lassName="character--name">{character.name}</h3>
            <p className="character--desc">{character.desc}</p>
        </div>
    )
}

export default CharacterCard