import React from "react";
import PropTypes from "prop-types";

const {string} = PropTypes;

const MovieCardButton = (props) => {
  const {
    iconName,
    classModifier,
    text,
  } = props;

  const buttonClassName = `btn ${classModifier && `btn--${classModifier}`} movie-card__button`;
  const useIcon = `#${iconName}`;

  return (
    <button className={buttonClassName} type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref={useIcon} />
      </svg>
      <span>{text}</span>
    </button>
  );
};

MovieCardButton.propTypes = {
  iconName: string.isRequired,
  classModifier: string.isRequired,
  text: string.isRequired,
};

export default MovieCardButton;
