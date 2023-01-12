import "./Tile.css";

//exporting the props
export function Tile({ title, description, photo }) {
  return (
    <div className="playlist__container">
      {/* setting the props */}
      <img className="playlist__photo" src={photo} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Tile;
