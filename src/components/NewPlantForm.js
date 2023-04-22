import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const initialState = {
    name: "",
    image: "",
    price: ""
  }

  const [formData, setFormData] = useState(initialState)
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const {name, image, price} = formData
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  fetch("http://localhost:6001/plants", {
    metjod: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify({
      name,
      image,
      price
  }).then((r) => r.json()).then((newPlant) => {
    addPlant(newPlant)
    setFormData(initialState)
  })
}) 
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form  onSubmit={handleSubmit}>
        <input onChange={handleChange}value={name}type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange}value={image}type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange}value={price}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
