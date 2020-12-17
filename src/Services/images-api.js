const KEY = '18396149-73dfa4d2cc3cf60487110b893';

function fetchImages(searchImage = '', page = 1) {
  return fetch(
    `https://pixabay.com/api/?q=${searchImage}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Нет картинки с таким именем ${searchImage}`),
    );
  });
}

const api = {
  fetchImages,
};

export default api;
