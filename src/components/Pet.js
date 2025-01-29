import { useState } from "react";

function Pet({pet}){

    // let numberOfLikes = 0

    const [numberOfLikes, setNumberOfLikes] = useState(0)
    const [displayName, setDisplayName] = useState(true)

    function increaseNumberofLikes(){
    setNumberOfLikes(numberOfLikes + 1)
        // console.log(`Pet # ${pet.id} number of likes: ${numberOfLikes}`)
    }

    function toggleDisplayName(){
        // setDisplayName(!displayName)
        setDisplayName(displayName => !displayName)
        console.log(displayName)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayName} className={displayName ? "": "display-animal-type"}>{displayName ? pet.name: pet.animal_type}</h4>
            <button onClick={increaseNumberofLikes} className="like-button">{numberOfLikes} Likes</button>
        </li>
    );
}

export default Pet;