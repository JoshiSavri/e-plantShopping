import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
            }>
              +
            </button>

            <button onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
            }>
              -
            </button>

            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default CartItem;
