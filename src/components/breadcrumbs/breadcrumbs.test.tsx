import * as React from "react";
import renderer from "react-test-renderer";
import Breadcrumbs from "./breadcrumbs";
import {BrowserRouter} from "react-router-dom";

describe(`Make snapshot`, () => {
  const initProps = {
    breadcrumbs: [
      {
        text: `Keks`,
        link: `https://htmlacademy.ru`
      }
    ],
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Breadcrumbs {...initProps}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
