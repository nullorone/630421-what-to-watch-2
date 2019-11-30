import * as React from "react";
import {Item} from "../../types";

interface MovieNavItemProps extends Item {
  onTabClick: (text: string) => void;
}

const MovieNavItem: React.FC<MovieNavItemProps> = (props) => {
  const {active, text, onTabClick} = props;

  const itemClassName = active ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`;

  return (
    <li className={itemClassName}>
      <a
        href="#"
        className="movie-nav__link"
        onClick={(evt): void => {
          evt.preventDefault();
          onTabClick(text.toLowerCase());
        }}>
        {text}
      </a>
    </li>
  );
};

export default MovieNavItem;
