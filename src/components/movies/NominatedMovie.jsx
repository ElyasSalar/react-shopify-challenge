import React from 'react';

function NominatedMovie({ movie }) {
  return (
    <div>
      <h3>{movie.Title}</h3>
      <h5>{movie.Year}</h5>
    </div>
  );
}

export default NominatedMovie;
