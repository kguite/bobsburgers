import React from "react";
import CharacterCard from "./CharacterCard";
import Bob from "../images/Bob.png";
import Linda from "../images/Linda.png";
import Tina from "../images/Tina.png";
import Gene from "../images/Gene.png";
import Louise from "../images/Louise.png";


function Characters(){

    const characters = [
        {
            image:Bob,
            name:"Bob Belcher",
            desc:"Would kiss Thanksgiving."
        },
        {
            image:Linda,
            name:"Linda Belcher",
            desc:"Linda doesn't get drunk, she just has fun."
        },
        {
            image:Tina,
            name:"Tina Belcher",
            desc:"A smart, strong, sensual woman."
        },
        {
            image:Gene,
            name:"Gene Belcher",
            desc:"Leader of the Itty Bitty Ditty Committee."
        },
        {
            image:Louise,
            name:"Gene Belcher",
            desc:"Totally not into Boyz 4 Now."
        },
    ]


    return (
        
        <div className="characters" id="characters">
            <h2 className="characters--title">The Belcher Family</h2>
            
            {characters.map((character) =>{
                return (
                    <CharacterCard 
                        image={character.image} 
                        name={character.name} 
                        desc={character.desc}
                    />
                );})}
        </div>
    );
}

export default Characters