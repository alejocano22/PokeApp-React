import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_ERROR, OPEN_MODAL, CLOSE_MODAL } from '../actions/currentPokemonActions';

const initialState = {
  name: '',
  height: 0,
  weight: 0,
  id: 0,
  isActive: false,
  isFeching: false,
  error: null 
}

function pokemonReducer (state = initialState, action){
  switch(action.type){
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        isFeching: true,
      }
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        isFeching: false,
        name: action.payload.name,
        height: action.payload.height,
        weight: action.payload.weight,
        id: action.payload.id
      }
    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        isFeching: false,
        error: action.payload.error
      }
    case OPEN_MODAL:
      return {
        ...state,
        isActive: action.payload.isActive
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isActive: action.payload.isActive
      }
    default:
      return state;
  }
}

export default pokemonReducer;