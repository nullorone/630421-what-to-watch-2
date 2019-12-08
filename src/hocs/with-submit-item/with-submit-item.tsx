import * as React from "react";
import {Subtract} from "utility-types";
import {Operation} from "../../reducer/data/data";
import store from "../../reducer/store";

interface SubtractProps {
  formRef: React.RefObject<HTMLFormElement>;
  submitButtonRef: React.RefObject<HTMLButtonElement>;
  onFormSubmit?: () => void;
}

interface WithSubmitItemState {
  currentIndex: number | null;
}

const withSubmitItem = (Component) => {
  type ComponentProps = React.ComponentProps<typeof Component>;
  type WithSubmitItemProps = Subtract<ComponentProps, SubtractProps>
  class WithSubmitItem extends React.PureComponent<WithSubmitItemProps, WithSubmitItemState> {
    private readonly _formRef: React.RefObject<HTMLFormElement>;
    private readonly _submitButtonRef: React.RefObject<HTMLButtonElement>;

    constructor(props) {
      super(props);
      this._formRef = React.createRef();
      this._submitButtonRef = React.createRef();

      this.state = {
        currentIndex: null,
      };

      this._handleWithSubmitItem = this._handleWithSubmitItem.bind(this);
    }

    public render(): JSX.Element {
      return (
        <Component
          {...this.props}
          formRef={this._formRef}
          buttonRef={this._submitButtonRef}
          onFormSubmit={this._handleWithSubmitItem}
        />
      );
    }

    private _handleWithSubmitItem(id: number): void {
      const radios = [...this._formRef.current.elements[`rating`]];
      const checkedRadio = radios.filter((radio) => radio.checked);
      const textarea = this._formRef.current.elements[`review-text`];
      if ((textarea.value.length > 50 && textarea.value.length < 400) && checkedRadio) {
        const review = {
          id,
          rating: checkedRadio[0].value,
          comment: textarea.value,
        };

        this._submitButtonRef.current.disabled = true;
        radios.forEach((radio) => (radio.disabled = true));
        textarea.disabled = true;
        store.dispatch(Operation.sendReview(review))
          .then(() => history.back())
          .catch(() => {
            radios.forEach((radio) => (radio.disabled = false));
            textarea.disabled = false;
            this._submitButtonRef.current.disabled = false;
          });
      }
    }
  }

  return WithSubmitItem;
};

export default withSubmitItem;
