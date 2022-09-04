import PropTypes from "prop-types"

import { useState } from 'react';
import * as SC from '../ImageGallery/ImageGallery.module';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';


const ImageGallery = ({gallery}) => {
  const [elem, setElem] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  

  const toggleModal = () => {
    setShowModal(m => !m)
  };

  const getImgForModal = ({ elem }) => {
    if ({ elem }) {
      toggleModal();
      setElem(elem);
    }
  };

  const { tags, largeImageURL } = elem;
  return (
    <SC.DIV>
      <SC.UL className="ImageGallery">
        {gallery.map(item => {
          return (
            <SC.LI className="ImageGalleryItem" id={item.id} key={item.id}>
              <ImageGalleryItem
                elem={item}
                getImgForModal={getImgForModal}
              />
            </SC.LI>
          );
        })}
        {showModal && (
            <Modal hideModal={toggleModal}>
              <img src={largeImageURL} alt={tags} />
            </Modal>
          )}
      </SC.UL>
    </SC.DIV>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired  
}
export default ImageGallery;