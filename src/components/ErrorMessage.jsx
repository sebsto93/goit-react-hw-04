import React from 'react';
import './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
