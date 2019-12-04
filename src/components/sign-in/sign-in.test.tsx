import * as React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";

describe(`Make snapshot`, () => {
  const initProps = {
    onFormSubmitClick: jest.fn(),
  };
  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <SignIn {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
