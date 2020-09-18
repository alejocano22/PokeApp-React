import { FETCH_POKEMON2_REQUEST, FETCH_POKEMON2_SUCCESS, FETCH_POKEMON2_ERROR, 
  FETCH_SPECIES2_REQUEST, FETCH_SPECIES2_SUCCESS, FETCH_SPECIES2_ERROR,
  OPEN_MODAL2, CLOSE_MODAL2 } from '../actions/pokemonComparisonActions';

const initialState = {
  name: '',
  height: 0,
  weight: 0,
  id: 0,
  genderRate: 0,
  description: '',
  comparison: false,
  isFechingPokemon: false,
  isFechingSpecies: false,
  error: null 
}

function pokemonComparisonReducer (state = initialState, action){
  switch(action.type){
    case FETCH_POKEMON2_REQUEST:
      return {
        ...state,
        isFechingPokemon: true,
      }
    case FETCH_POKEMON2_SUCCESS:
      return {
        ...state,
        isFechingPokemon: false,
        name: action.payload.name,
        height: action.payload.height,
        weight: action.payload.weight,
        id: action.payload.id
      }
    case FETCH_POKEMON2_ERROR:
      return {
        ...state,
        isFechingPokemon: false,
        error: action.payload.error
      }
    case FETCH_SPECIES2_REQUEST:
      return {
        ...state,
        isFechingSpecies: true,
      }
    case FETCH_SPECIES2_SUCCESS:
      return {
        ...state,
        isFechingSpecies: false,
        description: action.payload.description,
        genderRate: action.payload.genderRate        
      }
    case FETCH_SPECIES2_ERROR:
      return {
        ...state,
        isFechingSpecies: false,
        error: action.payload.error
      }
    case OPEN_MODAL2:
      return {
        ...state,
        comparison: action.payload.comparison
      }
    case CLOSE_MODAL2:
      return {
        ...state,
        comparison: action.payload.comparison
      }
    default:
      return state;
  }
}

export default pokemonComparisonReducer;