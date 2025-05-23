import "../main.css";
import std from "../assets/std.png";
import {FC } from "react";
import { Link } from "react-router-dom";
import dict from "../Dictionary.json";
import React from "react";

type Props = {
    lang: string;
};

const Home: FC<Props> = (prop) => {
    const words = dict[prop.lang] ?? dict.en;
  return (
    <div>
      <div className="std-main">
        <img src={std}></img>
      </div>
      <Link to="/travel" className="redirect-button">
        {words.travel}
      </Link>
      <Link to="/rsvp" className="redirect-button">
        RSVP
      </Link>
    </div>
  );
};

export default Home;
