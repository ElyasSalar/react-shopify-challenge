import './App.css';
import React from 'react';
import Search from './components/search/Search';
import MoviesList from './components/movies/MoviesList';

function App() {
  return (
    <div className="App">
      <Search />
      <MoviesList />
    </div>
  );
}

export default App;
