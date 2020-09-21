import { FETCH_COMPARISON_POKEMON_REQUEST, FETCH_COMPARISON_POKEMON_SUCCESS, FETCH_COMPARISON_POKEMON_ERROR, 
  FETCH_COMPARISON_SPECIES_REQUEST, FETCH_COMPARISON_SPECIES_SUCCESS, FETCH_COMPARISON_SPECIES_ERROR,
  OPEN_COMPARISON_POKEMON_MODAL, CLOSE_COMPARISON_POKEMON_MODAL } from '../actions/pokemonComparisonActions';

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
        id: payload.id,
        name: payload.name,
        height: payload.height,
        weight: payload.weight,
        types: payload.types,
        abilities: payload.abilities,
        stats: payload.stats
      }
    case FETCH_COMPARISON_POKEMON_ERROR:
      return {
        ...state,
        isFechingPokemon: false,
        error: payload.error
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
        description: payload.description,
        genderRate: payload.genderRate        
      }
    case FETCH_COMPARISON_SPECIES_ERROR:
      return {
        ...state,
        isFechingSpecies: false,
        error: payload.error
      }
    case OPEN_COMPARISON_POKEMON_MODAL:
      return {
        ...state,
        isActive: payload.comparison
      }
    case CLOSE_COMPARISON_POKEMON_MODAL:
      return {
        ...state,
        isActive: payload.comparison
      }
    default:
      return state;
  }
}

export default pokemonComparisonReducer;