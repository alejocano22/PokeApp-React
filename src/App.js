import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Pokemons from './components/Pokemon'

const App = () => (
  <Provider store={store}>
    <Pokemons/>
  </Provider>
);

export default App;
