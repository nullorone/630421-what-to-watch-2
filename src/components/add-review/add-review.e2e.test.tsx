import * as React from "react";
import {mount} from "enzyme";
import AddReview from "./add-review";
import {Value} from "../../constants";

describe(`Test cases  component`, () => {

  const initProps = {
    id: Value.FULL,
    formRef: React.createRef(),
    buttonRef: React.createRef(),
    onFormSubmit: jest.fn(),
  };

  it(`Render component`, () => {
    const wrapper = mount(
        <AddReview {...initProps}/>
    );

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    wrapper.find(`.add-review__form`).simulate(`submit`, {preventDefault() {}});

    expect(initProps.onFormSubmit).toBeCalledTimes(Value.FULL);
  });
});
