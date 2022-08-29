import PropTypes from "prop-types"
import React from 'react';
import * as SC from '../Button/Buttons.module';

const Button = ({ getNewPage }) => {
  return (
    <SC.BUTTON
      className="Button"
      type="button"
      data-action="load-more"
      onClick={getNewPage}
    >
      Show more
    </SC.BUTTON>
  );
};

Button.propTypes = {
  getNewPage: PropTypes.any
}

export default Button;
