import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import { AudioElement } from "../Components/Player/AudioElement";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Player from "../Components/Player/Player";
import PlayerPopup from "../Components/PlayerPopup/PlayerPopup";
import PlayerContext from "../Utils/PlayerContext";
import Songs from "../Utils/Songs";
import "./Layout.css";

const Layout = () => {
  //This is our main state that we've turned to being global with useContext hook and it's content
  const [player, setPlayer] = useState({
    //Connecting the Songs.js content to our global state
    songs: Songs,
    index: 0,
    audioElement: useRef(),
    isPopupVisible: false,
    progress: 0,
    duration: 0,
    song: null,
  });

  return (
    //Wrapping the context around our Layout.jsx with "PlayerContext.Provider".
    <PlayerContext.Provider value={{ player, setPlayer }}>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <main className="body">
          {/* Built in component which renders the components in Route */}
          <Outlet />
        </main>
        <nav className="navbar">
          <Navbar />
        </nav>
        <footer className="player">
          <Player />
        </footer>
      </div>
      <AudioElement />
      <PlayerPopup />
    </PlayerContext.Provider>
  );
};

export default Layout;
