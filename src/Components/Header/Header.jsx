import "./Header.css";
import { CiSettings } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

export function Header() {
  return (
    <div className="header__container">
      <div className="greeting">Good Day</div>
      <div className="user__profile">
        <div className="user__avatar">
          <FaUserCircle className="user__photo" />
          <div className="user__name">John Wick</div>
        </div>
        <CiSettings className="settings" />
      </div>
    </div>
  );
}

export default Header;
