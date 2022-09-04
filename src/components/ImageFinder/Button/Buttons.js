import PropTypes from "prop-types"
import React from 'react';
import * as SC from '../Button/Buttons.module';

const Button = ({ getNewPage, page, fetchLength }) => {
  return (
    <>
      <SC.BUTTON
        className="Button"
        type="button"
        data-action="load-more"
        onClick={getNewPage}
      >
        Load more ({page}/{fetchLength})
      </SC.BUTTON>
    </>
  );
};

Button.propTypes = {
  getNewPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  fetchLength: PropTypes.number.isRequired
};

export default Button;
