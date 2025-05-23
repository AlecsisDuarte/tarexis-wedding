import "../main.css";
import { Link } from "react-router-dom";

const RSVP = () => {
  return (
    <div>
      <p className="wilden">Let's get you started</p>
      <Link to="/" className="redirect-button">
        Home
      </Link>
    </div>
  );
};

export default RSVP;
