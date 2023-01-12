import { useContext} from "react";
import "./Player.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import PlayerContext from "../../Utils/PlayerContext";


export function Player() {
  const { player, setPlayer } = useContext(PlayerContext);

  const audioElement = player.audioElement;

  //If there is no song selected then return nothing
  if (!player.song) {
    return <></>;
  }

  const Toggle = () => {
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

  //Toggle for our PopUp page
  const ShowPopup = () => {
    setPlayer((prev) => {
      return {
        ...prev,
        
        //display or hide our popup
        isPopupVisible: true,
      };
    });
  };

  return (
    <div className="player__container">
      <div className="player__song-info" onClick={ShowPopup}>
        <img src={player.song.image} alt={player.song.title} />
        <div className="player__song-details">
          <h4>{player.song.title}</h4>
          <span>{player.song.artist}</span>
        </div>
      </div>
      <div className="player__actions" onClick={Toggle}>
        {player.isPlaying ? <BsPauseFill /> : <BsPlayFill />}
      </div>
      <progress
        min="0"
        //connecting the max to our global state so we can get the songs duration
        max={player.duration ? player.duration : 1}
        //connecting the value to our global state so we can get the songs progress
        value={player.progress}
      ></progress>
    </div>
  );
}

export default Player;
