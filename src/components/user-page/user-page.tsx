import * as React from "react";
import Logo from "../logo/logo";
import SignIn from "../sign-in/sign-in";

const UserPage = (): JSX.Element => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false}/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <SignIn/>

      <footer className="page-footer">
        <Logo light={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default UserPage;
