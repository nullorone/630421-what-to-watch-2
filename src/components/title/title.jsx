import React from "react";
import PropTypes from "prop-types";

const {string} = PropTypes;

const Title = (props) => {
  const {className, text} = props;

  return (<h1 className={className}>{text}</h1>);
};

Title.propTypes = {
  className: string.isRequired,
  text: string.isRequired,
};

export default Title;
