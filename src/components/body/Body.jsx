import "../../styles/body/Body.css";
import { Section } from "./Section";
import { Discover } from "./Discover";
import { Playlist } from "./Playlist";

export function Body() {
  return (
    <div className="body__container">
      <Section title="Discover">
        <Discover
          title="Discover Weekly"
          description="Our own playlist. Give a try!"
          photo="/images/discover.png"
        />
      </Section>

      <Section title="Recommended">
        <div className="body__playlists">
          <div className="playlists__scroll">
            <Playlist
              photo="/images/cover.png"
              name="Coding Mode"
              description="Hans Zimmer, Daft Punk, Khruangbin"
            />
            <Playlist
              photo="/images/cover.png"
              name="New World"
              description="Ebi"
            />
            <Playlist
              photo="/images/cover.png"
              name="Beats to think to"
              description="N'to, HVOB, Heater"
            />
            <Playlist
              photo="/images/cover.png"
              name="Hollow Shell"
              description="Cava"
            />
            <Playlist
              photo="/images/cover.png"
              name="The Rain of Love"
              description="Naser Cheshm Azar"
            />
          </div>
        </div>
      </Section>

      <Section title="Made For You">
        <div className="body__playlists">
          <div className="playlists__scroll">
            <Playlist
              photo="/images/cover.png"
              name="Beats to think to"
              description="N'to, HVOB, Heater"
            />
            <Playlist
              photo="/images/cover.png"
              name="Coding Mode"
              description="Hans Zimmer, Daft Punk, Khruangbin"
            />
            <Playlist
              photo="/images/cover.png"
              name="Hollow Shell"
              description="Cava"
            />
            <Playlist
              photo="/images/cover.png"
              name="The Rain of Love"
              description="Naser Cheshm Azar"
            />
            <Playlist
              photo="/images/cover.png"
              name="New World"
              description="Ebi"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Body;
