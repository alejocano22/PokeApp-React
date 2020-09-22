import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_ERROR } from '../actions/pokemonListActions';

const initialState = {
  count: 0,
  next: 'https://pokeapi.co/api/v2/pokemon/',
  previous: '',
  pokemonList: [],
  isFeching: false,
  error: null 
}

function pokemonListReducer (state = initialState, action){
  switch(action.type){
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        isFeching: true,
      }
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        isFeching: false,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        pokemonList: [...state.pokemonList, ...action.payload.pokemonList]
      }
    case FETCH_LIST_ERROR:
      return {
        ...state,
        isFeching: false,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export default pokemonListReducer;