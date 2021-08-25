import React, { useContext, useEffect } from 'react';
import useFetch from '../../hooks/use-fetch';
import moviesContext, { ACTIONS } from '../../store/moviesContext';
function MoviesList() {
  const { moviesState, dispatchMovies } = useContext(moviesContext);
  const { searchValue } = moviesState;
  const { data, isLoading, error } = useFetch(
    `https://www.omdbapi.com/?s=${moviesState.searchValue}&apikey=18415e4d`,
    searchValue
  );
  useEffect(() => {
    if (data.Search)
      dispatchMovies({
        type: ACTIONS.MOVIES,
        payload: data.Search.filter((mov) => {
          return mov.Type === 'movie';
        }),
      });
    else {
      dispatchMovies({
        type: ACTIONS.MOVIES,
        payload: [],
      });
    }
  }, [data.Search]);

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  return <div></div>;
}

export default MoviesList;
