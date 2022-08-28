import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loader = ({ isLoading }) => {
  return (
    <Audio
      height="180"
      width="180"
      radius="9"
      color="#fff"
      ariaLabel="Loading..."
      wrapperClass="AudioSearchbar"
      visible={isLoading}
    />
  );
};

export default Loader;
