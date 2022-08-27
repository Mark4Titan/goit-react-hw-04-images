import React from 'react';
// import PropTypes from 'prop-types';

const Button = ({ getNewPage }) => {
  // console.log(getNewPage);
  return (
    <button
      className='Button'
      type="button"
      data-action="load-more"
      // disabled={true}
      onClick={getNewPage}
    >
      Show more
    </button>
  );
};

export default Button;
