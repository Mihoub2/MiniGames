import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      hello home
      <Link className="" to="/memory">
        <button className="">Characters</button>
      </Link>
    </div>
  );
};

export default Home;
