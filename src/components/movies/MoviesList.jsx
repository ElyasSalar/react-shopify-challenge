import React, { useContext, useEffect } from 'react';
import useFetch from '../../hooks/use-fetch';
import moviesContext, { ACTIONS } from '../../store/moviesContext';

import Movie from './Movie';
function MoviesList() {
  const { moviesState, dispatchMovies } = useContext(moviesContext);
  const { searchValue, movies } = moviesState;
  const { data, isLoading, error } = useFetch(
    `https://www.omdbapi.com/?s=${moviesState.searchValue}&apikey=18415e4d`,
    searchValue
  );
  function onNominate(id) {
    const mov = movies.find((movie) => {
      return movie.imdbID === id;
    });
    dispatchMovies({
      type: ACTIONS.NOMINATED,
      payload: mov,
    });
  }
  useEffect(() => {
    //check if we have the search results
    if (data.Search)
      dispatchMovies({
        type: ACTIONS.MOVIES,
        payload: data.Search.filter((mov) => {
          return mov.Type === 'movie';
        }),
      });
    //if we dont we set the movies back to empty
    else {
      dispatchMovies({
        type: ACTIONS.MOVIES,
        payload: [],
      });
    }
  }, [data.Search]);

  if (isLoading && searchValue !== '') return <h1>Loading</h1>;
  if (error && searchValue !== '') return <h1>{error}</h1>;
  if (movies.length < 1 && searchValue !== '') return <h1>No Results</h1>;

  return (
    <div>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        {movies.slice(0, 3).map((movie) => {
          return (
            <Movie onNominate={onNominate} key={movie.imdbID} movie={movie} />
          );
        })}
      </ul>
    </div>
  );
}

export default MoviesList;
