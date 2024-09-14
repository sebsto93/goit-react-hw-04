import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <img src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
