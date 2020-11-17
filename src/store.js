// TODO: Import `createStore` from `redux`
// TODO: Import middleware
// TODO: Import `rootReducer`
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;


// TODO: Define a `configureStore` function

// TODO: Export the `configureStore` function
