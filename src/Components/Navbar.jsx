import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* BRAND */}
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">VM</span>

          <span className="brand-name">
            VINTAGE MOTORS
            <small>PRIVATE AUTOMOTIVE ARCHIVE</small>
          </span>
        </NavLink>

        {/* DESKTOP / MOBILE MENU */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/collection" onClick={closeMenu}>
            Collection
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink to="/favorites" onClick={closeMenu}>
            Favorites
          </NavLink>

          <NavLink to="/profile" onClick={closeMenu}>
            Profile
          </NavLink>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            {theme === "dark" ? "☼" : "☾"}
          </button>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          type="button"
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;