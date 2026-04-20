import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 12, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 15, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Rose", price: 20, category: "Outdoor", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Tulip", price: 18, category: "Outdoor", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Cactus", price: 8, category: "Succulent", image: "https://via.placeholder.com/100" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // ✅ Redux dispatch
    setAddedItems([...addedItems, plant.id]); // ✅ disable button
  };

  // ✅ Calculate total cart quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ✅ Group by category
  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div>
      {/* ✅ NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#d4f5d4" }}>
        <h2>Paradise Nursery 🌱</h2>
        <h3>Cart: {cartCount}</h3>
      </nav>

      {/* ✅ PRODUCT LIST */}
      {categories.map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    width: "150px",
                    textAlign: "center",
                  }}
                >
                  {/* ✅ IMAGE */}
                  <img src={plant.image} alt={plant.name} />

                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>

                  {/* ✅ ADD BUTTON */}
                  <button
                    onClick={() => handleAddToCart(plant)}
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
      ))}
    </div>
  );
};

export default ProductList;
