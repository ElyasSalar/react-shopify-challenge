export function reducer(state, action){
  switch(action.type){
    case 'keyword':
      return {...state, keyword: action.newKeyword}
    default:
      return state;
  }
}