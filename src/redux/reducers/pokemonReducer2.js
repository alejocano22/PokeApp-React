import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from '../actions/pokemonActions2';

const initialState = {
  count: 0,
  next: 'https://pokeapi.co/api/v2/pokemon/',
  previous: '',
  pokemons: [],
  isFeching: false,
  error: null 
}

function pokemonReducer (state = initialState, action){
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
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        pokemons: [...state.pokemons, ...action.payload.pokemons]
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

export default pokemonReducer;