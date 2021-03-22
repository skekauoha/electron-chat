import React from 'react';
import Spinner from './Spinner';

const Loader = ({ message = 'Just one moment please...' }) => {
  return (
    <div className="loading-screen">
      <div className="loading-view">
        <div className="loading-view-container">
          <div className="mb-3">{message}</div>
          <Spinner />
        </div>
      </div>
    </div>
  );
};

export default Loader;
