import "../../styles/navbar/Navbar.css";
import { Playlists } from "./Playlists";
import { Menu } from "./Menu";

export function Navbar() {
  return (
    <div className="navbar__container">
      <Menu />
      <Playlists />
    </div>
  );
}

export default Navbar;
