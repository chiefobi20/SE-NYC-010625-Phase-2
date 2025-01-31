import PetList from "./PetList";
import pets from "../data/pets";
import Search from "./Search";
import { useState } from "react";

console.log(pets)

function PetPage(){

    const [searchText, setSearchText] = useState("")
    const [petsState, setPetsState] = useState(pets)

    const filteredPets = petsState.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function deletePet(id){
       const  updatedArray = petsState.filter(pet => {
            return pet.id !== id
        })
        setPetsState(updatedArray)
    }

    function updatePet(updatedPetData){
        const updatedArray = petsState.map(pet => {
            if(pet.id === updatedPetData.id){
                return updatedPetData
            }
            return pet
        })

        setPetsState(updatedArray)
    }

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    function updatedSearchText(event){
        setSearchText(event.target.value)
    }

    return (
        <main>
            <PetList pets={filteredPets} deletePet={deletePet} />
            <Search updateSearchText={updateSearchText} />
        </main>
    );
}

export default PetPage;