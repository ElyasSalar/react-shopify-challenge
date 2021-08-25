import React, { useContext } from 'react';
import moviesContext from '../../store/moviesContext';
function Movie({ movie, onNominate }) {
  const { moviesState } = useContext(moviesContext);
  const { nominates } = moviesState;
  const checkNominated = nominates.filter((mov) => {
    return mov.imdbID === movie.imdbID;
  });

  return (
    <div>
      <h3> {movie.Title} </h3>
      <h5> {movie.Year} </h5>
      <img src={movie.Poster} alt="" />
      {checkNominated.length < 1 ? (
        <button onClick={() => onNominate(movie.imdbID)}>Nominate</button>
      ) : (
        <button disabled>Nominated</button>
      )}
    </div>
  );
}

export default Movie;
