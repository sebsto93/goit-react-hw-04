import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, image }) => {
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
      {image && <img src={image.urls.large} alt={image.alt_description} />}
    </Modal>
  );
};

export default ImageModal;
