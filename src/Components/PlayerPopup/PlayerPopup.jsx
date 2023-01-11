import { useContext, useEffect, useState, useRef } from "react";
import "./PlayerPopup.css";
import { MdOutlinePauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import PlayerContext from "../../Utils/PlayerContext";
import { Pause, Play } from "../../Utils/___audioplayer";

export function PlayerPopup() {
  const { player, setPlayer } = useContext(PlayerContext);
  const [playerInfo, setPlayerInfo] = useState({});

  const testRef = useRef();

  const skipForward = () => {
    const nextIndex =
      player.index >= player.songs.length - 1 ? 0 : player.index + 1;
    const nextSong = player.songs[nextIndex];
    console.log(testRef);
    const playerId = Play(nextSong.file);

    setPlayer((prev) => {
      return {
        ...prev,
        index: nextIndex,
        song: nextSong,
        playerId: playerId,
      };
    });
  };

  const skipBackwards = () => {
    const prevIndex =
      player.index === 0 ? player.songs.length - 1 : player.index - 1;
    const prevSong = player.songs[prevIndex];

    const playerId = Play(prevSong.file);

    setPlayer((prev) => {
      return {
        ...prev,
        index: prevIndex,
        song: prevSong,
        playerId: playerId,
      };
    });
  };

  useEffect(() => {
    const audioElement = document.getElementById(player.playerId);
    if (!audioElement) {
      return;
    }

    audioElement.addEventListener("timeupdate", () => {
      setPlayerInfo({
        duration: audioElement.duration,
        progress: audioElement.currentTime,
      });
    });
  }, [player]);

  if (!player.playerId) {
    return <></>;
  }

  const Toggle = () => {
    if (player.isPlaying) {
      Pause(player.playerId);
    } else {
      Play(player.song.file, player.playerId, false);
    }

    setPlayer((prev) => {
      return {
        ...prev,
        isPlaying: !prev.isPlaying,
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
            max={playerInfo.duration}
            value={playerInfo.progress}
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
