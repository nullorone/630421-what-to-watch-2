import React from "react";
import PropTypes from "prop-types";
import Icon from "../icon/icon";

const {arrayOf, string} = PropTypes;

const IconsWrapper = (props) => {
  const {iconNames} = props;
  return (
    <div className="visually-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        {iconNames.map((iconName, index) => <Icon key={`icon-${index + 1}`} name={iconName}/>)}
      </svg>
    </div>
  );
};

IconsWrapper.propTypes = {
  iconNames: arrayOf(string.isRequired),
};

export default IconsWrapper;
