import React from 'react';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ elem, getImgForModal }) => {
  // console.log(elem);
  const { webformatURL, tags } = elem;
  // console.log(largeImageURL);
  return (
    <li className='ImageGalleryItem'>
      <img
        src={webformatURL}
        alt={tags}
        className='image'
        onClick={() => getImgForModal({ elem })}
      />
    </li>
  );
};

export default ImageGalleryItem;
