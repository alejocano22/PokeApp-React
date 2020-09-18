import { combineReducers } from 'redux';
import pokemonList from './pokemonListReducer';
import search from './headerReducer';
import currentPokemon from './pokemonCardReducer';
import comparisonPokemon from './pokemonComparisonReducer';

export default combineReducers({
  pokemonList,
  search,
  currentPokemon,
  comparisonPokemon
});