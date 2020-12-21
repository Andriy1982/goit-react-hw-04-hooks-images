import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  per_page: 12,
  key: '18396149-73dfa4d2cc3cf60487110b893',
  image_type: 'photo',
  orientation: 'horizontal',
};

async function fetchImages(searchImage = '', page = 1) {
  try {
    const response = await axios.get(`?page =${page}&q =${searchImage}`);
    return response.data;
  } catch (error) {
    return [];
  }
}

const api = {
  fetchImages,
};

export default api;
