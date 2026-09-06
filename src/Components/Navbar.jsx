import { NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/vm.png";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <NavLink to="/" className="logo">
          <img
            src={logo}
            alt="Vintage Motors"
            className="logo-image"
          />

          <div className="logo-text">
            VINTAGE
            <small>MOTORS</small>
          </div>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/profile">Profile</NavLink>

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "☼" : "☾"}
          </button>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;