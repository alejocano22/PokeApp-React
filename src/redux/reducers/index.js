import { combineReducers } from 'redux';
// import pokemon from './pokemonReducer';
import pokemon2 from './pokemonReducer2';
import search from './headerReducer';
import currentPokemon from './currentPokemonReducer'

export default combineReducers({
  // pokemon,
  pokemon2,
  search,
  currentPokemon
});