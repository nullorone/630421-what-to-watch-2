import React from "react";
import {shallow} from "enzyme";
import MovieCardSmall from "../movie-card-small/movie-card-small";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Test Movie Card component`, () => {
  const initProps = {
    id: Value.EMPTY,
    name: `My Card`,
    image: {
      poster: EMPTY_STRING,
      posterAlt: EMPTY_STRING,
      preview: EMPTY_STRING,
      previewAlt: EMPTY_STRING,
      background: EMPTY_STRING,
      backgroundAlt: EMPTY_STRING,
    },
    backgroundColor: EMPTY_STRING,
    video: {
      link: {
        mp4: `New Year`,
        webm: `Christmas`,
      },
      poster: `./img/Holly`,
    },
    description: EMPTY_STRING,
    rating: Value.FULL,
    scoresCount: Value.FULL,
    director: `Keks`,
    starring: [`Me`, `You`, `They`],
    runTime: Value.FULL,
    genre: EMPTY_STRING,
    released: Value.FULL,
    isFavorite: false,
    isPlaying: false,
    onCardMouseEnter: jest.fn(),
    onCardMouseLeave: jest.fn(),
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

    expect(wrapper.find(`.small-movie-card__link`).text()).toBe(initProps.name);
  });

  it(`Call onLinkEnter listener`, () => {
    const wrapper = shallow(
        <MovieCardSmall {...initProps}/>
    );

    wrapper
      .find(`.small-movie-card__link`)
      .simulate(`click`);

    expect(initProps.onLinkClick).toBeCalledTimes(Value.FULL);
  });

  it(`Get VideoPlayer component`, () => {
    const wrapper = shallow(
        <MovieCardSmall {...initProps}/>
    );

    wrapper.setState({isVideo: true});

    expect(wrapper.find(`VideoPlayer`)).toBeTruthy();
  });
});
