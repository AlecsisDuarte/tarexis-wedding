import '../main.css'
import { Link } from 'react-router-dom';

const Travel = () => {
  return (
    <div>
      <p className="wilden">Vamonos al Valle de Guadalupe</p>
      <Link to="/" className='redirect-button'>Home</Link>
    </div>
  );
};

export default Travel;