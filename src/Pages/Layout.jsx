import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar/Navbar";
import Player from "../Components/Player/Player";
import PlayerContext from "../Utils/PlayerContext";
import Songs from "../Utils/Songs";
import "../Styles/Layout.css";

const Layout = () => {
  const [player, setPlayer] = useState({
    songs: Songs,
    index: 0,
  });

  const testRef = useRef();
  console.log(testRef);

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
      <audio ref={testRef}></audio>
    </PlayerContext.Provider>
  );
};

export default Layout;
