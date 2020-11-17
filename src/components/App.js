import React from 'react';
// import { fetchGifs } from '../util/apiUtil';
import GifsList from './GifsList';
import SearchBar from './SearchBar';

const App = (props) => {
  console.log(props)
  return (
    <>
      <SearchBar fetchGifs={props.fetchGifs}/>
      <GifsList />
    </>
  );
};

export default App;
