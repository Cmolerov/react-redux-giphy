// TODO: Import `createStore` from `redux`
// TODO: Import middleware
// TODO: Import `rootReducer`
import { createStore } from 'redux';
// TODO: Import middleware
import rootReducer from './reducers/rootReducer';

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;


// TODO: Define a `configureStore` function

// TODO: Export the `configureStore` function
