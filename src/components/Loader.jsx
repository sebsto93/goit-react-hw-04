import React from 'react';
import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css'; 
const Loader = () => {
  return (
    <div className={styles.loader}>
      <Circles color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default Loader;
