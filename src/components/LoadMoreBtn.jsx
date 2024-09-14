import React from 'react';
import styles from './LoadMoreBtn.module.css';
import Loader from './Loader';

const LoadMoreBtn = ({ onClick, loading }) => {
  return (
    <div className={styles.container}>
      {loading ? (
        <Loader /> 
      ) : (
        <button className={styles.button} onClick={onClick}>
          Load More
        </button>
      )}
    </div>
  );
};

export default LoadMoreBtn;
