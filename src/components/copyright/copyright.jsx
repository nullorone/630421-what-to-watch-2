import React from "react";
import PropTypes from "prop-types";

const {string} = PropTypes;

const Copyright = (props) => {
  const {text} = props;

  return (
    <div className="copyright">
      <p>{text}</p>
    </div>
  );
};

Copyright.propTypes = {
  text: string.isRequired,
};

export default Copyright;
