import React, { useContext } from 'react';
import moviesContext from '../../store/moviesContext';
import NominatedMovie from './NominatedMovie';

function NominatesList() {
  const { moviesState } = useContext(moviesContext);
  const { nominates } = moviesState;

  return (
    <div>
      <h1>NOMINATES</h1>
      <ul>
        {nominates.map((movie) => {
          return <NominatedMovie key={movie.imdbID} movie={movie} />;
        })}
      </ul>
    </div>
  );
}

export default NominatesList;
