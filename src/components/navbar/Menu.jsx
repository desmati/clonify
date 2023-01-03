import { useState } from "react";

import { Playlists } from "./Playlists";

import "../../styles/navbar/Menu.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

export function Menu() {
  const [isPlaylistsVisible, setisPlaylistsVisible] = useState(false); //false

  const onLibraryClick = () => {
    setisPlaylistsVisible(!isPlaylistsVisible); // true
  };

  const onHomeClick = () => {
    setisPlaylistsVisible(false);
  };

  return (
    <>
      <div className="menu__container">
        <div className="menu__button active" onClick={onHomeClick}>
          <AiFillHome />
          <span>Home</span>
        </div>
        <div className="menu__button">
          <AiOutlineSearch />
          <span>Search</span>
        </div>
        <div className="menu__button" onClick={onLibraryClick}>
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
