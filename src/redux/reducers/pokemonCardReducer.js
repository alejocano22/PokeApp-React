import { FETCH_CURRENT_POKEMON_REQUEST, FETCH_CURRENT_POKEMON_SUCCESS, FETCH_CURRENT_POKEMON_ERROR, 
  FETCH_CURRENT_SPECIES_REQUEST, FETCH_CURRENT_SPECIES_SUCCESS, FETCH_CURRENT_SPECIES_ERROR,
  IS_COMPARING, IS_NOT_COMPARING,
  OPEN_CURRENT_POKEMON_MODAL, CLOSE_CURRENT_POKEMON_MODAL } from '../actions/pokemonCardActions';

const initialState = {
  id: 0,
  name: '',
  height: 0,
  weight: 0,
  genderRate: 0,
  types: [],
  abilities: [], 
  stats: [],
  description: '',
  isActive: false,
  isComparing: false,
  isFechingPokemon: false,
  isFechingSpecies: false,
  error: null 
}

function pokemonReducer (state = initialState, { type, payload }){
  switch(type){
    case FETCH_CURRENT_POKEMON_REQUEST:
      return {
        ...state,
        isFechingPokemon: true,
      }
    case FETCH_CURRENT_POKEMON_SUCCESS:
      return {
        ...state,
        isFechingPokemon: false,
        id: payload.id,
        name: payload.name,
        height: payload.height,
        weight: payload.weight,
        types: payload.types,
        abilities: payload.abilities,
        stats: payload.stats
      }
    case FETCH_CURRENT_POKEMON_ERROR:
      return {
        ...state,
        isFechingPokemon: false,
        error: payload.error
      }
    case FETCH_CURRENT_SPECIES_REQUEST:
      return {
        ...state,
        isFechingSpecies: true,
      }
    case FETCH_CURRENT_SPECIES_SUCCESS:
      return {
        ...state,
        isFechingSpecies: false,
        description: payload.description,
        genderRate: payload.genderRate        
      }
    case FETCH_CURRENT_SPECIES_ERROR:
      return {
        ...state,
        isFechingSpecies: false,
        error: payload.error
      }
    case IS_COMPARING:
      return {
        ...state,
        isComparing: payload.isComparing
      }
    case IS_NOT_COMPARING:
      return {
        ...state,
        isComparing: payload.isComparing
      }
    case OPEN_CURRENT_POKEMON_MODAL:
      return {
        ...state,
        isActive: payload.isActive
      }
    case CLOSE_CURRENT_POKEMON_MODAL:
      return {
        ...state,
        isActive: payload.isActive
      }
    default:
      return state;
  }
}

export default pokemonReducer;