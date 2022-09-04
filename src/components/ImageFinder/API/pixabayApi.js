import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const apiKey = '22343982-282803eeef1269a4e1c2946ff';

async function fetchImages(searchQuery, page, per_page) {
  const getUrl = {
    url: BASE_URL,
    params: {
      key: apiKey,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false,
      q: searchQuery,
      per_page: per_page,
    },
  };
  return await axios(getUrl)
}

export default fetchImages;
