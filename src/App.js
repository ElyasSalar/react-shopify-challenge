import React, { useReducer } from 'react';
import Search from './components/search/Search';
import ListOfResults from './components/list-of-results/ListOfResults';
import './App.css';
import { reducer } from './utils/functions';
import { initalValue } from './utils/vars';

function App() {
  const [state, dispatch] = useReducer(reducer, initalValue);
  return (
    <div className="App">
      <Search keyword={state.keyword} dispatch={({ type, newKeyword }) => dispatch({ type: type, newKeyword: newKeyword })} />
      <ListOfResults keyword={state.keyword} />
    </div>
  );
}

export default App;
