import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearFavorites } from "../Redux/favoritesSlice";

function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.favorites
  );

  const handleClear = () => {
    if (favorites.length === 0) return;

    const confirmed = window.confirm(
      "Remove all automobiles from your private garage?"
    );

    if (confirmed) {
      dispatch(clearFavorites());
    }
  };

  return (
    <main className="editorial-page favorites-page">

      {/* HERO */}
      <section className="editorial-hero favorites-editorial-hero">

        <div className="editorial-container">

          <p className="eyebrow">
            VINTAGE MOTORS · PRIVATE GARAGE
          </p>

          <h1>
            Your
            <br />
            <em>collection.</em>
          </h1>

          <div className="editorial-hero-bottom">

            <p>
              The automobiles you've chosen to keep close.
              A personal selection from the Vintage Motors archive.
            </p>

            <span>
              {String(favorites.length).padStart(2, "0")} SAVED
            </span>

          </div>

        </div>

      </section>


      {/* HEADER */}
      <section className="favorites-header">

        <div className="editorial-container favorites-header-inner">

          <div>

            <p className="eyebrow">SAVED AUTOMOBILES</p>

            <h2>
              {favorites.length}
              <em> classics.</em>
            </h2>

          </div>

          {favorites.length > 0 && (
            <button
              type="button"
              className="text-action"
              onClick={handleClear}
            >
              Clear Garage
            </button>
          )}

        </div>

      </section>


      {/* CONTENT */}
      <section className="favorites-content">

        <div className="editorial-container">

          {favorites.length === 0 ? (

            <div className="favorites-empty">

              <span className="empty-mark">VM</span>

              <p className="eyebrow">
                PRIVATE GARAGE
              </p>

              <h2>
                Your garage
                <br />
                <em>is waiting.</em>
              </h2>

              <p>
                Explore the archive and save the automobiles
                that deserve a place in your collection.
              </p>

              <Link
                to="/collection"
                className="editorial-button"
              >
                Explore The Archive →
              </Link>

            </div>

          ) : (

            <div className="favorites-register">

              {favorites.map((car, index) => (

                <article
                  className="favorite-register-item"
                  key={car.id}
                >

                  <Link
                    to={`/collection/${car.id}`}
                    className="favorite-image"
                  >
                    <img
                      src={car.image}
                      alt={`${car.year} ${car.brand} ${car.name}`}
                    />

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>


                  <div className="favorite-information">

                    <span className="favorite-year">
                      {car.year}
                    </span>

                    <div>
                      <span>{car.brand}</span>
                      <h3>{car.name}</h3>
                    </div>

                    <span className="favorite-category">
                      {car.category}
                    </span>

                    <Link
                      to={`/collection/${car.id}`}
                      className="favorite-view"
                    >
                      View Details →
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* CLOSING */}
      <section className="editorial-cta favorites-closing">

        <div className="editorial-container">

          <p className="eyebrow">
            THE GOLDEN ERA
          </p>

          <h2>
            1950s.
            <br />
            1960s.
            <br />
            <em>1970s.</em>
          </h2>

          <p>
            A private garage built around the greatest decades
            of classic automobile design.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Favorites;