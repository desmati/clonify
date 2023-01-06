import { useContext } from "react";
import "../../styles/navbar/Navbar.css";
import { Menu } from "./Menu";
import { PlayerContext } from "../../utils/playercontext";

export function Navbar() {
  return (
    <div className="navbar__container">
      <Menu />
    </div>
  );
}

export default Navbar;
