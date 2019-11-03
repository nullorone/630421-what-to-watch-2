import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const {string, shape, arrayOf} = PropTypes;

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, genres} = this.props;

    return (
      <Main
        films={films}
        genres={genres}
      />
    );
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
};
