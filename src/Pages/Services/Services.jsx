import { Link, Outlet, useLocation } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Restoration",
    subtitle: "MECHANICAL & COSMETIC",
    description:
      "Careful restoration that respects original character, materials and engineering.",
    path: "restoration",
  },
  {
    number: "02",
    title: "Inspection",
    subtitle: "ARCHIVE ASSESSMENT",
    description:
      "A considered examination of condition, originality, documentation and collector value.",
    path: "inspection",
  },
  {
    number: "03",
    title: "Consultation",
    subtitle: "COLLECTOR ADVISORY",
    description:
      "Independent guidance for discovering, acquiring and preserving significant automobiles.",
    path: "consultation",
  },
];

function Services() {
  const location = useLocation();

  const isMainServices = location.pathname === "/services";

  return (
    <main className="editorial-page services-page">

      {/* HERO */}
      <section className="editorial-hero services-editorial-hero">

        <div className="editorial-container">

          <p className="eyebrow">VINTAGE MOTORS · THE WORKSHOP</p>

          <h1>
            Care for
            <br />
            <em>the classics.</em>
          </h1>

          <div className="editorial-hero-bottom">

            <p>
              Preservation, inspection and collector expertise
              for automobiles that deserve another generation.
            </p>

            <span>03 SERVICES</span>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="services-directory">

        <div className="editorial-container">

          <div className="section-heading-row">

            <div>
              <p className="eyebrow">OUR SERVICES</p>

              <h2>
                The work behind
                <br />
                <em>the archive.</em>
              </h2>
            </div>

            <p>
              Every service begins with the same principle:
              understand the automobile before attempting to change it.
            </p>

          </div>


          <div className="premium-services-list">

            {services.map((service) => (

              <Link
                key={service.path}
                to={`/services/${service.path}`}
                className={
                  location.pathname.includes(service.path)
                    ? "premium-service active"
                    : "premium-service"
                }
              >

                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-main">

                  <span>{service.subtitle}</span>

                  <h3>{service.title}</h3>

                </div>

                <p>{service.description}</p>

                <span className="service-arrow">↗</span>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* NESTED CONTENT */}
      {!isMainServices && (
        <section className="nested-service-content">
          <div className="editorial-container">
            <Outlet />
          </div>
        </section>
      )}


      {/* PHILOSOPHY */}
      {isMainServices && (

        <section className="editorial-statement service-statement">

          <div className="editorial-container statement-grid">

            <span className="statement-number">03</span>

            <div>

              <p className="eyebrow">OUR APPROACH</p>

              <h2>
                Preserve the
                <br />
                <em>character.</em>
              </h2>

              <p>
                Historic automobiles should not simply be repaired.
                Their history, craftsmanship and personality should
                be understood before any work begins.
              </p>

            </div>

          </div>

        </section>

      )}


      {/* CTA */}
      <section className="editorial-cta">

        <div className="editorial-container">

          <p className="eyebrow">PRIVATE CONCIERGE</p>

          <h2>
            Your automobile.
            <br />
            <em>Our attention.</em>
          </h2>

          <Link to="/contact" className="editorial-button">
            Speak With The Concierge →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Services;