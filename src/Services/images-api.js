import axios from 'axios';

const KEY = '18396149-73dfa4d2cc3cf60487110b893';
axios.defaults.baseURL = 'https://pixabay.com/api/';

// axios.defaults.headers.common['Authorization'] =
//   '18396149-73dfa4d2cc3cf60487110b893';

async function fetchImages(searchImage = '', page = 1) {
  try {
    const response = await axios.get(
      `?q=${searchImage}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const api = {
  fetchImages,
};

export default api;
