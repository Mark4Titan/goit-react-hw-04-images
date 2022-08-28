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


export default ImageGalleryItem;
