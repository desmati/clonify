import "../Styles/Home.css";
import { Section } from "../Components/Body/Section";
import DiscoverTile from "../Components/Body/DiscoverTile";
import Tile from "../Components/Body/Tile";

export function Home() {
  return (
    <div className="body__container">
      <div>
        <Section title="Discover">
          <DiscoverTile
            title="Discover Weekly"
            description="Our own playlist. Give a try!"
            photo="/images/discover.png"
          />
        </Section>
      </div>

      <Section title="Recommended">
        <div className="body__playlists">
          <div className="playlists__scroll">
            <Tile
              photo="/images/vampire.png"
              name="Coding Mode"
              description="4-2"
            />
            <Tile
              photo="/images/maracatu.png"
              name="New World"
              description="Arneo Turnes - Winter 2020"
            />
            <Tile
              photo="/images/adfab.png"
              name="Beats to think to"
              description="AdFab Open space"
            />
            <Tile
              photo="/images/vostop.png"
              name="Hollow Shell"
              description="Vos Top Titres en 2019"
            />
            <Tile
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
            <Tile
              photo="/images/adfab.png"
              name="Beats to think to"
              description="DAGO Summer mix"
            />
            <Tile
              photo="/images/fleetwoood.png"
              name="Coding Mode"
              description="Rock Classics"
            />
            <Tile
              photo="/images/dailymix.png"
              name="Hollow Shell"
              description="80's Smash Hits"
            />
            <Tile
              photo="/images/adfab.png"
              name="The Rain of Love"
              description="Hip Hop Raggae"
            />
            <Tile
              photo="/images/edbangeer.png"
              name="New World"
              description="Ultimate Dancefloor Oldies"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Home;
