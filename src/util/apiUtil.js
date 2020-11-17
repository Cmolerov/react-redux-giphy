import { apiKey } from '../config';

// APIUtil.fetchGifs(searchQuery);

// TODO: Define and export a `fetchGifs` function to fetch from the Giphy API
export const fetchGifs = searchTerm => (
  // TODO: Write a fetch call to the Giphy API's search endpoint
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=3`)
)
