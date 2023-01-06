import { useContext, useEffect, useState } from "react";
import "../../styles/player/PlayerDetails.css";
import PlayerContext from "../../utils/playercontext";
import { MdOutlinePauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { AiFillStepForward, AiFillStepBackward} from "react-icons/ai";
import { Pause, Play } from "../../utils/audioplayer";

export function PlayerDetails() {
  const { player, setPlayer } = useContext(PlayerContext);
  const [playerInfo, setPlayerInfo] = useState({});

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

  return (
    <div className="player-details__container">
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
					<AiFillStepBackward className="actions"/>
          {player.isPlaying ? <MdOutlinePauseCircleFilled /> : <MdPlayCircleFilled />}
					<AiFillStepForward className="actions"/>
        </div>
				</div>
      </div>
    </div>
  );
}

export default PlayerDetails;
