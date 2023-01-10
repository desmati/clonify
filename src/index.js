
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Library from "./Pages/Library";
import SongPlayList from "./Pages/SongPlayList";
import Home from "./Pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/songplaylist" element={<SongPlayList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
