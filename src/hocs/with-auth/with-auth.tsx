import * as React from "react";
import NameSpaces from "../../reducer/name-spaces";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

interface StateFromProps {
  isAuthorizationRequired: boolean;
}

const withAuth = (Component) => {
  type ComponentProps = React.ComponentProps<typeof Component>;

  class WithAuth extends React.PureComponent<ComponentProps, StateFromProps> {
    constructor(props) {
      super(props);
    }

    public render(): React.ReactElement {
      return (
        this.props.isAuthorizationRequired
          ? <Redirect to="/login"/>
          : <Component {...this.props}/>
      );
    }
  }

  const mapStateToProps = (state): StateFromProps => Object.assign({}, {
    isAuthorizationRequired: state[NameSpaces.DATA].isAuthorizationRequired,
  });

  return connect(mapStateToProps)(WithAuth);
};


export default withAuth;
