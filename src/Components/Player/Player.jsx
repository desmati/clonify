import { useContext, useEffect, useState, useRef } from "react";
import "./Player.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { Pause, Play } from "../../Utils/___audioplayer";
import PlayerContext from "../../Utils/PlayerContext";
import PlayerPopup from "../PlayerPopup/PlayerPopup";

export function Player() {
  const { player, setPlayer } = useContext(PlayerContext);
  const [playerInfo, setPlayerInfo] = useState({});

  const audioElement = player.audioElement;
  // useEffect(() => {
  //   const audioElement = document.getElementById(player.playerId);
  //   if (!audioElement) {
  //     return;
  //   }

  //   // audioElement.addEventListener("timeupdate", () => {
  //   //   setPlayerInfo({
  //   //     duration: audioElement.duration,
  //   //     progress: audioElement.currentTime,
  //   //   });
  //   // });
  // }, [player]);

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

  const ShowPopup = () => {
    setPlayer((prev) => {
      return {
        ...prev,
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
        max={playerInfo.duration}
        value={playerInfo.progress}
      ></progress>
    </div>
  );
}

export default Player;
