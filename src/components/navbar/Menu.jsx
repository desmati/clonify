import { useState } from "react";

import { Playlists } from "./Playlists";

import "../../styles/navbar/Menu.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

export function Menu() {
  const [isPlaylistsVisible, setisPlaylistsVisible] = useState(false);

  const onLibraryClick = () => {
    setisPlaylistsVisible(!isPlaylistsVisible);
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
