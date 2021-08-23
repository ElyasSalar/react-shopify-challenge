import React, { useReducer } from 'react';
import Search from './components/search/search';
import './App.css';

const initalValue = {
  keyword: ''
};
function reducer(state, action){
  switch(action.type){
    case 'keyword':
      return {...state, keyword: action.newKeyword}
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalValue);


  return (
    <div className="App">
      <Search keyword={state.keyword} dispatch={({type, newKeyword}) => dispatch({type: type, newKeyword: newKeyword})} />
    </div>
  );
}

export default App;
