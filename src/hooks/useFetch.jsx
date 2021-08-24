import { useEffect, useState } from "react";


const useFetch = (keyword) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    if(keyword.length > 0) fetchData();
    if(keyword.length === 0) setData([]);
  }, [keyword]);
  async function fetchData() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=18415e4d`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const moviesData = await response.json();
      if (moviesData.Response === 'False') {
        throw new Error(moviesData.Error);
      }
      setData(moviesData.Search);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }
  return [ data, isLoading, error ];
};


export default useFetch;
