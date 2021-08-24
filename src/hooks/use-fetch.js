import { useState, useEffect } from 'react';
import axios from 'axios';
const useFetch = (url, param) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, [url]);
  function fetchData() {
    axios
      .get(url, {
        params: param,
      })
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  return { isLoading, error, data };
};
export default useFetch;
