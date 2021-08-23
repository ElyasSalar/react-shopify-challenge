import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, [url]);
  async function fetchData() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const moviesData = await response.json();
      setData(moviesData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
  return { data, isLoading, error };
};
export default useFetch;
