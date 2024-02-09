
import "./NavBar.css";
import logo from "../../img/DB2.svg";
import NavBurger from "./NavBurger";

export const NavBar = () => {
  return (
    <nav
      className="nav"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="nav-h">
        <NavBurger />
        <img
          alt="logo"
          className="logo-img"
          src={logo}
          onClick={() => window.location.reload()}
        />
      </div>
    </nav>
  )
};


