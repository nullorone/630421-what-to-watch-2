import * as React from "react";
import NameSpaces from "../../reducer/name-spaces";
import {connect} from "react-redux";
import {Assign} from "utility-types";
import {Link} from "react-router-dom";

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
        ? <Link to="/login" className="user-block__link">Sign in</Link>
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
