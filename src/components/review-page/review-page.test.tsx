import * as React from "react";
import renderer from "react-test-renderer";
import {Value, EMPTY_STRING} from "../../constants";
import ReviewPage from "./review-page";

jest.mock(`../movie-card-picture/movie-card-picture`, () => `MovieCardPicture`);
jest.mock(`../logo/logo`, () => `Logo`);
jest.mock(`../breadcrumbs/breadcrumbs`, () => `Breadcrumbs`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);

describe(`Make snapshot`, () => {
  const initProps = {
    id: Value.FULL,
    filmName: `New Year`,
    image: {
      poster: EMPTY_STRING,
      posterAlt: EMPTY_STRING,
      background: EMPTY_STRING,
      backgroundAlt: EMPTY_STRING,
    },
    avatar: EMPTY_STRING,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <ReviewPage {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
