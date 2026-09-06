import { Link } from "react-router-dom";

function Restoration() {
  return (
    <article className="service-detail">

      <div className="service-detail-number">
        01
      </div>

      <div className="service-detail-content">

        <p className="section-label">
          MECHANICAL · COSMETIC · PRESERVATION
        </p>

        <h1>
          Restoration
          <span>with restraint.</span>
        </h1>

        <p className="service-lead">
          Our restoration philosophy is simple:
          preserve what makes the automobile authentic.
          Every decision begins with understanding
          the car's original character.
        </p>

        <div className="service-points">

          <div>
            <span>01</span>
            <strong>Mechanical Work</strong>
            <p>
              Engine, transmission, suspension and
              braking systems carefully assessed and
              restored.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Body & Finish</strong>
            <p>
              Period-correct bodywork and finishes
              designed to respect the original form.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Interior</strong>
            <p>
              Materials, trim and craftsmanship restored
              with attention to period authenticity.
            </p>
          </div>

        </div>

        <Link
          to="/contact"
          className="primary-button"
        >
          Discuss a Restoration →
        </Link>

      </div>

    </article>
  );
}

export default Restoration;