import React, {useState} from "react";

function PlantCard({name, image, price}) {
  const[isInStock, setIsInStock] = useState(true)
  
  const toggleStock = isInStock ? "In Stock" : "Out of Stock"

  function handleStockClick() {
    setIsInStock(!isInStock)
  }
  return (
    <li className="card" >
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price:{price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleStockClick}>{toggleStock}</button>
      ) : (
        <button>{toggleStock}</button>
      )}
    </li>
  );
}

export default PlantCard;
