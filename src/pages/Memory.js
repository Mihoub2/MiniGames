import Cards from "../components/Cards";
import Timer from "../components/Timer";

const Memory = () => {
  return (
    <div className="memoryContainer">
      <h1>Memory Game</h1>
      <Timer />

      <Cards />
    </div>
  );
};

export default Memory;
