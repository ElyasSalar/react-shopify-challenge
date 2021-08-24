import React from 'react';

function Search({keyword, dispatch}){
  return (
    <div>
      <h1>Search</h1>
      <input type="search" value={keyword} onChange={(event) => dispatch({type: 'keyword', newKeyword: event.target.value})} />
    </div>
  )
}

export default Search;