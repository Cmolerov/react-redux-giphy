import React from 'react';

// TODO: Take in an destructure the `urls` prop
const GifsList = ({gifUrls}) => (
  // TODO: Render a `<div>` as the parent element of your `GifsList` component.
    <div>
      {gifUrls.map(gif=> <img src={gif} alt="gifs" key={gif}></img>)}
    </div>

);

export default GifsList;
