import { useState, useRef, useEffect } from "react";
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
    console.log(player.duration);
  };

  // useEffect(() => {
  //   player.audioElement.current.addEventListner("timeUpdate" = () => {

  //     console.log(player);
  //   });
  // }, [player]);

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
      ></audio>
      <PlayerPopup />
    </PlayerContext.Provider>
  );
};

export default Layout;
