import "../main.css";
import "./styles/Rsvp.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import dict from "../Dictionary.json";

type Props = {
  lang: string;
};

const RSVP: FC<Props> = (prop) => {
  const words = dict[prop.lang] ?? dict.en;
  return (
    <div className="rsvp">
      <p className="wilden">Let's get you started</p>
      <Link to="/" className="redirect-button">
        {words.std}
      </Link>
    </div>
  );
};

export default RSVP;
