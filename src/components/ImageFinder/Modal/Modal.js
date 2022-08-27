import React, { Component } from 'react';
// importfrom './Modal.module.css';
// import PropTypes from 'prop-types';
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
      <div className='Overlay' onClick={this.closeModal}>
        <div className='Modal'>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
