import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store';
import { fetchGifs } from './util/apiUtil';
import * as APIUtil from './util/apiUtil';


window.fetchGifs = fetchGifs;
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

