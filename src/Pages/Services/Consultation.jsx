import { Link } from "react-router-dom";

function Consultation() {
  return (
    <article className="service-detail">

      <div className="service-detail-number">
        03
      </div>

      <div className="service-detail-content">

        <p className="section-label">
          ACQUISITION · COLLECTION · ADVISORY
        </p>

        <h1>
          Consultation
          <span>for collectors.</span>
        </h1>

        <p className="service-lead">
          Building a meaningful collection requires
          more than finding beautiful automobiles.
          We provide considered guidance around
          acquisition, preservation and long-term value.
        </p>

        <div className="service-points">

          <div>
            <span>01</span>
            <strong>Acquisition Advisory</strong>
            <p>
              Guidance when evaluating historically
              significant vintage automobiles.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Collection Strategy</strong>
            <p>
              Develop a collection with a clear
              automotive theme and purpose.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Preservation Planning</strong>
            <p>
              Practical guidance for maintaining
              important automobiles for the future.
            </p>
          </div>

        </div>

        <Link
          to="/contact"
          className="primary-button"
        >
          Speak With Our Team →
        </Link>

      </div>

    </article>
  );
}

export default Consultation;