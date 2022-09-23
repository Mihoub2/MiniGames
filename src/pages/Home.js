import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      HOME !
      <Link className="" to="/memory">
        <button className="">Essaie mon jeu</button>
      </Link>
    </div>
  );
};

export default Home;
