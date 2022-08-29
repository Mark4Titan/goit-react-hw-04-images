import PropTypes from "prop-types"
import React from 'react';
import * as SC from '../ImageGalleryItem/ImageGalleryItem.module';

const ImageGalleryItem = ({ elem, getImgForModal }) => {
  const { webformatURL, tags } = elem;
  return (
    <>
      <SC.IMG
        src={webformatURL}
        alt={tags}
        className="image"
        onClick={() => getImgForModal({ elem })}
      />
    </>
  );
};

ImageGalleryItem.propTypes = {
  elem: PropTypes.shape({
    tags: PropTypes.any,
    webformatURL: PropTypes.any
  }),
  getImgForModal: PropTypes.func
}


export default ImageGalleryItem;
