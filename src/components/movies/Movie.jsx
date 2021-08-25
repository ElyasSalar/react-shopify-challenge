import React from 'react';
function Movie({ movie }) {
  return (
    <div>
      <h3> {movie.Title} </h3>
      <h5> {movie.Year} </h5>
      <img src={movie.Poster} alt="" />
    </div>
  );
}

export default Movie;
