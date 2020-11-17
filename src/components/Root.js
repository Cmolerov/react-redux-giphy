import React from 'react';
import { Provider } from 'react-redux';
// import App from './App';
import AppContainer from './AppContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default Root;