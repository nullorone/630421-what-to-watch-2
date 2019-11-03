import React from "react";
import renderer from "react-test-renderer";
import Genre from "./genre";

describe(`Make snapshot`, () => {
  const initProps = {
    genre: `Academy`,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <Genre
            {...initProps}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
