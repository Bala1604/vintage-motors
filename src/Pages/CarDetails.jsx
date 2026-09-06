import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import cars from "../Data/cars";
import { toggleFavorite } from "../Redux/favoritesSlice";

function CarDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.favorites
  );

  const car = cars.find(
    (item) => String(item.id) === String(id)
  );

  if (!car) {
    return (
      <main className="premium-details-page">

        <section className="details-not-found">

          <span className="eyebrow">
            ARCHIVE ERROR
          </span>

          <h1>
            Automobile
            <br />
            <em>Not Found.</em>
          </h1>

          <Link to="/collection">
            RETURN TO COLLECTION →
          </Link>

        </section>

      </main>
    );
  }

  const isFavorite = favorites.some(
    (item) => item.id === car.id
  );

  const relatedCars = cars
    .filter((item) => item.id !== car.id)
    .filter(
      (item) =>
        item.year >= 1950 &&
        item.year <= 1979
    )
    .slice(0, 3);

  return (
    <main className="premium-details-page">

      {/* BREADCRUMB */}

      <div className="details-breadcrumb">

        <Link to="/">
          HOME
        </Link>

        <span>/</span>

        <Link to="/collection">
          COLLECTION
        </Link>

        <span>/</span>

        <strong>
          {car.year}
        </strong>

      </div>


      {/* MAIN */}

      <section className="premium-details-main">

        {/* IMAGE */}

        <div className="premium-details-image">

          <img
            src={car.image}
            alt={`${car.year} ${car.brand} ${car.name}`}
          />

          <div className="details-image-label">
            {car.year} · {car.brand}
          </div>

          <button
            className={`details-heart ${
              isFavorite ? "active" : ""
            }`}
            onClick={() => dispatch(toggleFavorite(car))}
            aria-label="Toggle favorite"
          >
            {isFavorite ? "♥" : "♡"}
          </button>

        </div>


        {/* CONTENT */}

        <div className="premium-details-content">

          <span className="eyebrow">
            {car.category}
          </span>

          <h1>
            {car.name}
            <br />
            <em>{car.brand}</em>
          </h1>

          <div className="details-rule"></div>

          <p className="details-lead">
            {car.description}
          </p>

          <div className="details-price-block">

            <span>
              ARCHIVE VALUE
            </span>

            <strong>
              ${Number(car.price).toLocaleString()}
            </strong>

          </div>


          {/* SPECS */}

          <div className="premium-specs">

            <div>
              <span>YEAR</span>
              <strong>{car.year}</strong>
            </div>

            <div>
              <span>ENGINE</span>
              <strong>{car.engine}</strong>
            </div>

            <div>
              <span>TRANSMISSION</span>
              <strong>{car.transmission}</strong>
            </div>

            <div>
              <span>CLASS</span>
              <strong>{car.category}</strong>
            </div>

          </div>


          <div className="details-actions-row">

            <button
              className={`details-save ${
                isFavorite ? "saved" : ""
              }`}
              onClick={() => dispatch(toggleFavorite(car))}
            >
              {isFavorite
                ? "♥ SAVED TO GARAGE"
                : "♡ SAVE TO GARAGE"}
            </button>

            <button
              className="details-back"
              onClick={() => navigate("/collection")}
            >
              ← COLLECTION
            </button>

          </div>

        </div>

      </section>


      {/* STORY */}

      <section className="premium-story">

        <div className="premium-story-number">
          01
        </div>

        <div>

          <span className="eyebrow">
            THE STORY
          </span>

          <h2>
            More than a
            <br />
            <em>machine.</em>
          </h2>

          <p>
            {car.story}
          </p>

          <p>
            Every automobile in the Vintage Motors archive belongs
            to the 1950–1979 golden age of automotive design.
            We preserve these machines because their character
            cannot be reproduced.
          </p>

        </div>

      </section>


      {/* RELATED */}

      <section className="premium-related">

        <div className="premium-section-heading">

          <div>
            <span className="eyebrow">
              CONTINUE EXPLORING
            </span>

            <h2>
              From the
              <em> Archive.</em>
            </h2>
          </div>

          <Link to="/collection">
            VIEW COMPLETE COLLECTION →
          </Link>

        </div>

        <div className="premium-related-grid">

          {relatedCars.map((relatedCar) => (

            <article
              className="related-car-card"
              key={relatedCar.id}
            >

              <img
                src={relatedCar.image}
                alt={`${relatedCar.year} ${relatedCar.brand} ${relatedCar.name}`}
              />

              <div>

                <span>
                  {relatedCar.year} · {relatedCar.brand}
                </span>

                <h3>
                  {relatedCar.name}
                </h3>

                <Link
                  to={`/collection/${relatedCar.id}`}
                >
                  VIEW DETAILS →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}

export default CarDetails;