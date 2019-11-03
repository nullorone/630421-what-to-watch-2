import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list";

describe(`Make snapshot`, () => {
  const initProps = {
    genres: [`Academy`, `Javascript`],
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <GenreList
            {...initProps}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
