import { useState } from "react";
import "../../styles/body/Body.css";
import { CustomPlaylist } from "../navbar/CustomPlaylist";
import { Section } from "./Section";
import { Discover } from "./Discover";
import { Playlist } from "./Playlist";

export function Body() {
  const [sendToPlaylist, setSendToPlaylist] = useState(false);

  const clickDiscovery = () => {
    setSendToPlaylist(!sendToPlaylist);
  };

  const onHomeClick = () => {
    setSendToPlaylist(false);
  };

  return (
    <div className="body__container">
      <div onClick={clickDiscovery}>
        <Section title="Discover">
          <Discover
            title="Discover Weekly"
            description="Our own playlist. Give a try!"
            photo="/images/discover.png"
          />
        </Section>
      </div>

      <Section title="Recommended">
        <div className="body__playlists">
          <div className="playlists__scroll">
            <Playlist
              photo="/images/vampire.png"
              name="Coding Mode"
              description="4-2"
            />
            <Playlist
              photo="/images/maracatu.png"
              name="New World"
              description="Arneo Turnes - Winter 2020"
            />
            <Playlist
              photo="/images/adfab.png"
              name="Beats to think to"
              description="AdFab Open space"
            />
            <Playlist
              photo="/images/vostop.png"
              name="Hollow Shell"
              description="Vos Top Titres en 2019"
            />
            <Playlist
              photo="/images/edbangeer.png"
              name="The Rain of Love"
              description="Ed Banger 15 ans"
            />
          </div>
        </div>
      </Section>

      <Section title="Made For You">
        <div className="body__playlists">
          <div className="playlists__scroll">
            <Playlist
              photo="/images/adfab.png"
              name="Beats to think to"
              description="DAGO Summer mix"
            />
            <Playlist
              photo="/images/fleetwoood.png"
              name="Coding Mode"
              description="Rock Classics"
            />
            <Playlist
              photo="/images/dailymix.png"
              name="Hollow Shell"
              description="80's Smash Hits"
            />
            <Playlist
              photo="/images/adfab.png"
              name="The Rain of Love"
              description="Hip Hop Raggae"
            />
            <Playlist
              photo="/images/edbangeer.png"
              name="New World"
              description="Ultimate Dancefloor Oldies"
            />
          </div>
        </div>
      </Section>
      {sendToPlaylist && <CustomPlaylist />}
    </div>
  );
}

export default Body;
