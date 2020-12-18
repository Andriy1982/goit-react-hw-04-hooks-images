import React, { useState } from 'react';
import './ImageGalleryItem.css';
import Modal from '../Modal';

function Imagegalleryitem({ url, user, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <>
      <li className="ImageGalleryItem">
        <img
          src={url}
          alt={user}
          onClick={toggleModal}
          className="ImageGalleryItem-image"
        />
      </li>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img className="ImageModal" src={largeImageURL} alt={user} />
        </Modal>
      )}
    </>
  );
}

export default Imagegalleryitem;
