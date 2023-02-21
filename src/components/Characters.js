import React from "react";
import CharacterCard from "./CharacterCard";
import Bob from "../images/Bob.png";
import Linda from "../images/Linda.png";
import Tina from "../images/Tina.png";
import Gene from "../images/Gene.png";
import Louise from "../images/Louise.png";




function Characters(){


    return (
        <div className="characters" id="characters">
            <h2 className="characters--title">The Belcher Family</h2>
            <div className="character-cards">
            <CharacterCard 
                image={Bob}
                name="Bob Belcher"
                desc="Would kiss Thanksgiving."
                />
            <CharacterCard 
                image={Linda}
                name="Linda Belcher"
                desc="Linda doesn't get drunk, she just has fun."
                />
            <CharacterCard 
                image={Tina}
                name="Tina Belcher"
                desc="A smart, strong, sensual woman."/>
            <CharacterCard 
                image={Gene}
                name="Gene Belcher"
                desc="Leader of the Itty Bitty Ditty Committee."/>
            <CharacterCard 
                image={Louise}
                name="Louise Belcher"
                desc="Not into Boyz 4 Now."/>
            </div>
        </div>
    )
}

export default Characters