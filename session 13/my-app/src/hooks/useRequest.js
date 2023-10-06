import { useState, useEffect } from "react";

function useRequest(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || "network response not ok");
        } else {
          const data = await response.json();
          setResult(data);
        }
      } catch (err) {
        setError(err.message || "An error ");
      } finally {
        setIsLoading(false);
      }
    };

    fetchingData();
  }, [url]);

  return { isLoading, error, result };
}

export default useRequest;
