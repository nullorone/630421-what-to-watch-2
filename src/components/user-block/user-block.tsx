import * as React from "react";
import NameSpaces from "../../reducer/name-spaces";
import {connect} from "react-redux";
import {Assign} from "utility-types";

interface UserBlockProps {
  avatarSrc: string;
}

interface StateToProps {
  hasAuthorization: boolean;
}

const UserBlock: React.FC<Assign<UserBlockProps, StateToProps>> = (props) => {
  const {avatarSrc, hasAuthorization} = props;

  return (
    <div className="user-block">
      {hasAuthorization
        ? <a href="/" className="user-block__link">Sign in</a>
        : <div className="user-block__avatar">
          <img src={avatarSrc} alt="User avatar" width="63" height="63"/>
        </div>
      }
    </div>
  );
};

export {UserBlock};

const mapStateToProps = (state): StateToProps => Object.assign({}, {
  hasAuthorization: state[NameSpaces.DATA].isAuthorizationRequired,
});

export default connect(mapStateToProps)(UserBlock);
