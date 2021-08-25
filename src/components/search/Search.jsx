import React, { useContext, useState } from 'react';
import moviesContext, { ACTIONS } from '../../store/moviesContext';
function Search() {
  const { dispatchMovies, moviesState } = useContext(moviesContext);
  const [searchValue, setSearchValue] = useState('');
  function handleSearch(e) {
    setSearchValue(e.target.value);
    dispatchMovies({
      type: ACTIONS.SEARCH,
      payload: e.target.value,
    });
  }
  const moviesOptions = moviesState.movies.filter((movie) => {
    return movie.Title.toLowerCase().includes(searchValue.toLowerCase().trim());
  });

  return (
    <div>
      <h1>Search</h1>
      <input
        list="search"
        value={searchValue}
        onChange={handleSearch}
        type="text"
        name=""
        id=""
      />
      <datalist id="search">
        {moviesOptions.slice(0, 3).map((movie) => {
          return (
            <option key={movie.imdbID} value={movie.Title}>
              {' '}
              {movie.Title}{' '}
            </option>
          );
        })}
      </datalist>
    </div>
  );
}

export default Search;
