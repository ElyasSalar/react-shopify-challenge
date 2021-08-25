export function reducer(state, action){
  switch(action.type){
    case 'keyword':
      return {...state, keyword: action.newValue}
    case 'typeOfCinema':
      return {...state, typeOfCinema: action.newValue}
    default:
      return state;
  }
}