import React from 'react';
import renderer from "react-test-renderer";
import Main from './main';
import {EMPTY_STRING} from "../../constants";


describe(`Make snapshot`, () => {
  const initialProps = {
    movies: [{
      title: `My film`,
      img: {
        src: EMPTY_STRING,
        alt: EMPTY_STRING,
      },
    }],
    genres: [`ECMA`, `CSS`],
  };

  it(`Render main screen`, () => {
    const tree = renderer
      .create(
          <Main
            {...initialProps}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


