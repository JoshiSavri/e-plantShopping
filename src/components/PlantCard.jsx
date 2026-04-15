import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => dispatch(addToCart(plant))}>
        Add to Cart
      </button>
    </div>
  );
};

export default PlantCard;