import React, { useContext } from 'react';
import moviesContext, { ACTIONS } from '../../store/moviesContext';
import NominatedMovie from './NominatedMovie';

function NominatesList() {
  const { moviesState, dispatchMovies } = useContext(moviesContext);
  const { nominates } = moviesState;
  function onRemove(id) {
    const removeMovie = nominates.filter((movie) => {
      return movie.imdbID !== id;
    });
    dispatchMovies({
      type: ACTIONS.REMOVE_NOMINATE,
      payload: removeMovie,
    });
  }
  return (
    //Render nominates only if there are nominated movies
    nominates.length > 0 && (
      <div>
        <h1>NOMINATES</h1>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          {nominates.map((movie) => {
            return (
              <NominatedMovie
                onRemove={onRemove}
                key={movie.imdbID}
                movie={movie}
              />
            );
          })}
        </ul>
      </div>
    )
  );
}

export default NominatesList;
