import * as React from "react";
import {connect} from "react-redux";
import {Film} from "../../types";
import {Assign} from "utility-types";
import store from "../../store";

interface GenreProps {
  genre: string;
  isSelected: boolean;
  onGenreClick: (genre: string, films: Film[]) => void;
}

interface StateFromProps {
  films: Film[];
}

const Genre: React.FC<Assign<GenreProps, StateFromProps>> = (props) => {
  const {genre, films, isSelected, onGenreClick} = props;
  const activeClass = isSelected ? `catalog__genres-item--active` : ``;

  return (
    <li className={`catalog__genres-item ${activeClass}`}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(evt): void=> {
          evt.preventDefault();
          const isAllGenres = genre === `All genres` ? films : store.getState().films;
          onGenreClick(genre, isAllGenres);
        }}
      >
        {genre}
      </a>
    </li>
  );

};


const mapStateToProps = (state): StateFromProps => Object.assign({}, {
  films: state.films,
});

export {Genre};

export default connect<StateFromProps, null, void>(mapStateToProps)(Genre);
