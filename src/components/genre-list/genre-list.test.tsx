import * as React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list";

const ACADEMY_STRING = `Academy`;

describe(`Make snapshot`, () => {
  const initProps = {
    genres: [ACADEMY_STRING, `Javascript`],
    selectedGenre: ACADEMY_STRING,
    onGenreClick: jest.fn(),
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
