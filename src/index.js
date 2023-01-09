import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Library from "./pages/Library";
import SongPlayList from "./pages/SongPlayList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/library" element={<Library />} />
          <Route path="/songplaylist" element={<SongPlayList />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
