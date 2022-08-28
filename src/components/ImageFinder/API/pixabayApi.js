const BASE_URL = 'https://pixabay.com/api/'
const apiKey = '22343982-282803eeef1269a4e1c2946ff';

function fetchImages(searchQuery, page, per_page) {
  const url = `${BASE_URL}?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=${per_page}`;
  

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(({ hits }) => {
      return hits;
    });
};

export default fetchImages;