import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("")
  const [plants, setPlants] = useState([])

  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data) => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList search={search} plants={plants}/>
    </main>
  );
}

export default PlantPage;
