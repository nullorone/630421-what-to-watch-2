import React from 'react';
import renderer from "react-test-renderer";
import {Main} from './main';

it(`Render main screen`, () => {
  const tree = renderer
    .create(
        <Main
          movies={[{
            title: ``,
            img: {
              src: ``,
              alt: ``,
            },
          }]}
          onMovieCardLinkClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
