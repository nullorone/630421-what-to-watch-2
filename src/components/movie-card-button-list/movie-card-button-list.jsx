import React from "react";
import PropTypes from "prop-types";
import MovieCardButton from "../movie-card-button/movie-card-button";

const {shape, arrayOf, string, any} = PropTypes;

const MovieCardButtonList = (props) => {
  const {buttons} = props;

  let initialButtons = [];
  for (let i = 0; i < buttons.length; i++) {
    const buttonKey = `movie-card-button-${i + 1}`;
    const currentButton = buttons[i];
    initialButtons.push(<MovieCardButton key={buttonKey} {...currentButton}/>);
  }

  return (
    <div className="movie-card__buttons">
      {initialButtons}
      {props.children}
    </div>
  );
};

MovieCardButtonList.propTypes = {
  buttons: arrayOf(
      shape({
        iconName: string.isRequired,
        classModifier: string.isRequired,
        text: string.isRequired,
      })
  ),
  children: any,
};

export default MovieCardButtonList;
