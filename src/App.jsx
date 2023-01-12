import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Library from "./Pages/Library/Library";
import Home from "./Pages/Home/Home";
import Playlist from "./Pages/Playlist/Playlist";
import './App.css'

export const App = () => {
  return (
    <div className="app-container">
      <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/playlist" element={<Playlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
    </div>
  );
};

export default App;
