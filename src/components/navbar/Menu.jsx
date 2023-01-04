import { useState } from "react";

import { Playlists } from "./Playlists";

import "../../styles/navbar/Menu.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

export function Menu() {
  const [isPlaylistsVisible, setisPlaylistsVisible] = useState(false); //false
  const [activeButton, setactiveButton] = useState("home");

  const onNavClick = (source) => {
    setactiveButton(source);
    setisPlaylistsVisible(false);
    if (source === "library") {
      setisPlaylistsVisible(true);
    }
  };

  return (
    <>
      <div className="menu__container">
        <div
          className={
            activeButton === "home" ? "menu__button active" : "menu__button"
          }
          onClick={() => onNavClick("home")}
        >
          <AiFillHome />
          <span>Home</span>
        </div>
        <div
          className={
            activeButton === "search" ? "menu__button active" : "menu__button"
          }
          onClick={() => onNavClick("search")}
        >
          <AiOutlineSearch />
          <span>Search</span>
        </div>
        <div
          className={
            activeButton === "library" ? "menu__button active" : "menu__button"
          }
          onClick={() => onNavClick("library")}
        >
          <BiLibrary />
          <span>Library</span>
        </div>
      </div>
      {isPlaylistsVisible && <Playlists />}
    </>
  );
}

export default Menu;

// The state is false by default. We then attach the state to an onClick function that we set to true with the (!) mark. But it only becomes true when we CLICK. Then we write {isPlaylistsVisible && <Playlists />} to direct it so Playlists when it becomes true.
