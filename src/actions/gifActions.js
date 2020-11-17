import { apiKey } from '../config';
export const RECEIVE_GIFS = 'RECEIVE_GIFS';
import * as APIUtil from '../util/apiUtil';


// TODO: Import all of your importing your API util function

// TODO: Set and export a constant for your `RECEIVE_GIFS` action type

// TODO: Write a function that returns your `action` object literal

// TODO: Write a thunk action creator

const receiveGifs = gifs => {
  return {
    type: RECEIVE_GIFS,
    gifs
  }
};

export const fetchGifs = searchTerm => dispatch => (
  APIUtil.fetchGifs(searchTerm)
    .then(res => res.json())
    .then(res => dispatch(receiveGifs(res.data)))
);


