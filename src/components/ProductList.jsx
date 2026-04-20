import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 10, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Aloe Vera", price: 8, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Rose", price: 15, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Tulip", price: 12, category: "Outdoor", image: "https://via.placeholder.com/150" }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌿 Paradise Nursery Plants</h1>

      <h2>Indoor Plants</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {plants
          .filter((p) => p.category === "Indoor")
          .map((plant) => (
            <div key={plant.id} style={{ border: "1px solid gray", padding: "10px" }}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>₹{plant.price}</p>
              <button onClick={() => handleAdd(plant)}>Add to Cart</button>
            </div>
          ))}
      </div>

      <h2>Outdoor Plants</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {plants
          .filter((p) => p.category === "Outdoor")
          .map((plant) => (
            <div key={plant.id} style={{ border: "1px solid gray", padding: "10px" }}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>₹{plant.price}</p>
              <button onClick={() => handleAdd(plant)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
