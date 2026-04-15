import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price} x {item.qty}
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;