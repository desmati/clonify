import { useState } from "react";
import "../../styles/navbar/CustomPlaylist.css";
import { MdOutlinePauseCircleFilled } from "react-icons/md";
import { Songs } from "../../utils/songs";
import { Play } from "../../utils/audioplayer";

export function CustomPlaylist() {
  const [songList, setSongList] = useState(Songs);
  const {player, setPlayer} = useContext(PlayerContext);
  const Playsong = () => {
    Play(songList[0].file, () => {
      console.log("blabla");
    });
  };

  return (
    <div className="customplaylist__container">
      <div className="album__cover__container">
        <img className="album__cover" src="/images/discover.png" />
        <h3 className="custom__title">Custom Playlist </h3>
        <div className="albumplay__container">
          <div className="album__details">The Beatles</div>
          <MdOutlinePauseCircleFilled
            className="pause__icon"
            onClick={Playsong}
          />
        </div>
      </div>

      <div className="songlist__container">
        {songList.map((song, index) => {
          return (
            <div className="song__info" key={index}>
              <div className="song__test">
                <div className="song__details">
                  <img src={song.image} alt={song.title} />
                  <div className="song__description">
                    <h3> {song.title} </h3>
                    <p>{song.artist}</p>
                  </div>
                </div>
                <p> {song.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomPlaylist;
