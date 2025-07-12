import "./styles/SaveTheDate.css";
import std from "../assets/std1.png";
import { FC } from "react";
import { Link } from "react-router-dom";
import dict from "../Dictionary.json";

type Props = {
  lang: string;
};

const SaveTheDate: FC<Props> = (prop) => {
  const words = dict[prop.lang] ?? dict.en;
  return (
    <div className="std">
      <div className="std-main">
        <img src={std}></img>
        <div className="wip-container">
          <p className="wip">Come back soon for more updates!</p>
        </div>
        <Link to="/travel" className="redirect-button">
          {words.travel}
        </Link>
        <Link to="/home" className="redirect-button">
          {words.home}
        </Link>
      </div>
    </div>
  );
};

export default SaveTheDate;
