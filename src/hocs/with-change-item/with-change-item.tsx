import * as React from "react";
import {Subtract} from "utility-types";

interface SubtractProps {
  itemCurrentIndex: number | null;
  onItemMouseEnter: (id: number) => void;
  onItemMouseLeave: () => void;
}

interface WithChangeItemState {
  currentIndex: number | null;
}

const withChangeItem = (Component) => {
  type ComponentProps = React.ComponentProps<typeof Component>;
  type WithChangeItemProps = Subtract<ComponentProps, SubtractProps>

  class WithChangeItem extends React.PureComponent<WithChangeItemProps, WithChangeItemState> {
    private _timer;

    constructor(props) {
      super(props);

      this.state = {
        currentIndex: null,
      };

      this._timer = null;

      this._handleWithChangeItemMouseEnter = this._handleWithChangeItemMouseEnter.bind(this);
      this._handleWithChangeItemMouseLeave = this._handleWithChangeItemMouseLeave.bind(this);
    }

    public componentWillUnmount(): void {
      clearTimeout(this._timer);
    }

    private _handleWithChangeItemMouseEnter(id): void {
      this._timer = setTimeout(() => {
        this.setState(() => ({currentIndex: id}));
      }, 1000);
    }

    private _handleWithChangeItemMouseLeave(): void {
      clearTimeout(this._timer);
      this.setState(() => ({currentIndex: null}));
    }

    public render(): JSX.Element {
      return (
        <Component
          {...this.props}
          itemCurrentIndex={this.state.currentIndex}
          onItemMouseEnter={this._handleWithChangeItemMouseEnter}
          onItemMouseLeave={this._handleWithChangeItemMouseLeave}
        />
      );
    }
  }

  return WithChangeItem;
};

export default withChangeItem;
