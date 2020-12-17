import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';

export default class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      }),
    ),
  };

  render() {
    const { images } = this.props;
    return (
      <ul className="ImageGallery">
        {images &&
          images.map(({ id, webformatURL, user, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              url={webformatURL}
              user={user}
              largeImageURL={largeImageURL}
            />
          ))}
      </ul>
    );
  }
}
