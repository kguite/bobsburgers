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
            <CharacterCard 
                image={Bob}
                name="Bob Belcher"
                desc="Bob is the Dad"
                />
            <CharacterCard 
                image={Linda}
                name="Linda Belcher"
                desc="Linda is the Mom"/>
            <CharacterCard 
                image={Tina}
                name="Tina Belcher"
                desc="Tina is the eldest"/>
            <CharacterCard 
                image={Gene}
                name="Gene Belcher"
                desc="Gene is the middle"/>
            <CharacterCard 
                image={Louise}
                name="Louise Belcher"
                desc="Louise is the youngest"/>
        </div>
    )
}

export default Characters