import React, {PureComponent} from "react";

const withChangeItem = (Component) => {
  class WithChangeItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentIndex: null,
      };

      this._timer = null;

      this._handleWithChangeItemMouseEnter = this._handleWithChangeItemMouseEnter.bind(this);
      this._handleWithChangeItemMouseLeave = this._handleWithChangeItemMouseLeave.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          itemCurrentIndex={this.state.currentIndexCard}
          onItemMouseEnter={this._handleWithChangeItemMouseEnter}
          onItemMouseLeave={this._handleWithChangeItemMouseLeave}
        />
      );
    }

    componentWillUnmount() {
      clearTimeout(this._timer);
    }

    _handleWithChangeItemMouseEnter(id) {
      this._timer = setTimeout(() => {
        this.setState(() => ({currentIndexCard: id}));
      }, 1000);
    }

    _handleWithChangeItemMouseLeave() {
      clearTimeout(this._timer);
      this.setState(() => ({currentIndexCard: null}));
    }
  }

  WithChangeItem.propTypes = {};

  return WithChangeItem;
};

export default withChangeItem;
