import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div style={{ padding: "10px", background: "green", color: "white" }}>
      🌱 Paradise Nursery | Cart: {cart.length}
    </div>
  );
};

export default Navbar;