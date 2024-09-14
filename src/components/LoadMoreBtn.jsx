import React from 'react';
import './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="load-more-btn">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
