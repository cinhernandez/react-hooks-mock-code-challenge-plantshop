import React from "react";
import PlantCard from "./PlantCard";

function PlantList({search, plants}) {
 
  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
  const plantList = filteredPlants.map((plant) => {
    return (
      <PlantCard 
        key={plant.id} 
        name={plant.name} 
        image={plant.image} 
        price={plant.price}/>
    )
  })

  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
