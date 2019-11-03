import React from "react";
import PropTypes from "prop-types";

const {string, func} = PropTypes;

const CatalogButton = (props) => {
  const {text, onButtonClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onButtonClick}
      >
        {text}
      </button>
    </div>
  );
};

CatalogButton.propTypes = {
  text: string.isRequired,
  onButtonClick: func.isRequired,
};

export default CatalogButton;
