import React from "react";
import PropTypes from "prop-types";

const {string} = PropTypes;

const UserBlock = (props) => {
  const {avatarSrc} = props;

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src={avatarSrc} alt="User avatar" width="63" height="63"/>
      </div>
    </div>
  );
};

UserBlock.propTypes = {
  avatarSrc: string.isRequired,
};

export default UserBlock;
