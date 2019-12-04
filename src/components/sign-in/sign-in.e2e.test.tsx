import * as React from "react";
import {mount} from "enzyme";
import SignIn from "./sign-in";
import {Value} from "../../constants";

describe(`Test cases  component`, () =>{
  const initProps = {
    onFormSubmitClick: jest.fn(),
  };

  it(`Render component`, () => {
    const wrapper = mount(
        <SignIn {...initProps}/>
    );

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    wrapper.find(`.sign-in__form`).simulate(`submit`, {preventDefault() {}});

    expect(initProps.onFormSubmitClick).toBeCalledTimes(Value.FULL);
  });
});
