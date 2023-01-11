import "../../styles/body/Playlist.css";

export function Playlist({ title, description, photo }) {
  return (
    <div className="playlist__container">
      <img className="playlist__photo" src={photo} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Playlist;
