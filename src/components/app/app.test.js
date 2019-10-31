import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {EMPTY_STRING} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    films: [{
      title: `My Awesome Movie`,
      img: {
        src: EMPTY_STRING,
        alt: EMPTY_STRING,
      },
    }],
    genres: [`Academy`]
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <App
            {...initProps}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
