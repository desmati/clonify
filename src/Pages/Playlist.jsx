import "../Styles/Playlist.css";
import { MdOutlinePauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { useContext } from "react";
import PlayerContext from "../Utils/PlayerContext";
import { Pause, Play } from "../Utils/___audioplayer";

export function Playlist() {
  const { player, setPlayer } = useContext(PlayerContext);

  const PlaySong = (source, song, index) => {
    let startOver = false;
    if (source === "list") {
      // If the button at the top is clicked
      if (player.playerId) {
        // If have a paused song
        index = player.index;
        song = player.song;
      } else {
        // If the page is fresh and the user just started playing
        index = 0;
        song = player.songs[index];
        startOver = true;
      }
    } else {
      // If the songs in the list are clicked one by one
      startOver = true;
    }

    let playerId = Play(song.file, player.playerId, startOver, () => {
      // This ehole function is for looping

      if (index >= player.songs.length - 1) {
        // It means we reached the end of the palylist. So we stop.
        return;
      }

      index++;
      let nextSong = player.songs[index];

      setTimeout(() => {
        // We are using 500ms delay to play the next song in the sake of having some pause between the songs
        PlaySong("single", nextSong, index);
      }, 500);
    });

    setPlayer((prev) => {
      return {
        ...prev,
        index,
        song,
        playerId,
        isPlaying: true,
      };
    });
  };

  const PauseSong = () => {
    Pause(player.playerId);
    setPlayer((prev) => {
      return { ...prev, isPlaying: false };
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
          <div className="album__details">The Beatles</div>
          {player.isPlaying ? (
            <MdOutlinePauseCircleFilled
              className="pause__icon"
              onClick={PauseSong}
            />
          ) : (
            <MdPlayCircleFilled
              className="pause__icon"
              onClick={() => PlaySong("list")}
            />
          )}
        </div>
      </div>

      <div className="songlist__container">
        {player.songs.map((song, index) => {
          return (
            <div
              className="song__info"
              key={index}
              onClick={() => PlaySong("single", song, index)}
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
