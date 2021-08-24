import React, { useContext, useState } from 'react';
import moviesContext, { ACTIONS } from '../../store/moviesContext';
function Search() {
  const { dispatchMovies } = useContext(moviesContext);
  const [searchValue, setSearchValue] = useState('');
  function handleSearch(e) {
    setSearchValue(e.target.value);
    dispatchMovies({
      type: ACTIONS.SEARCH,
      payload: e.target.value,
    });
  }

  return (
    <div>
      <h1>Search</h1>
      <input
        value={searchValue}
        onChange={handleSearch}
        type="text"
        name=""
        id=""
      />
    </div>
  );
}

export default Search;
