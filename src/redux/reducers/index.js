import { combineReducers } from 'redux';
import pokemonList from './pokemonListReducer';
import header from './headerReducer';
import currentPokemon from './pokemonCardReducer';
import comparisonPokemon from './pokemonComparisonReducer';

export default combineReducers({
  pokemonList,
  header,
  currentPokemon,
  comparisonPokemon
});