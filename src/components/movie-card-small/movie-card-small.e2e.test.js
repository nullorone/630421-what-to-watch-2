import React from "react";
import {shallow} from "enzyme";
import MovieCardSmall from "../movie-card-small/movie-card-small";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Test Movie Card component`, () => {
  const initProps = {
    title: `My Awesome film`,
    img: {
      src: EMPTY_STRING,
      alt: EMPTY_STRING,
    },
    onLinkEnter: jest.fn(),
  };

  it(`Return article node`, () => {
    const wrapper = shallow(
        <MovieCardSmall {...initProps}/>
    );

    expect(wrapper.find(`.small-movie-card`)).toBeTruthy();
  });

  it(`Get node with title props`, () => {
    const wrapper = shallow(
        <MovieCardSmall {...initProps}/>
    );

    expect(wrapper.find(`.small-movie-card__link`)).toBeTruthy();
  });

  it(`Compare title props`, () => {
    const wrapper = shallow(
        <MovieCardSmall {...initProps}/>
    );

    expect(wrapper.find(`.small-movie-card__link`).text()).toBe(initProps.title);
  });

  it(`Call onLinkEnter listener`, () => {
    const wrapper = shallow(
        <MovieCardSmall {...initProps}/>
    );

    wrapper
      .find(`.small-movie-card__link`)
      .simulate(`mouseenter`);

    expect(initProps.onLinkEnter).toBeCalledTimes(Value.FULL);
  });
});
