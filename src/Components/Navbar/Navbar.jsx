import "../../Styles/Navbar/Navbar.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="menu__container">
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu__button active" : "menu__button"
        }
        to="/"
      >
        <AiFillHome />
        <span>Home</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu__button active" : "menu__button"
        }
      >
        <AiOutlineSearch />
        <span>Search</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu__button active" : "menu__button"
        }
        to="/library"
      >
        <BiLibrary />
        <span>Library</span>
      </NavLink>
    </div>
  );
}

export default Navbar;
