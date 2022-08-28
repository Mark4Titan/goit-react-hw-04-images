import React, { Component } from 'react';
import * as SC from '../ImageGallery/ImageGallery.module';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';


class ImageGallery extends Component {
  state = {
    elem: '',
    showModal: false,
  };
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  getImgForModal = ({ elem }) => {
    if (elem) {
      this.toggleModal();
      this.setState({
        elem,
      });
    }
  };
  render() {
    const { showModal, elem } = this.state;
    const { gallery } = this.props;
    const { tags, largeImageURL } = elem;
    return (
      <SC.DIV>
        <SC.UL className="ImageGallery">
          {gallery.map(item => {
            return (
              <SC.LI className="ImageGalleryItem" id={item.id} key={item.id}>
                <ImageGalleryItem
                  elem={item}
                  getImgForModal={this.getImgForModal}
                />
              </SC.LI>
            );
          })}
          {showModal && (
            <Modal hideModal={this.toggleModal}>
              <img src={largeImageURL} alt={tags} />
            </Modal>
          )}
        </SC.UL>
      </SC.DIV>
    );
  }
}

export default ImageGallery;