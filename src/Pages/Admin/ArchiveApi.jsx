import useCarArchive from "../../Hooks/useCarArchive";

function ArchiveApi() {
  const {
    archive,
    loading,
    error,
    reload,
  } = useCarArchive();

  return (
    <main className="api-archive-page">

      <section className="api-archive-hero">
        <span className="eyebrow">
          VINTAGE MOTORS / DIGITAL ARCHIVE
        </span>

        <h1>
          Archive
          <span> Network.</span>
        </h1>

        <p>
          Connected archive records retrieved through
          our external data service.
        </p>

        <button
          className="api-refresh-btn"
          onClick={reload}
          disabled={loading}
        >
          {loading ? "Synchronising..." : "Refresh Archive"}
        </button>
      </section>

      <section className="api-archive-content">

        {loading && (
          <div className="api-status">
            <div className="api-loader"></div>
            <p>Connecting to archive...</p>
          </div>
        )}

        {error && (
          <div className="api-error">
            <strong>Archive connection failed</strong>
            <p>{error}</p>

            <button onClick={reload}>
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="api-records">

            <div className="api-record-header">
              <div>
                <span className="eyebrow">
                  EXTERNAL RECORDS
                </span>

                <h2>
                  Connected Entries
                </h2>
              </div>

              <span className="api-count">
                {archive.length
                  .toString()
                  .padStart(2, "0")}{" "}
                RECORDS
              </span>
            </div>

            <div className="api-record-grid">

              {archive.map((item, index) => (
                <article
                  className="api-record"
                  key={item.id}
                >
                  <span className="api-record-number">
                    {(index + 1)
                      .toString()
                      .padStart(2, "0")}
                  </span>

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    {item.username}
                  </p>

                  <div className="api-record-details">
                    <span>{item.email}</span>
                    <span>{item.phone}</span>
                  </div>

                </article>
              ))}

            </div>

          </div>
        )}

      </section>
    </main>
  );
}

export default ArchiveApi;