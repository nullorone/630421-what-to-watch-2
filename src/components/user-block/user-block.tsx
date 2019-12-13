import * as React from "react";
import NameSpaces from "../../reducer/name-spaces";
import {connect} from "react-redux";
import {Assign} from "utility-types";
import {Link} from "react-router-dom";
import {Operation} from "../../reducer/data/data";

interface UserBlockProps {
  avatarSrc: string;
}

interface StateToProps {
  hasAuthorization: boolean;
}

interface DispatchFromProps {
  onAvatarClick?: () => void;
}

const UserBlock: React.FC<Assign<UserBlockProps, Assign<StateToProps, DispatchFromProps>>> = (props) => {
  const {avatarSrc, hasAuthorization, onAvatarClick} = props;

  return (
    <div className="user-block">
      {hasAuthorization
        ? <Link to="/login" className="user-block__link">Sign in</Link>
        : <Link
          to="/mylist"
          onClick={onAvatarClick}>
          <div className="user-block__avatar">
            <img src={avatarSrc} alt="User avatar" width="63" height="63"/>
          </div>
        </Link>
      }
    </div>
  );
};

export {UserBlock};

const mapStateToProps = (state): StateToProps => Object.assign({}, {
  hasAuthorization: state[NameSpaces.DATA].isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch): DispatchFromProps => ({
  onAvatarClick: (): void => {
    dispatch(Operation.loadFavoritesFilms());
  }
});

export default connect<StateToProps, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(UserBlock);
