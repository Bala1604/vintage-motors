import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../Redux/favoritesSlice";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1586873170054-fbaef30326da?auto=format&fit=crop&w=1400&q=85";

function CarCard({ car }) {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.favorites
  );

  const isFavorite = favorites.some(
    (item) => item.id === car.id
  );

  const handleFavorite = () => {
    dispatch(toggleFavorite(car));
  };

  return (
    <article className="car-card">

      <div className="car-image-wrapper">

        <img
          src={car.image || FALLBACK_IMAGE}
          alt={`${car.year} ${car.brand} ${car.name}`}
        />

        <span className="car-category">
          {car.category}
        </span>

        <button
          className={`card-favorite ${
            isFavorite ? "active" : ""
          }`}
          onClick={handleFavorite}
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {isFavorite ? "♥" : "♡"}
        </button>

      </div>


      <div className="car-info">

        <p className="car-year">
          {car.year} · {car.brand}
        </p>

        <h3>
          {car.name}
        </h3>

        <p className="car-description">
          {car.description}
        </p>

        <div className="car-bottom">

          <span className="car-price">
            ${car.price.toLocaleString()}
          </span>

          <Link
            to={`/collection/${car.id}`}
          >
            View Details →
          </Link>

        </div>

      </div>

    </article>
  );
}

export default CarCard;