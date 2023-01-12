import { useContext } from "react";
import PlayerContext from "../Utils/PlayerContext";

export const AudioElement = () => {
  const { player, setPlayer } = useContext(PlayerContext);

  const timeUpdate = () => {
    setPlayer((prev) => {
      return {
        ...prev,
        duration: player.audioElement.current.duration,
        progress: player.audioElement.current.currentTime,
      };
    });
  };

  const ended = () => {
    const audioElement = player.audioElement;
    const nextIndex =
      player.index >= player.songs.length - 1 ? 0 : player.index + 1;
    const nextSong = player.songs[nextIndex];
    if (player.index === player.songs.length - 1) {
      setPlayer((prev) => {
        return {
          ...prev,
          index: 0,
          song: nextSong,
          isPlaying: false,
          progress: 0,
        };
      });
      return;
    }
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

  return (
    <audio
      ref={player.audioElement}
      autoPlay
      preload="auto"
      id="audio-element"
      onTimeUpdate={timeUpdate}
      onEnded={ended}
    ></audio>
  );
};
