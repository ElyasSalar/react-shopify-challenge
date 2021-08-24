import React, { useReducer } from 'react';
import ListOfResults from './components/list-of-results/ListOfResults';
import NavigationBar from './components/navigation-bar/NavigationBar';
import './App.css';
import { reducer } from './utils/functions';
import { initalValue } from './utils/vars';

function App() {
  const [state, dispatch] = useReducer(reducer, initalValue);
  return (
    <div className="App">
      <NavigationBar keyword={state.keyword} dispatch={({ type, newKeyword }) => dispatch({ type: type, newKeyword: newKeyword })}  />
      <ListOfResults keyword={state.keyword} />
    </div>
  );
}

export default App;
