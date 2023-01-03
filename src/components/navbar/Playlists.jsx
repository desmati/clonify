import { useState } from "react";
import { CustomPlaylist } from "./CustomPlaylist";
import { Discover } from "../body/Discover";
import { AiOutlineSearch } from "react-icons/ai";

import "../../styles/navbar/Playlists.css";

export function Playlists() {
  const [isCustomPlaylistsVisible, setisCustomPlaylistsVisible] =
    useState(false);

  const onCustomPlaylistClick = () => {
    setisCustomPlaylistsVisible(!isCustomPlaylistsVisible);
  };

  return (
    <>
      <div className="playlists__container">
        <div className="search__container">
          <AiOutlineSearch className="search__symbol" />
          <input type="search" placeholder=" Search for Playlists" />
        </div>
        <h2>Playlists</h2>
        <div className="create__playlist">
          <button>+</button>
          <h3>Create playlist</h3>
        </div>

        <div className="discover__playlist" onClick={onCustomPlaylistClick}>
          <Discover
            title="Spotify Hits"
            description="Our own playlist. Give a try!"
            photo="/images/discover.png"
          />
          <Discover
            title="Summer Mix"
            description="2022"
            photo="/images/discover.png"
          />
          <Discover
            title="Hip-Hop 2000's"
            description="Best of all time"
            photo="/images/discover.png"
          />
          <Discover
            title="Afro Beat Mix"
            description="2022"
            photo="/images/discover.png"
          />
        </div>
      </div>
      {isCustomPlaylistsVisible && <CustomPlaylist />}
    </>
  );
}

export default Playlists;
