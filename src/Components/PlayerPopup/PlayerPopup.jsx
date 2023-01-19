import { useContext, useEffect } from "react";
import "./PlayerPopup.css";
import { MdOutlinePauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import PlayerContext from "../../Utils/PlayerContext";
import { GetSongs } from "../../Utils/Songs";

export function PlayerPopup() {
  const { player, setPlayer } = useContext(PlayerContext);
  const songs = GetSongs();
  useEffect(() => {
    if (player.song) {
      document.title = `${player.song.title} - Esmatify`;
    }
  }, [player]);

  const audioElement = player.audioElement;

  const skipForward = () => {
    let nextIndex = player.index >= songs.length - 1 ? 0 : player.index + 1;
    const nextSong = GetSongs(nextIndex);
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
    const prevIndex = player.index === 0 ? songs.length - 1 : player.index - 1;
    const prevSong = GetSongs(prevIndex);
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

  //PopUp Toggle
  const closePopup = () => {
    setPlayer((prev) => {
      return {
        ...prev,
        isPopupVisible: false,
      };
    });
  };

  //if popUp is false then return an empty component
  if (!player.isPopupVisible) {
    return <></>;
  }
  //else return below content
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
