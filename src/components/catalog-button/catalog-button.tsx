import React from "react";
import PropTypes from "prop-types";

const {func} = PropTypes;

const CatalogButton = (props) => {
  const {onButtonClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onButtonClick}
      >
        ShowMore
      </button>
    </div>
  );
};

CatalogButton.propTypes = {
  onButtonClick: func.isRequired,
};

export default CatalogButton;
