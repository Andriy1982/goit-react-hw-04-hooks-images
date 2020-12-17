import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

import imagesApi from './Services/images-api';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchImage: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchImage !== this.state.searchImage) {
      this.fetchImages();
    }

    if (this.state.images.length !== prevState.images.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleFormSubmit = searchImage => {
    this.setState({ searchImage, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { searchImage, currentPage } = this.state;
    this.setState({ isLoading: true });
    imagesApi.fetchImages(searchImage, currentPage).then(({ hits }) =>
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
        isLoading: false,
      })),
    );
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
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
          <Button onClickButton={this.fetchImages} />
        )}
      </>
    );
  }
}
