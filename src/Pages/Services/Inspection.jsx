import { Link } from "react-router-dom";

function Inspection() {
  return (
    <article className="service-detail">

      <div className="service-detail-number">
        02
      </div>

      <div className="service-detail-content">

        <p className="section-label">
          CONDITION · ORIGINALITY · DOCUMENTATION
        </p>

        <h1>
          Inspection
          <span>without compromise.</span>
        </h1>

        <p className="service-lead">
          Before acquiring a classic automobile,
          understanding its condition and history
          is essential. Our inspection process examines
          the details that photographs cannot reveal.
        </p>

        <div className="service-points">

          <div>
            <span>01</span>
            <strong>Mechanical Assessment</strong>
            <p>
              Evaluation of engine, transmission,
              suspension, brakes and major systems.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Originality Review</strong>
            <p>
              Examination of components, finishes,
              trim and period-correct details.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Documentation</strong>
            <p>
              Review of available records, ownership
              history and supporting documentation.
            </p>
          </div>

        </div>

        <Link
          to="/contact"
          className="primary-button"
        >
          Request an Inspection →
        </Link>

      </div>

    </article>
  );
}

export default Inspection;