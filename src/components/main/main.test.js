import React from 'react';
import renderer from "react-test-renderer";
import Main from './main';

const MOCK_MOVIES = [{
  title: ``,
  img: {
    src: ``,
    alt: ``,
  },
}];

it(`Render main screen`, () => {
  const initialProps = {
    movies: MOCK_MOVIES,
    genres: [``],
  };

  const tree = renderer
    .create(
        <Main
          {...initialProps}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
