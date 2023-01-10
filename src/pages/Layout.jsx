import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/navbar/Menu";
import Navbar from "../components/navbar/Navbar";
import Player from "../components/player/Player";
import PlayerContext from "../utils/playercontext";
import Songs from "../utils/songs";

const Layout = () => {
  const [player, setPlayer] = useState({
    songs: Songs,
    index: 0,
  });

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
    </PlayerContext.Provider>
  );
};

export default Layout;
