import { useCallback, useEffect, useState } from "react";
import { fetchCarArchive } from "../Services/carApi";

function useCarArchive() {
  const [archive, setArchive] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadArchive = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchCarArchive();

      setArchive(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadArchive();
  }, [loadArchive]);

  return {
    archive,
    loading,
    error,
    reload: loadArchive,
  };
}

export default useCarArchive;