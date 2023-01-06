import "./App.css";
import { Header } from "./components/Header";
import { Body } from "./components/body/Body";
import { Navbar } from "./components/navbar/Navbar";
import { Player } from "./components/player/Player";
import { useState } from "react";
import { PlayerContext } from "./utils/playercontext";
import { Songs } from "./utils/songs";

function App() {
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
          <Body />
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
}

export default App;
