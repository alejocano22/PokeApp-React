import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Switch } from 'react-router-dom';
import store from './redux/store';
import Welcome from './components/Welcome';
import PokemonList from './components/PokemonList';
import PageNotFound from './components/PageNotFound';

const App = () => (
  <Provider store={store}>
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route path='/pokemon' component={PokemonList}/>
        <Route component={PageNotFound} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default App;
