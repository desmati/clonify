import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Library from "./pages/Library";
import SongPlayList from "./pages/SongPlayList";

import { PlayerContext } from "./utils/playercontext";
import Songs from "./utils/songs";
import Body from "./components/body/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="/library" element={<Library />} />
          <Route path="/songplaylist" element={<SongPlayList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
