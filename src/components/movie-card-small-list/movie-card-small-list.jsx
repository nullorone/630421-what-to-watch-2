import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCardSmall from "../movie-card-small/movie-card-small";

const {string, shape, arrayOf} = PropTypes;

export default class MovieCardSmallList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: ``,
    };

    this.onMovieCardMouseEnter = (evt) => {
      evt.preventDefault();
      const movieCardText = evt.target.innerText;

      this.setState(() => ({
        title: movieCardText,
      }), () => {
        // eslint-disable-next-line no-alert
        alert(`Вы навели на ${this.state.title}`);
      });
    };
  }

  render() {
    const {films} = this.props;
    let movieCards = [];

    for (let i = 0; i < films.length; i++) {
      const film = films[i];
      const keyComponent = `movie-card-${i + 1}`;

      movieCards.push(
          <MovieCardSmall
            key={keyComponent}
            onLinkEnter={this.onMovieCardMouseEnter}
            {...film}
          />);
    }

    return (
      <div className="catalog__movies-list">
        {movieCards}
      </div>
    );
  }
}

MovieCardSmallList.propTypes = {
  films: arrayOf(shape({
    title: string.isRequired,
    img: shape({
      src: string.isRequired,
      alt: string.isRequired,
    })
  })),
};
