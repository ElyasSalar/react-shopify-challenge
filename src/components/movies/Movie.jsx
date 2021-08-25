import React from 'react';
function Movie({ movie, onNominate }) {
  return (
    <div>
      <h3> {movie.Title} </h3>
      <h5> {movie.Year} </h5>
      <img src={movie.Poster} alt="" />
      <button onClick={() => onNominate(movie.imdbID)}>Nominate</button>
    </div>
  );
}

export default Movie;
