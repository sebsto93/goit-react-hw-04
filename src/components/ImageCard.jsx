import React from 'react';
import './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick} className="card">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
