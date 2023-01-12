import "./Playlist.css";
import { MdOutlinePauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { useContext} from "react";
import PlayerContext from "../../Utils/PlayerContext";

export function Playlist() {
  const { player, setPlayer } = useContext(PlayerContext);
  const audioElement = player.audioElement;

  const toggle = () => {
    if (!player.song) {
      let song = player.songs[0];
      audioElement.current.src = song.file;
      setPlayer((prev) => {
        return {
          ...prev,
          song,
          index: 0,
        };
      });
    }
    if (audioElement.current.paused) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }

    setPlayer((prev) => {
      return {
        ...prev,
        isPlaying: !audioElement.current.paused,
      };
    });
  };

  const playSong = (song, index) => {
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
    audioElement.current.src = song.file;
    audioElement.current.play();

    setPlayer((prev) => {
      return {
        ...prev,
        index,
        song,
        isPlaying: true,
      };
    });
  };

  return (
    <div className="customplaylist__container">
      <div className="album__cover__container">
        <img
          className="album__cover"
          src="/images/discover.png"
          alt="Album Cover"
        />
        <h3 className="custom__title">Playlist</h3>
        <div className="albumplay__container">
          <div className="album__details">User</div>
          {player.isPlaying ? (
            <MdOutlinePauseCircleFilled
              className="pause__icon"
              onClick={toggle}
            />
          ) : (
            <MdPlayCircleFilled className="pause__icon" onClick={toggle} />
          )}
        </div>
      </div>

      <div className="songlist__container">
        {player.songs.map((song, index) => {
          return (
            <div
              className="song__info"
              key={index}
              onClick={() => playSong(song, index)}
            >
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

export default Playlist;
