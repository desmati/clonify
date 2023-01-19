import "./Playlist.css";
import { MdOutlinePauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { useContext } from "react";
import PlayerContext from "../../Utils/PlayerContext";
import { GetSongs } from "../../Utils/Songs";

export function Playlist() {
  //Calling our context hook, calling our state
  const { player, setPlayer } = useContext(PlayerContext);
  const songs = GetSongs();

  //Connecting a audioElement to our player state
  const audioElement = player.audioElement;

  const toggle = () => {
    //If not there is no song selected
    if (!player.song) {
      //select the first song
      let song = songs[0];
      //set the src to that song
      audioElement.current.src = song.file;
      //specifiy the first song
      setPlayer((prev) => {
        return {
          ...prev,
          song,
          index: 0,
        };
      });
    }
    //Paused by default so the only available action is to play
    if (audioElement.current.paused) {
      audioElement.current.play();
    } else {
      //pause again
      audioElement.current.pause();
    }

    setPlayer((prev) => {
      return {
        ...prev,
        //Toggle according to the if statement that toggles the pause and play
        isPlaying: !audioElement.current.paused,
      };
    });
  };

  //Arrow function that plays the song according to the parameters after the function is called "(playSong = (x , x )"
  const playSong = (song, index) => {
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
    audioElement.current.src = song.file;
    setTimeout(() => {
      audioElement.current.play();
    }, 10);

    setPlayer((prev) => {
      return {
        //saving the previous state so we can change under
        ...prev,
        //which song selected by the index since the songs are in an Array Object
        index,
        //playing the current song
        song,
        //Shows us if something is currently playing
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
        {/* Mapping through our Songs.js */}
        {songs.map((song, index) => {
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
