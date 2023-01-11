import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Library from "./Pages/Library/Library";
import Home from "./Pages/Home/Home";
import Playlist from "./Pages/Playlist/Playlist";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
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
);
