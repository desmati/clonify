import "../../styles/navbar/Menu.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

export function Menu() {
  return (
    <div className="menu__container">
      <div className="menu__button active">
        <AiFillHome />
        <span>Home</span>
      </div>
      <div className="menu__button">
        <AiOutlineSearch />
        <span>Search</span>
      </div>
      <div className="menu__button">
        <BiLibrary />
        <span>Library</span>
      </div>
    </div>
  );
}

export default Menu;
