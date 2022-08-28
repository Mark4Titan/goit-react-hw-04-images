import React, { Component } from 'react';
import * as SC from '../Modal/Modal.module';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.target.nodeName !== 'IMG' || e.code === 'Escape') {
      this.props.hideModal();
    }
  };
  render() {
    return (
      <SC.DIVOverlay className="Overlay" onClick={this.closeModal}>
        <SC.DIVModal className="Modal">{this.props.children}</SC.DIVModal>
      </SC.DIVOverlay>
    );
  }
}

export default Modal;
