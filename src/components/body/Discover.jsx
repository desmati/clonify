import "../../styles/body/Discover.css";
import { Link } from "react-router-dom";

export function Discover({ title, description, photo }) {
  return (
    <Link className="discover__container" to="/songplaylist">
      <img className="discover__photo" src={photo} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
    </Link>
  );
}

export default Discover;
