import "../main.css";
import std from "../assets/std.png";
import { Link } from "react-router-dom";
import dict from "../Dictionary.json";

const Home = () => {
    const lang  = navigator.language;

    return (
    <div>
      <div className="std-main">
        <img src={std}></img>
      </div>
      <Link to="/travel" className="redirect-button">
        {dict[lang].travel}
      </Link>
      <Link to="/rsvp" className="redirect-button">
        RSVP
      </Link>
      <p>{navigator.language}</p>
    </div>
  );
};

export default Home;
