import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <button className={styles.close} onClick={onRequestClose}>
        &times;
      </button>
      <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
    </Modal>
  );
};

export default ImageModal;
