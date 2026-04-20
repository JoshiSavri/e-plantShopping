import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, amount: 1 }));
  };

  const handleDecrease = (item) => {
    dispatch(updateQuantity({ id: item.id, amount: -1 }));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          {/* Quantity Controls */}
          <button onClick={() => handleIncrease(item)}>+</button>
          <button onClick={() => handleDecrease(item)}>-</button>

          {/* ✅ REQUIRED DELETE BUTTON */}
          <button
            className="cart-item-delete"
            onClick={() => handleRemove(item.id)}
          >
            Delete
          </button>
        </div>
      ))}

      <h3>Total: ${totalAmount}</h3>

      {/* ✅ REQUIRED BUTTONS */}
      <button onClick={() => alert("Checkout Successful!")}>
        Checkout
      </button>

      <button onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartItem;
