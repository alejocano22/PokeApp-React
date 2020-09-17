import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header'
import Pokemons from './components/Pokemons'

const App = () => (
  <Provider store={store}>
    <Header/>
    <Pokemons/>
  </Provider>
);

export default App;
