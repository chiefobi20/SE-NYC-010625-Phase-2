import { v4 as uuid } from "uuid";
import { useState } from "react";
import { use } from "react";

function NewPetForm(addPet) {

  const [name, setName] = useState ("")
  const [image, setImage] = useState("")
  const [animal_type, setAnimal_type] = useState("")


  function handleSubmit(event){
    event.preventDefault()

    const newPet = {
      id: uuid(),
      name: name,
      image: image,
      animal_type: animal_type,
      likes: 0
    }

    addPet(newPet)

    // console.log(uuid())
  }

  function updateName(event){
    setName(event.target.value)
  }

  function updateImage(event){
    setImage(event.target.value)
  }

  function updateAnimalType(event){
    setAnimal_type(event.target.value)
  }


    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={updateName} type="text" name="name" placeholder="Pet name" value={name} required/>
          <input onChange={updateImage} type="text" name="image" placeholder="Image URL" value={image} required/>
          <input onChange={updateAnimalType} type="text" name="animal_type" placeholder="Animal type" value={animal_type} required/>
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }

  export default NewPetForm;