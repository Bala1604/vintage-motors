import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CarCard from "../Components/CarCard";

function Cars() {

  const cars = useSelector((state) => state.cars.carList);

  const inputRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = (value) => {
    setSearch(value);

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  const filteredCars = cars.filter((car) =>
    `${car.name} ${car.brand} ${car.year}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page">

      <section className="collection-header">

        <div className="section-label">
          THE COLLECTION
        </div>

        <h1 className="section-title">
          Timeless <span>Machines.</span>
        </h1>

        <p className="description">
          A curated selection of legendary automobiles
          from remarkable eras of automotive history.
        </p>

        <input
          ref={inputRef}
          className="search-box"
          type="text"
          placeholder="Search by car, brand or year..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />

      </section>

      <div className="container">

        <p className="description">
          Showing {filteredCars.length} of {cars.length} vehicles
        </p>

      </div>

      <div className="car-grid">

        {filteredCars.length > 0 ? (

          filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))

        ) : (

          <p className="description">
            No automobiles found.
          </p>

        )}

      </div>

    </div>
  );
}

export default Cars;