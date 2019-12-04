import * as React from "react";
import {UserDataType} from "../../types";

interface SignInProps {
  onFormSubmitClick: (data: UserDataType) => void;
}

const SignIn: React.FC<SignInProps> = (props)=> {
  const {onFormSubmitClick} = props;
  const emailInputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const passwordInputRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <div className="sign-in user-page__content">
      <form
        action="#"
        className="sign-in__form"
        onSubmit={(evt): void => {
          evt.preventDefault();
          const userData = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
          };
          onFormSubmitClick(userData);
        }}>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input ref={emailInputRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" required={true}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input ref={passwordInputRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" required={true}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button
            className="sign-in__btn"
            type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
