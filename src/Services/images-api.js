import axios from 'axios';

const KEY = '18396149-73dfa4d2cc3cf60487110b893';
const baseURL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12';

async function fetchImages(searchImage = '', page = 1) {
  try {
    const response = await axios.get(baseURL, {
      params: {
        page: page,
        q: searchImage,
        key: KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const api = {
  fetchImages,
};

export default api;
