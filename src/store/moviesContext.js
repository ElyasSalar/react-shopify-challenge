import React, { useReducer } from 'react';

export const ACTIONS = {
  MOVIES: 'MOVIES',
  NOMINATED: 'NOMINATED',
  REMOVE_NOMINATE: 'REMOVE',
};
const initialState = {
  movies: [],
  searchValue: '',
  searchType: '',
  nominates: [],
};
function reducer(state, action) {
  switch (action.type) {
    case 'search':
      return { ...state, searchValue: action.payload };

    case ACTIONS.MOVIES:
      return { ...state, movies: action.payload };
    case ACTIONS.NOMINATED:
      return { ...state, nominates: [...state.nominates, action.payload] };
    case ACTIONS.REMOVE_NOMINATE:
      return {
        ...state,
        nominates: [...action.payload],
      };
    default:
      return state;
  }
}
const moviesContext = React.createContext(initialState);
export function MoviesProvider({ children }) {
  const [moviesState, dispatchMovies] = useReducer(reducer, initialState);

  return (
    <moviesContext.Provider value={{ dispatchMovies, moviesState }}>
      {children}
    </moviesContext.Provider>
  );
}
export default moviesContext;
