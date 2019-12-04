import * as React from "react";
import renderer from "react-test-renderer";
import UserPage from "./user-page";

jest.mock(`../sign-in/sign-in`, () => `SignIn`);

describe(`Make snapshot`, () => {
  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <UserPage/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
