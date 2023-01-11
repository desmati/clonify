import { useContext} from "react";
import "./PlayerPopup.css";
import { MdOutlinePauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import PlayerContext from "../../Utils/PlayerContext";

export function PlayerPopup() {
  const { player, setPlayer } = useContext(PlayerContext);

  const audioElement = player.audioElement;

  const skipForward = () => {
    const nextIndex =
      player.index >= player.songs.length - 1 ? 0 : player.index + 1;
    const nextSong = player.songs[nextIndex];
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
    audioElement.current.src = nextSong.file;
    setTimeout(() => {
      audioElement.current.play();
    }, 10);

    setPlayer((prev) => {
      return {
        ...prev,
        index: nextIndex,
        song: nextSong,
      };
    });
  };

  const skipBackwards = () => {
    const prevIndex =
      player.index === 0 ? player.songs.length - 1 : player.index - 1;
    const prevSong = player.songs[prevIndex];

    audioElement.current.pause();
    audioElement.current.currentTime = 0;
    audioElement.current.src = prevSong.file;
    setTimeout(() => {
      audioElement.current.play();
    }, 10);

    setPlayer((prev) => {
      return {
        ...prev,
        index: prevIndex,
        song: prevSong,
      };
    });
  };

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

  const closePopup = () => {
    setPlayer((prev) => {
      return {
        ...prev,
        isPopupVisible: false,
      };
    });
  };

  if (!player.isPopupVisible) {
    return <></>;
  }

  return (
    <div className="player-details__container">
      <IoIosArrowBack onClick={closePopup} />
      <img src={player.song.image} alt={player.song.title} />
      <div className="player-details__footer">
        <h4>{player.song.title}</h4>
        <span className="player-details__artist">{player.song.artist}</span>
        <div className="player-details__controls">
          <progress
            min="0"
            max={player.duration ? player.duration : 1}
            value={player.progress}
          ></progress>
          <div className="player-details__actions" onClick={Toggle}>
            <AiFillStepBackward className="actions" onClick={skipBackwards} />
            {player.isPlaying ? (
              <MdOutlinePauseCircleFilled />
            ) : (
              <MdPlayCircleFilled />
            )}
            <AiFillStepForward className="actions" onClick={skipForward} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerPopup;
