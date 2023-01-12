import "./Navbar.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="menu__container">
      {/* NavLink/Link links the content to our Router by adding the tag "<NavLink /> and adding the path inside of "to" */}
      {/*NavLink is used here in order to be able to toggle through classNames by using the built in "{({ isActive })" in NavLink */}
      <NavLink 
        className={({ isActive }) =>
        //ternary to toggle the classes
          isActive ? "menu__button active" : "menu__button"
        }
        to="/" 
      >
        <AiFillHome />
        <span>Home</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => "menu__button"}>
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
