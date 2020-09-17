import { SEARCH } from '../actions/headerAction'

const initialState = {
  search: ''
}

function authorReducer(state = initialState, action){
  switch(action.type){
    case SEARCH:
      return {
        ...state,
        search: action.payload.search
      };
    default:
      return state;
  }
}

export default authorReducer;