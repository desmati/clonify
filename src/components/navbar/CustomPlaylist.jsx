import "../../styles/navbar/CustomPlaylist.css";
import { MdOutlinePauseCircleFilled } from "react-icons/md"

export function CustomPlaylist() {
  return (
    <div className="customplaylist__container">
      <div className="album__cover__container">
        <img className="album__cover" src="/images/discover.png" />

        <h3 className="custom__title">Custom Playlist </h3>
        <div className="albumplay__container">
        <div className="album__details">The Beatles</div>
        <MdOutlinePauseCircleFilled className="pause__icon"/>
        </div>
      </div>
    </div>
  );
}

export default CustomPlaylist;
