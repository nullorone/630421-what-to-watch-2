import * as React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";

describe(`Make snapshot`, () => {
  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <SignIn/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
