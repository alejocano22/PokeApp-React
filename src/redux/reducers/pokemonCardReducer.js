import { FETCH_CURRENT_POKEMON_REQUEST, FETCH_CURRENT_POKEMON_SUCCESS, FETCH_CURRENT_POKEMON_ERROR, 
  FETCH_CURRENT_SPECIES_REQUEST, FETCH_CURRENT_SPECIES_SUCCESS, FETCH_CURRENT_SPECIES_ERROR,
  IS_COMPARING, SHOW_CURRENT_POKEMON_MODAL } from '../actions/pokemonCardActions';

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
        ...payload
      }
    case FETCH_CURRENT_POKEMON_ERROR:
      return {
        ...state,
        isFechingPokemon: false,
        ...payload
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
        ...payload        
      }
    case FETCH_CURRENT_SPECIES_ERROR:
      return {
        ...state,
        isFechingSpecies: false,
        ...payload
      }
    case IS_COMPARING:
      console.log(payload)
      return {
        ...state,
        ...payload
      }
    case SHOW_CURRENT_POKEMON_MODAL:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

export default pokemonReducer;