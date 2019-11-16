import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list";
import {EMPTY_STRING} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    genres: [`Academy`, `Javascript`],
    selectedGenre: EMPTY_STRING,
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
