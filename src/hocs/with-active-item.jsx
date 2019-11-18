import React, {PureComponent} from "react";
import {MovieNavTabs} from "../constants";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        item: MovieNavTabs.DETAILS,
      };

      this._handleItemClick = this._handleItemClick.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.item}
          onItemClick={this._handleItemClick}
        />
      );
    }

    _handleItemClick(itemName) {
      this.setState({item: itemName});
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
