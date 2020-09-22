import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './redux/store';
import Welcome from './components/Welcome'
import Header from './components/Header'
import Pokemons from './components/PokemonList'
import PokemonCard from './components/PokemonCard'
import PokemonsComparison from './components/PokemonsComparison'
import PageNotFound from './components/PageNotFound'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Welcome}></Route>
        <Route path='/pokemons' component={Pokemons}></Route>
        <Route path='*' exact={true} component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
