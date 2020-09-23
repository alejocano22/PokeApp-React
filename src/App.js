import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import store from './redux/store';
import Welcome from './components/Welcome';
import PokemonList from './components/PokemonList';
import PageNotFound from './components/PageNotFound';

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <HashRouter>
        <Route path='/' exact component={Welcome}></Route>
        <Route path='/pokemon' component={PokemonList}></Route>
        <Route path='*' exact={true} component={PageNotFound} />
      </HashRouter>
    </BrowserRouter>
  </Provider>
);

export default App;
