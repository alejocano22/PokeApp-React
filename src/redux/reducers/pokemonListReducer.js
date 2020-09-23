import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_ERROR } from '../actions/pokemonListActions';

const initialState = {
  count: 0,
  next: 'https://pokeapi.co/api/v2/pokemon/',
  previous: '',
  pokemonList: [],
  isFeching: false,
  error: null 
}

function pokemonListReducer (state = initialState, { type, payload }){
  switch(type){
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        isFeching: true,
      }
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        isFeching: false,
        ...payload,
        pokemonList: [...state.pokemonList, ...payload.pokemonList]
      }
    case FETCH_LIST_ERROR:
      return {
        ...state,
        isFeching: false,
        ...payload
      }
    default:
      return state;
  }
}

export default pokemonListReducer;