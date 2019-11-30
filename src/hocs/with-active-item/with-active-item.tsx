import * as React from "react";
import {MovieNavTabs} from "../../constants";
import {Subtract} from "utility-types";

interface WithActiveItemState {
  item: string;
}

interface SubtractProps {
  activeItem: string;
  onItemClick: () => void;
}

const withActiveItem = (Component)=> {
  type ComponentProps = React.ComponentProps<typeof Component>;
  type WithActiveItemProps = Subtract<ComponentProps, SubtractProps>

  class WithActiveItem extends React.PureComponent<WithActiveItemProps, WithActiveItemState> {
    constructor(props) {
      super(props);

      this.state = {
        item: MovieNavTabs.DETAILS,
      };

      this._handleItemClick = this._handleItemClick.bind(this);
    }

    public render(): JSX.Element {
      return (
        <Component
          {...this.props}
          activeItem={this.state.item}
          onItemClick={this._handleItemClick}
        />
      );
    }

    private _handleItemClick(itemName): void {
      this.setState({item: itemName});
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
