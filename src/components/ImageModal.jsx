import React from 'react';
import Modal from 'react-modal';
import './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={Boolean(image)}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onClose} className="close-btn">
        &times;
      </button>
      <img src={image.urls.regular} alt={image.alt_description} className="modal-img" />
      <div className="modal-info">
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <p>Description: {image.description || 'No description available'}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
