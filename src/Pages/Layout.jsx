import { useState, useRef} from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Player from "../Components/Player/Player";
import PlayerPopup from "../Components/PlayerPopup/PlayerPopup";
import PlayerContext from "../Utils/PlayerContext";
import Songs from "../Utils/Songs";
import "./Layout.css";

const Layout = () => {
  const [player, setPlayer] = useState({
    songs: Songs,
    index: 0,
    audioElement: useRef(),
  });

  const timeUpdate = () => {
    setPlayer((prev) => {
      return {
        ...prev,
        duration: player.audioElement.current.duration,
        progress: player.audioElement.current.currentTime,
      };
    });
    console.log(player.progress);
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
    <PlayerContext.Provider value={{ player, setPlayer }}>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <main className="body">
          <Outlet />
        </main>
        <nav className="navbar">
          <Navbar />
        </nav>
        <footer className="player">
          <Player />
        </footer>
      </div>
      <audio
        ref={player.audioElement}
        autoPlay
        preload="auto"
        id="audio-element"
        onTimeUpdate={timeUpdate}
        onEnded={ended}
      ></audio>
      <PlayerPopup />
    </PlayerContext.Provider>
  );
};

export default Layout;
