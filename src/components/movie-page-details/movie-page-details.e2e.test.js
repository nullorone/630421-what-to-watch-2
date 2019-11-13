import React from "react";
import {shallow} from "enzyme";
import MoviePageDetails from "./movie-page-details";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Test cases MoviePageDetails component`, () =>{
  const initProps = {
    clickedFilm: {
      id: Value.EMPTY,
      name: `Keks`,
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
          mp4: EMPTY_STRING,
          webm: EMPTY_STRING,
        },
        poster: EMPTY_STRING,
      },
      description: EMPTY_STRING,
      rating: Value.FULL,
      scoresCount: Value.FULL,
      director: `Keks`,
      starring: [`Me`, `You`, `They`],
      runTime: Value.EMPTY,
      genre: EMPTY_STRING,
      released: Value.FULL,
      isFavorite: false,
    },
    films: [{
      id: Value.EMPTY,
      name: `Keks`,
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
          mp4: EMPTY_STRING,
          webm: EMPTY_STRING,
        },
        poster: EMPTY_STRING,
      },
      description: EMPTY_STRING,
      rating: Value.FULL,
      scoresCount: Value.FULL,
      director: `Keks`,
      starring: [`Me`, `You`, `They`],
      runTime: Value.EMPTY,
      genre: EMPTY_STRING,
      released: Value.FULL,
      isFavorite: false,
    }],
    icons: [`PAUSE`],
  };

  it(`Render description node`, () => {
    const wrapper = shallow(
        <MoviePageDetails {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });
});
