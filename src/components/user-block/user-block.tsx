import * as React from "react";

interface UserBlockProps {
  avatarSrc: string;
}

const UserBlock: React.FC<UserBlockProps> = (props) => {
  const {avatarSrc} = props;

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src={avatarSrc} alt="User avatar" width="63" height="63"/>
      </div>
    </div>
  );
};

export default UserBlock;
