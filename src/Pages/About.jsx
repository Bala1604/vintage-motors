import { Link } from "react-router-dom";
import cars from "../Data/cars";

function About() {
  return (
    <main className="editorial-page about-page">

      {/* HERO */}
      <section className="editorial-hero about-editorial-hero">
        <div className="editorial-container">

          <p className="eyebrow">VINTAGE MOTORS · THE HOUSE</p>

          <h1>
            Preserving
            <br />
            <em>the automobile.</em>
          </h1>

          <div className="editorial-hero-bottom">
            <p>
              A private automotive archive dedicated to remarkable
              machines, considered design and the stories carried
              through generations.
            </p>

            <span>EST. 1955</span>
          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="editorial-intro">

        <div className="editorial-container editorial-two-column">

          <div className="editorial-side-label">
            <span>01</span>
            <p>OUR PHILOSOPHY</p>
          </div>

          <div className="editorial-copy">

            <h2>
              Some machines
              <br />
              <em>become history.</em>
            </h2>

            <p>
              The golden decades of motoring produced automobiles
              that were designed with patience, engineered with
              character and built to be remembered.
            </p>

            <p>
              Vintage Motors exists to preserve that feeling.
              We look beyond the automobile as transportation
              and consider the design, engineering and culture
              that made each machine significant.
            </p>

          </div>

        </div>

      </section>


      {/* ARCHIVE SNAPSHOT */}
      <section className="about-stat-section">

        <div className="editorial-container">

          <div className="section-heading-row">
            <div>
              <p className="eyebrow">THE ARCHIVE</p>
              <h2>
                A collection built
                <br />
                <em>around character.</em>
              </h2>
            </div>

            <p>
              Every automobile in our archive has been selected
              for the qualities that make classic motoring endure.
            </p>
          </div>

          <div className="about-stat-grid">

            <div>
              <strong>{cars.length}</strong>
              <span>AUTOMOBILES</span>
            </div>

            <div>
              <strong>12</strong>
              <span>MARQUES</span>
            </div>

            <div>
              <strong>1955</strong>
              <span>ARCHIVE BEGINS</span>
            </div>

            <div>
              <strong>88</strong>
              <span>LAST MODEL YEAR</span>
            </div>

          </div>

        </div>

      </section>


      {/* TIMELINE */}
      <section className="about-archive">

        <div className="editorial-container">

          <div className="archive-heading">
            <p className="eyebrow">THE ARCHIVE REGISTER</p>

            <h2>
              Twelve machines.
              <br />
              <em>Countless stories.</em>
            </h2>
          </div>

          <div className="archive-register">

            {cars.map((car, index) => (
              <Link
                key={car.id}
                to={`/collection/${car.id}`}
                className="archive-register-item"
              >

                <span className="archive-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="archive-year">
                  {car.year}
                </span>

                <div className="archive-name">
                  <strong>{car.brand}</strong>
                  <span>{car.name}</span>
                </div>

                <span className="archive-category">
                  {car.category}
                </span>

                <span className="archive-arrow">↗</span>

              </Link>
            ))}

          </div>

        </div>

      </section>


      {/* PRINCIPLES */}
      <section className="about-principles">

        <div className="editorial-container">

          <div className="section-heading-row">

            <div>
              <p className="eyebrow">THE VINTAGE MOTORS STANDARD</p>

              <h2>
                What makes a
                <br />
                <em>classic?</em>
              </h2>
            </div>

            <p>
              Age alone does not make an automobile memorable.
              Character does.
            </p>

          </div>


          <div className="principles-grid">

            <article>
              <span>01</span>
              <h3>Design</h3>
              <p>
                Proportion, materials and details that remain
                compelling long after their original introduction.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Engineering</h3>
              <p>
                Mechanical ideas and driving character that
                shaped an important chapter in motoring.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>History</h3>
              <p>
                Automobiles become meaningful when they carry
                the story of the people and era around them.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Preservation</h3>
              <p>
                Our responsibility is to document, appreciate
                and preserve these machines for the future.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* MANIFESTO */}
      <section className="editorial-statement">

        <div className="editorial-container statement-grid">

          <span className="statement-number">02</span>

          <div>

            <p className="eyebrow">THE MANIFESTO</p>

            <h2>
              Not simply
              <br />
              <em>old cars.</em>
            </h2>

            <p>
              A classic automobile is design frozen in time,
              engineering made tangible and a reminder of how
              dramatically the automobile changed the world.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="editorial-cta">

        <div className="editorial-container">

          <p className="eyebrow">THE PRIVATE ARCHIVE</p>

          <h2>
            Continue
            <br />
            <em>the journey.</em>
          </h2>

          <Link to="/collection" className="editorial-button">
            Enter The Collection →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;