import { Link } from "react-router-dom";
// import Timer from "../components/Timer";

const LoserPage = () => {
  return (
    <div>
      LOOSER !
      <Link className="" to="/memory">
        <button className="">Essaye encore!</button>
      </Link>
    </div>
  );
};

export default LoserPage;
