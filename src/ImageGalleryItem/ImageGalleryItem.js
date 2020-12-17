import React, { Component } from 'react';
import './ImageGalleryItem.css';
import Modal from '../Modal';

export default class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { url, user, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <li className="ImageGalleryItem">
          <img
            src={url}
            alt={user}
            onClick={this.toggleModal}
            className="ImageGalleryItem-image"
          />
        </li>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img className="ImageModal" src={largeImageURL} alt={user} />
          </Modal>
        )}
      </>
    );
  }
}
