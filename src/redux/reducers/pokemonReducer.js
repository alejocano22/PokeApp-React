import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from '../actions/pokemonActions';

const initialState = {
  pokemon: [],
  isFeching: false,
  error: null 
}

function pokemon (state = initialState, action){
  switch(action.type){
    case FETCH_POST_REQUEST:
      return {
        ...state,
        isFeching: true,
      }
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isFeching: false,
        pokemon: [ ...state.pokemon, action.payload.pokemon]
      }
    case FETCH_POST_ERROR:
      return {
        ...state,
        isFeching: false,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export default pokemon;