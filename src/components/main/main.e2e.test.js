import React from 'react';
import {shallow} from "enzyme";
import {Main} from "./main";

it(`Click on link of title movie card`, () => {
  const onMovieCardLinkClick = jest.fn();
  const wrapper = shallow(
      <Main
        movies={[{
          title: `0`,
          img: {
            src: `0`,
            alt: `0`,
          },
        }]}
        onMovieCardLinkClick={onMovieCardLinkClick} />
  );

  wrapper
    .find(`.small-movie-card__link`)
    .simulate(`click`);

  expect(onMovieCardLinkClick).toHaveBeenCalledTimes(1);
});
