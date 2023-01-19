import { useContext } from "react";
import PlayerContext from "../../Utils/PlayerContext";
import { GetSongs } from "../../Utils/Songs";

export const AudioElement = () => {
  const { player, setPlayer } = useContext(PlayerContext);
  const songs = GetSongs();

  const timeUpdate = () => {
    setPlayer((prev) => {
      return {
        ...prev,
        //duration and currentTime are built in he html tag "progress" so we just added them to the global state
        duration: player.audioElement.current.duration,
        progress: player.audioElement.current.currentTime,
      };
    });
  };

  //Loop function
  const ended = () => {
    //Because of scope, we need to create a audioElement variable and then connect it to our global state
    const audioElement = player.audioElement;

    //When song ends, select the next song, if we're on the current song choose the next
    const nextIndex =
      player.index >= songs.length - 1 ? 0 : player.index + 1;

    //Connecting a variable to songs.js and our nextIndex variable so it knows where it should fetch that index
    const nextSong = GetSongs(nextIndex);

    //When the loop reaches the last song and the song has finished then return the first song but paused
    if (player.index === songs.length - 1) {
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
    //Choose the next song
    audioElement.current.src = nextSong.file;

    //Delay between the pause and play
    setTimeout(() => {
      audioElement.current.play();
    }, 10);

    //update our global state
    setPlayer((prev) => {
      return {
        ...prev,
        index: nextIndex,
        song: nextSong,
      };
    });
  };

  return (
    //Our html audio Element with different atrributes
    <audio
      //useRef hook used in order to acess this element everywhere we are and to avoid creating a new element for each song. It will always use the same element but the atttributes will change according to the state. //
      ref={player.audioElement}
      autoPlay
      preload="auto"
      id="audio-element"
      //onTimeUpdate is built in, equals to the function "timeUpdate"
      onTimeUpdate={timeUpdate}
      //calling the loop function
      onEnded={ended}
    ></audio>
  );
};
