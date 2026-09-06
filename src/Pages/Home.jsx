import { Link } from "react-router-dom";
import cars from "../data/cars";
import CarCard from "../Components/CarCard";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1586873170054-fbaef30326da?auto=format&fit=crop&w=1800&q=85";

function Home() {
  const vintageCars = cars.filter(
    (car) => Number(car.year) >= 1950 && Number(car.year) <= 1979
  );

  const heroCar = vintageCars[0];

  const featuredCars = vintageCars.slice(0, 3);

  return (
    <main className="home-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section
        className="home-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(7,7,7,0.96) 0%,
              rgba(7,7,7,0.78) 42%,
              rgba(7,7,7,0.25) 100%
            ),
            url("${heroCar?.image || FALLBACK_IMAGE}")
          `,
        }}
      >

        <div className="home-hero-content">

          <span className="eyebrow">
            VINTAGE MOTORS · 1950—1979
          </span>

          <h1>
            Machines
            <br />
            <em>with a memory.</em>
          </h1>

          <p>
            A private collection of remarkable automobiles from the
            golden age of motoring. Preserved for those who understand
            that a great car is more than transportation.
          </p>

          <div className="hero-actions">

            <Link to="/collection" className="primary-button">
              EXPLORE THE COLLECTION
            </Link>

            <Link to="/about" className="outline-button">
              OUR STORY
            </Link>

          </div>

        </div>

        <div className="hero-year">
          <span>ARCHIVE</span>
          <strong>1950</strong>
          <i>—</i>
          <strong>1979</strong>
        </div>

        <div className="hero-scroll">
          SCROLL TO EXPLORE
          <span></span>
        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="home-introduction">

        <div className="intro-index">
          01
        </div>

        <div className="intro-content">

          <span className="eyebrow">
            THE COLLECTION
          </span>

          <h2>
            An archive built around
            <em> character.</em>
          </h2>

          <p>
            Vintage Motors brings together significant automobiles
            from the 1950s, 1960s and 1970s. Every vehicle represents
            an era when craftsmanship, mechanical character and
            design mattered as much as performance.
          </p>

          <p>
            Our collection is limited to automobiles from
            <strong> 1950 through 1979</strong>.
          </p>

          <Link to="/collection" className="text-link">
            VIEW COMPLETE ARCHIVE →
          </Link>

        </div>

      </section>


      {/* =========================================
          FEATURED
      ========================================= */}

      <section className="home-featured">

        <div className="section-top">

          <div>
            <span className="eyebrow">
              SELECTED AUTOMOBILES
            </span>

            <h2>
              From the
              <em> Archive.</em>
            </h2>
          </div>

          <Link to="/collection" className="text-link">
            VIEW ALL →
          </Link>

        </div>

        <div className="home-car-grid">

          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}

        </div>

      </section>


      {/* =========================================
          PHILOSOPHY
      ========================================= */}

      <section className="home-philosophy">

        <div className="philosophy-number">
          02
        </div>

        <div className="philosophy-content">

          <span className="eyebrow">
            OUR PHILOSOPHY
          </span>

          <h2>
            We don't collect
            <br />
            <em>cars.</em>
            <br />
            We preserve stories.
          </h2>

          <p>
            From the elegant lines of the 1950s to the raw character
            of 1970s performance machines, every automobile carries
            a piece of automotive history.
          </p>

        </div>

      </section>


      {/* =========================================
          ERA STRIP
      ========================================= */}

      <section className="era-strip">

        <div>
          <span>THE 1950s</span>
          <strong>Elegance</strong>
        </div>

        <div>
          <span>THE 1960s</span>
          <strong>Expression</strong>
        </div>

        <div>
          <span>THE 1970s</span>
          <strong>Performance</strong>
        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="home-cta">

        <span className="eyebrow">
          YOUR NEXT AUTOMOTIVE STORY
        </span>

        <h2>
          Find something
          <br />
          <em>worth remembering.</em>
        </h2>

        <p>
          Explore our carefully curated collection of automobiles
          from 1950 through 1979.
        </p>

        <Link to="/collection" className="primary-button">
          ENTER THE ARCHIVE →
        </Link>

      </section>

    </main>
  );
}

export default Home;