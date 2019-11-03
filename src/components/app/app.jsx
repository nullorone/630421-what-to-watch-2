import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PageScreen from "../page-screen/page-screen";

const {string, shape, arrayOf} = PropTypes;

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <PageScreen {...this.props}/>;
  }
}

App.propTypes = {
  films: arrayOf(shape({
    title: string.isRequired,
    img: shape({
      src: string.isRequired,
      alt: string.isRequired,
    }),
  })),
  genres: arrayOf(string.isRequired),
  iconNames: arrayOf(string.isRequired),
};
