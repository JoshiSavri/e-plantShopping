import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => handleIncrease(item)}>+</button>
            <button onClick={() => handleDecrease(item)}>-</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h2>Total: ₹{totalAmount}</h2>
    </div>
  );
}

export default CartItem;
