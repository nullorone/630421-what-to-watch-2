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
  const onMovieCardLinkClick = jest.fn();
  const initialProps = {
    movies: MOCK_MOVIES,
    onMovieCardLinkClick,
  };
  const wrapper = shallow(
      <Main
        {...initialProps}
      />
  );

  wrapper
    .find(`.small-movie-card__link`)
    .simulate(`click`);

  expect(onMovieCardLinkClick).toHaveBeenCalledTimes(1);
});
