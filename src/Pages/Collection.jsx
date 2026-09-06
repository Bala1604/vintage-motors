import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import cars from "../Data/cars";
import CarCard from "../Components/CarCard";

function Collection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...new Set(cars.map((car) => car.category)),
  ];

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesCategory =
        activeCategory === "All" ||
        car.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        car.name.toLowerCase().includes(searchText) ||
        car.brand.toLowerCase().includes(searchText) ||
        String(car.year).includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  // Groups cars as:
  // 1–3
  // 4–6
  // 7–9
  // 10–12
  const rows = [];

  for (let i = 0; i < filteredCars.length; i += 3) {
    rows.push(filteredCars.slice(i, i + 3));
  }

  return (
    <main className="collection-page">

      {/* HERO */}
      <section className="collection-hero">
        <div className="collection-hero-inner">
          <p className="eyebrow">THE PRIVATE ARCHIVE</p>

          <h1>
            Machines
            <br />
            <em>with a memory.</em>
          </h1>

          <p className="collection-intro">
            Twelve remarkable automobiles selected from the golden
            eras of automotive design.
          </p>

          <div className="collection-rule" />
        </div>
      </section>

      {/* FILTER */}
      <section className="collection-controls">
        <div className="collection-controls-inner">

          <div className="collection-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="collection-search">
            <input
              type="text"
              placeholder="Search marque, model or year..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>
      </section>

      {/* COLLECTION */}
      <section className="collection-archive">

        {rows.length > 0 ? (
          rows.map((row, rowIndex) => {

            const firstNumber = rowIndex * 3 + 1;
            const lastNumber = firstNumber + row.length - 1;

            return (
              <div className="archive-row" key={rowIndex}>

                <div className="archive-row-heading">
                  <span>
                    ARCHIVE {String(rowIndex + 1).padStart(2, "0")}
                  </span>

                  <span>
                    {firstNumber} — {lastNumber}
                  </span>
                </div>

                <div className="collection-grid">
                  {row.map((car, index) => (
                    <div
                      className="collection-card-wrapper"
                      key={car.id}
                    >
                      <span className="collection-index">
                        {String(firstNumber + index).padStart(2, "0")}
                      </span>

                      <CarCard car={car} />
                    </div>
                  ))}
                </div>

              </div>
            );
          })
        ) : (
          <div className="empty-collection">
            <p>NO AUTOMOBILE FOUND</p>
            <h2>The archive is silent.</h2>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              Reset Archive →
            </button>
          </div>
        )}

      </section>

      {/* ARCHIVE FOOTER */}
      <section className="collection-closing">
        <div>
          <p className="eyebrow">VINTAGE MOTORS</p>

          <h2>
            Twelve cars.
            <br />
            <em>One era of character.</em>
          </h2>
        </div>

        <Link to="/contact" className="archive-cta">
          Arrange a private viewing →
        </Link>
      </section>

    </main>
  );
}

export default Collection;