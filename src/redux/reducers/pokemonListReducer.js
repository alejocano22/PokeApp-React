import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_ERROR, 
  FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_ERROR,
  FETCH_SPECIES_REQUEST, FETCH_SPECIES_SUCCESS, FETCH_SPECIES_ERROR,
  UPDATE_POKEMON_INDEX } from '../actions/pokemonListActions';

const initialState = {
  count: 0,
  next: 'https://pokeapi.co/api/v2/pokemon/',
  previous: '',
  pokemonList: [],
  pokemonFetched: [],
  speciesFetched: [],
  currentPokemonIndex: 0,
  comparisonPokemonIndex: 0,
  isFechingList: false,
  isFechingPokemon: false,
  isFechingSpecies: false,
  error: null 
}

function pokemonListReducer (state = initialState, { type, payload }){
  switch (type) {
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        isFechingList: true,
      }
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        isFechingList: false,
        ...payload,
        pokemonList: [...state.pokemonList, ...payload.pokemonList]
      }
    case FETCH_LIST_ERROR:
      return {
        ...state,
        isFechingList: false,
        ...payload
      }
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        isFechingPokemon: true,
      }
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        isFechingPokemon: false,
        pokemonFetched: [...state.pokemonFetched, payload]
      }
    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        isFechingPokemon: false,
        ...payload
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
        speciesFetched: [...state.speciesFetched, payload]
      }
    case FETCH_SPECIES_ERROR:
      return {
        ...state,
        isFechingSpecies: false,
        ...payload
      }
    case UPDATE_POKEMON_INDEX:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

export default pokemonListReducer;