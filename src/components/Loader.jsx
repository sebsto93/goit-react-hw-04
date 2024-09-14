import React from 'react';
import { Circles } from 'react-loader-spinner';
import './Loader.module.css';

const Loader = () => {
  return (
    <div className="loader">
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
