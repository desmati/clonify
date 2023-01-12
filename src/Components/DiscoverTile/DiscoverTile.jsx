import "./DiscoverTile.css";
import { Link } from "react-router-dom";

//exporting the props
export function DiscoverTile({ title, description, photo }) {
  return (
    <Link className="discover__container" to="/playlist">
      {/* setting the props */}
      <img className="discover__photo" src={photo} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default DiscoverTile;
