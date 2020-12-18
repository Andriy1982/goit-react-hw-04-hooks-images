import React, { useState, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

import imagesApi from '../../Services/images-api';

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchImage, setSearchImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const scrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!searchImage) {
      return;
    }
    setIsLoading(true);

    imagesApi.fetchImages(searchImage, currentPage).then(({ hits }) => {
      setImages(state => [...state, ...hits]);
      // setCurrentPage(state => state + 1);
      setIsLoading(false);

      scrollPage();
    });
  }, [searchImage, currentPage]);

  const handleFormSubmit = searchImage => {
    setImages([]);
    setCurrentPage(1);
    setSearchImage(searchImage);
  };

  return (
    <>
      <Searchbar onSubmitForm={handleFormSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && (
        <Loader
          style={{ textAlign: 'center' }}
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={5000}
        />
      )}
      {images.length > 0 && !isLoading && (
        <Button onClickButton={() => setCurrentPage(state => state + 1)} />
      )}
    </>
  );
}

export default App;

// export default class App extends Component {
//   state = {
//     images: [],
//     currentPage: 1,
//     searchImage: '',
//     isLoading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchImage !== this.state.searchImage) {
//       this.fetchImages();
//     }

//     if (this.state.images.length !== prevState.images.length) {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     }
//   }

//   handleFormSubmit = searchImage => {
//     this.setState({ searchImage, currentPage: 1, images: [] });
//   };

//   fetchImages = () => {
//     const { searchImage, currentPage } = this.state;
//     this.setState({ isLoading: true });
//     imagesApi.fetchImages(searchImage, currentPage).then(({ hits }) =>
//       this.setState(prevState => ({
//         images: [...prevState.images, ...hits],
//         currentPage: prevState.currentPage + 1,
//         isLoading: false,
//       })),
//     );
//   };

//   render() {
//     const { images, isLoading } = this.state;
//     return (
//       <>
//         <Searchbar onSubmitForm={this.handleFormSubmit} />
//         {images.length > 0 && <ImageGallery images={images} />}
//         {isLoading && (
//           <Loader
//             style={{ textAlign: 'center' }}
//             type="ThreeDots"
//             color="#00BFFF"
//             height={80}
//             width={80}
//             timeout={5000}
//           />
//         )}
//         {images.length > 0 && !isLoading && (
//           <Button onClickButton={this.fetchImages} />
//         )}
//       </>
//     );
//   }
// }
