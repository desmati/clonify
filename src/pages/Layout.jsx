import { Outlet, Link } from "react-router-dom";
import Menu from "../components/navbar/Menu";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
};

export default Layout;
