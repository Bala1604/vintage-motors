import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span>VM</span>

            <div>
              VINTAGE
              <small>MOTORS</small>
            </div>
          </Link>

          <p>
            A private archive of remarkable automobiles
            from the golden age of motoring.
          </p>

          <span className="footer-est">
            EST. 1955 — PRIVATE COLLECTION
          </span>

        </div>

        <div className="footer-column">

          <span className="footer-heading">
            EXPLORE
          </span>

          <Link to="/">Home</Link>
          <Link to="/collection">Collection</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/favorites">Favorites</Link>

        </div>

        <div className="footer-column">

          <span className="footer-heading">
            SERVICES
          </span>

          <Link to="/services/restoration">
            Restoration
          </Link>

          <Link to="/services/inspection">
            Inspection
          </Link>

          <Link to="/services/consultation">
            Consultation
          </Link>

          <Link to="/contact">
            Private Concierge
          </Link>

        </div>

        <div className="footer-column">

          <span className="footer-heading">
            ARCHIVE
          </span>

          <span>1955</span>
          <span>1957</span>
          <span>1959</span>
          <span>1961</span>
          <span>1964</span>
          <span>1965</span>
          <span>1967</span>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Vintage Motors
        </span>

        <span>
          PRESERVING AUTOMOTIVE HISTORY
        </span>

        <Link to="/admin/cars">
          ADMIN ARCHIVE →
        </Link>

      </div>

    </footer>
  );
}

export default Footer;