import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_ERROR, 
  FETCH_SPECIES_REQUEST, FETCH_SPECIES_SUCCESS, FETCH_SPECIES_ERROR,
  IS_COMPARING, IS_NOT_COMPARING,
  OPEN_MODAL, CLOSE_MODAL } from '../actions/pokemonCardActions';

const initialState = {
  name: '',
  height: 0,
  weight: 0,
  id: 0,
  genderRate: 0,
  description: '',
  isActive: false,
  isComparing: false,
  isFechingPokemon: false,
  isFechingSpecies: false,
  error: null 
}

function pokemonReducer (state = initialState, action){
  switch(action.type){
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        isFechingPokemon: true,
      }
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        isFechingPokemon: false,
        name: action.payload.name,
        height: action.payload.height,
        weight: action.payload.weight,
        id: action.payload.id
      }
    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        isFechingPokemon: false,
        error: action.payload.error
      }
    case FETCH_SPECIES_REQUEST:
      return {
        ...state,
        isFechingSpecies: true,
      }
    case FETCH_SPECIES_SUCCESS:
      return {
        ...state,
        isFechingSpecies: false,
        description: action.payload.description,
        genderRate: action.payload.genderRate        
      }
    case FETCH_SPECIES_ERROR:
      return {
        ...state,
        isFechingSpecies: false,
        error: action.payload.error
      }
    case IS_COMPARING:
      return {
        ...state,
        isComparing: action.payload.isComparing
      }
    case IS_NOT_COMPARING:
      return {
        ...state,
        isComparing: action.payload.isComparing
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