import { plants } from "../data/plants";
import PlantCard from "./PlantCard";

const PlantList = () => {
  return (
    <div>
      <h2>Plants</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {plants.map(p => (
          <PlantCard key={p.id} plant={p} />
        ))}
      </div>
    </div>
  );
};

export default PlantList;