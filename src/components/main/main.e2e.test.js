import React from 'react';
import {shallow} from "enzyme";
import Main from "./main";

const MOCK_MOVIES = [{
  title: ``,
  img: {
    src: ``,
    alt: ``,
  },
}];

it(`Click on link of title movie card`, () => {
  const onMovieCardLinkEnter = jest.fn();
  const initialProps = {
    movies: MOCK_MOVIES,
    onMovieCardLinkEnter,
  };
  const wrapper = shallow(
      <Main
        {...initialProps}
      />
  );

  wrapper
    .find(`.small-movie-card__link`)
    .simulate(`mouseenter`);

  expect(onMovieCardLinkEnter).toHaveBeenCalledTimes(1);
});
