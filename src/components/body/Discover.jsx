import "../../styles/body/Discover.css";

export function Discover({ title, description, photo }) {
  return (
    <div className="discover__container">
      <img className="discover__photo" src={photo} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Discover;
