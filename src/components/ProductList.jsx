import React, { useState } from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, image: "img1" },
  { id: 2, name: "Snake Plant", price: 12, image: "img2" },
  { id: 3, name: "Peace Lily", price: 15, image: "img3" },
  { id: 4, name: "Spider Plant", price: 8, image: "img4" },
  { id: 5, name: "Fern", price: 9, image: "img5" },
  { id: 6, name: "Cactus", price: 7, image: "img6" },
];

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (id) => {
    setAddedItems([...addedItems, id]);
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>Paradise Nursery</h2>
      </nav>

      <div className="product-list">
        {plants.map((plant) => (
          <div key={plant.id}>
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>

            <button
              onClick={() => handleAdd(plant.id)}
              disabled={addedItems.includes(plant.id)}
            >
              {addedItems.includes(plant.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
