import React, { useReducer } from 'react';
import ListOfResults from './components/list-of-results/ListOfResults';
import NavigationBar from './components/navigation-bar/NavigationBar';
import { reducer } from './utils/functions';
import { initalValue } from './utils/vars';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initalValue);
  return (
    <div className="App">
      <NavigationBar
      keyword={state.keyword}
      typeOfCinema={state.typeOfCinema}
      dispatch={({ type, newValue }) => dispatch({ type: type, newValue: newValue })}
      />
      <ListOfResults keyword={state.keyword} />
    </div>
  );
}

export default App;
