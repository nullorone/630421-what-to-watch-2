import React from 'react';
import renderer from "react-test-renderer";
import {Main} from './main';

const MOCK_MOVIES = [{
  title: ``,
  img: {
    src: ``,
    alt: ``,
  },
}];

it(`Render main screen`, () => {
  const onMovieCardLinkClick = jest.fn();
  const initialProps = {
    movies: MOCK_MOVIES,
    onMovieCardLinkClick,
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
