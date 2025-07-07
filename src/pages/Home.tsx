import "../pages/styles/Home.css";
import std from "../assets/std.png";
import stdespanol from "../assets/stdespanol.png";
import { FC } from "react";
import { Link } from "react-router-dom";
import dict from "../Dictionary.json";

type Props = {
    lang: string;
};

const Home: FC<Props> = (prop) => {
  const words = dict[prop.lang] ?? dict.en;
  let stdImage = prop.lang !== 'en' ? stdespanol : std;

  return (
    <div className="home">
      <div className="std-main">
        <img src={stdImage}></img>
      </div>
      <Link to="/travel" className="redirect-button">
        {words.travel}
      </Link>
      <Link to="/rsvp" className="redirect-button">
        {words.rsvp}
      </Link>
      <Link to="/save-the-date" className="redirect-button">
        {words.std}
      </Link>
    </div>
  );
};

export default Home;
