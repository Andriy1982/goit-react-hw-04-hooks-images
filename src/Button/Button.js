import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ onClickButton }) {
  return (
    <button className="Button" type="button" onClick={onClickButton}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};

export default Button;
