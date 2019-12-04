import * as React from "react";
import renderer from "react-test-renderer";
import UserPage from "./user-page";
import store from "../../reducer/store";
import {Provider} from "react-redux";

jest.mock(`../sign-in/sign-in`, () => `SignIn`);

describe(`Make snapshot`, () => {
  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <UserPage/>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
