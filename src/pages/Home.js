import { Link } from "react-router-dom";
import Timer from "../components/Timer";

const Home = () => {
  return (
    <div>
      hello home
      <Link className="" to="/memory">
        <button className="">Characters</button>
      </Link>
      <Timer />
    </div>
  );
};

export default Home;
