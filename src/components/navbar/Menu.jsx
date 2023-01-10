import { useState } from "react";
import "../../styles/navbar/Menu.css";

import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { Link } from "react-router-dom";

export function Menu() {
  const [activeButton, setactiveButton] = useState("home");
  const onNavClick = (source) => {
  };

  return (
    <>
      <div className="menu__container">
        <Link 
          className={
            activeButton === "home" ? "menu__button active" : "menu__button"
          }
          to="/"
        >
          <AiFillHome />
          <span>Home</span>
        </Link>
        <Link
          className={
            activeButton === "search" ? "menu__button active" : "menu__button"
          }
          onClick={() => onNavClick("search")}
        >
          <AiOutlineSearch />
          <span>Search</span>
        </Link>
        <Link 
          className="menu__button"
          to="/library"
  
        >
          <BiLibrary />
          <span>Library</span>
        </Link>
      </div>
    </>
  );
}

export default Menu;

// The state is false by default. We then attach the state to an onClick function that we set to true with the (!) mark. But it only becomes true when we CLICK. Then we write {isPlaylistsVisible && <Playlists />} to direct it so Playlists when it becomes true.
