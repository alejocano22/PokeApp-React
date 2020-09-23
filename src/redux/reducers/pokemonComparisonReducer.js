import { FETCH_COMPARISON_POKEMON_REQUEST, FETCH_COMPARISON_POKEMON_SUCCESS, FETCH_COMPARISON_POKEMON_ERROR, 
  FETCH_COMPARISON_SPECIES_REQUEST, FETCH_COMPARISON_SPECIES_SUCCESS, FETCH_COMPARISON_SPECIES_ERROR,
  SHOW_COMPARISON_POKEMON_MODAL } from '../actions/pokemonComparisonActions';

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
  isFechingPokemon: false,
  isFechingSpecies: false,
  error: null 
}

function pokemonComparisonReducer (state = initialState, { type, payload }){
  switch(type){
    case FETCH_COMPARISON_POKEMON_REQUEST:
      return {
        ...state,
        isFechingPokemon: true,
      }
    case FETCH_COMPARISON_POKEMON_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case FETCH_COMPARISON_POKEMON_ERROR:
      return {
        ...state,
        isFechingPokemon: false,
        ...payload
      }
    case FETCH_COMPARISON_SPECIES_REQUEST:
      return {
        ...state,
        isFechingSpecies: true,
      }
    case FETCH_COMPARISON_SPECIES_SUCCESS:
      return {
        ...state,
        isFechingSpecies: false,
        ...payload       
      }
    case FETCH_COMPARISON_SPECIES_ERROR:
      return {
        ...state,
        isFechingSpecies: false,
        ...payload
      }
    case SHOW_COMPARISON_POKEMON_MODAL:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

export default pokemonComparisonReducer;