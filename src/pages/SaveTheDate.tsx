import "./styles/SaveTheDate.css";
import std from "../assets/std1.png";
import { Link } from "react-router-dom";

const SaveTheDate = () => {
  return (
    <div className="std-main">
      <div>
        <img src={std}></img>
        <Link to="/travel" className="redirect-button">
          Travel
        </Link>
      </div>
    </div>
  );
};

export default SaveTheDate;
