import PropTypes from "prop-types"
import React from 'react';
import * as SC from '../Button/Buttons.module';

const Button = ({ getNewPage, fetchLength }) => {
  return (
    <>
      <SC.BUTTON
        className="Button"
        type="button"
        data-action="load-more"
        onClick={getNewPage}
      >
        download more? still left {fetchLength} images.
      </SC.BUTTON>
    </>
  );
};

Button.propTypes = {
  getNewPage: PropTypes.any
}

export default Button;
