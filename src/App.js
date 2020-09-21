import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header'
import Pokemons from './components/PokemonList'
import PokemonCard from './components/PokemonCard'
import PokemonsComparison from './components/PokemonsComparison'

const App = () => (
  <Provider store={store}>
    <PokemonCard/>
    <PokemonsComparison/>
    <Header/>
    <Pokemons/>
  </Provider>
);

export default App;
