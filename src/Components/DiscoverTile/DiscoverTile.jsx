import "./DiscoverTile.css";
import { Link } from "react-router-dom";

export function DiscoverTile({ title, description, photo }) {
  return (
    <Link className="discover__container" to="/playlist">
      <img className="discover__photo" src={photo} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default DiscoverTile;
