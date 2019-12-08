import * as React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review";

describe(`Make snapshot`, () => {
  const initProps = {
    onFormSubmit: jest.fn(),
    onRatingClick: jest.fn(),
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <AddReview {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
