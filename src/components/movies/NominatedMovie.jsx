import React from 'react';

function NominatedMovie({ movie, onRemove }) {
  return (
    <div>
      <h3>{movie.Title}</h3>
      <h5>{movie.Year}</h5>
      {/* <img src={movie.Poster} alt="" /> */}
      <button onClick={() => onRemove(movie.imdbID)}>Remove</button>
    </div>
  );
}

export default NominatedMovie;
