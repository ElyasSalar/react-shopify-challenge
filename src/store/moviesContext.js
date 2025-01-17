import React, { useReducer } from "react";

export const ACTIONS = {
  MOVIES: "MOVIES",
  SEARCH: "SEARCH",
  NOMINATES: "NOMINATES",
  NOMINATED_ID: "NOMINATED_ID",
  NOMINATE_REMOVE: "NOMINATE_REMOVE",
};
const initialState = {
  searchValue: "",
  movies: [],
  nominates: [],
  nominatedID: "",
};

const moviesContext = React.createContext(initialState);
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    case ACTIONS.MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ACTIONS.NOMINATED_ID:
      return {
        ...state,
        nominatedID: action.payload,
      };
    case ACTIONS.NOMINATES:
      return {
        ...state,
        nominates: [...state.nominates, action.payload],
      };
    case ACTIONS.NOMINATE_REMOVE:
      return {
        ...state,
        nominates: action.payload,
      };
    default:
      return state;
  }
}
export function MoviesProvider({ children }) {
  const [moviesState, dispatchMovies] = useReducer(reducer, initialState);
  return (
    <moviesContext.Provider
      value={{
        moviesState,
        dispatchMovies,
      }}
    >
      {children}
    </moviesContext.Provider>
  );
}
export default moviesContext;
