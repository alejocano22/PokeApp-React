import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header'
import Pokemons from './components/Pokemons'
import PokemonCard from './components/Pokemons/PokemonCard'

import { fetchPokemon } from './redux/actions/pokemonActions'


// // TODO
// // Load the first 20 pokemons
// for(let i = 1; i <= 20; i++){
//   store.dispatch(fetchPokemon(i))
// }

const App = () => (
  <Provider store={store}>
    <PokemonCard></PokemonCard>
    <Header/>
    <Pokemons/>
  </Provider>
);

export default App;
