import useFetch from "../Hooks/UseFetch";

function Visitors() {

  const {
    data,
    loading,
    error
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <div className="not-found">
        <h2>Loading collectors...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="not-found">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="page">

      <section className="page-header">

        <p>COLLECTOR NETWORK</p>

        <h1>
          Our
          <span> Collectors.</span>
        </h1>

        <p>
          API-powered collector information.
        </p>

      </section>

      <div className="service-grid">

        {data.map((user) => (

          <div
            className="service-card"
            key={user.id}
          >

            <h3>
              {user.name}
            </h3>

            <p>
              {user.email}
            </p>

            <p>
              {user.phone}
            </p>

            <p>
              {user.website}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Visitors;