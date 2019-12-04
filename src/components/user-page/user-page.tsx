import * as React from "react";
import Logo from "../logo/logo";
import SignIn from "../sign-in/sign-in";
import {UserDataType} from "../../types";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";

interface DispatchFromProps {
  onFormSubmit: (data: UserDataType) => void;
}

const UserPage: React.FC<DispatchFromProps> = (props): JSX.Element => {
  const {onFormSubmit} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false}/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <SignIn onFormSubmitClick={onFormSubmit}/>

      <footer className="page-footer">
        <Logo light={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export {UserPage};

const mapDispatchToProps = (dispatch): DispatchFromProps => ({
  onFormSubmit: (userData): void => {
    dispatch(Operation.sendUserData(userData));
  },
});

export default connect(null, mapDispatchToProps)(UserPage);
