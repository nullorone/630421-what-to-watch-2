import * as React from "react";

interface GenreProps {
  genre: string;
  isSelected: boolean;
  onGenreClick: (genre: string) => void;
}

const Genre: React.FC<GenreProps> = (props) => {
  const {genre, isSelected, onGenreClick} = props;
  const activeClass = isSelected ? `catalog__genres-item--active` : ``;

  return (
    <li className={`catalog__genres-item ${activeClass}`}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(evt): void=> {
          evt.preventDefault();
          onGenreClick(genre);
        }}
      >
        {genre}
      </a>
    </li>
  );

};

export default Genre;
