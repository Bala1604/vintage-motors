import useFetch from "../Hooks/UseFetch";

function ApiCars() {
  const {
    data,
    loading,
    error,
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <div className="api-status">
        <div className="loading-spinner"></div>
        <p>Loading our digital archive...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-status api-error">
        <h3>Archive Unavailable</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="api-section">
      <div className="api-heading">
        <div>
          <p className="collection-label">
            DIGITAL ARCHIVE
          </p>

          <h2>
            Our <span>Collectors</span>
          </h2>
        </div>

        <p>
          A live connection to the Vintage Motors
          digital archive.
        </p>
      </div>

      <div className="api-grid">
        {data.slice(0, 6).map((customer) => (
          <article
            className="api-card"
            key={customer.id}
          >
            <span>
              {String(customer.id).padStart(2, "0")}
            </span>

            <h3>{customer.name}</h3>

            <p>{customer.email}</p>

            <small>
              Private Collector
            </small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ApiCars;