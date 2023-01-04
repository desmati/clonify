import { useState, useEffect } from "react";
import "../../styles/navbar/CustomPlaylist.css";
import { MdOutlinePauseCircleFilled } from "react-icons/md";
import { Songs } from "../../utils/songs";

export function CustomPlaylist() {
  const [songList, setSongList] = useState(Songs);

  return (
    <div className="customplaylist__container">
      <div className="album__cover__container">
        <img className="album__cover" src="/images/discover.png" />
        <h3 className="custom__title">Custom Playlist </h3>
        <div className="albumplay__container">
          <div className="album__details">The Beatles</div>
          <MdOutlinePauseCircleFilled className="pause__icon" />
        </div>
      </div>
      <div>
        {songList.map((song, index) => {
          return (
            <div key={index}>
              <h3> {song.title} </h3>
              <img src={song.image} alt={song.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomPlaylist;
