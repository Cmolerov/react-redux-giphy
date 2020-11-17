import { combineReducers } from 'redux';
// TODO: Import the `gifsReducer`
import gifsReducer  from './gifsReducer';

export default combineReducers({
  gifs: gifsReducer,
});
