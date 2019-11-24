import * as React from "react";
import Genre from "../genre/genre";

interface GenreListProps {
  genres: string[];
  selectedGenre: string;
  onGenreClick: () => void;
}

const GenreList: React.FC<GenreListProps> = (props) => {
  const {genres, selectedGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genres
        .map((genre, index) => {
          const keyComponent = `genre-item-${index + 1}`;

          return (
            <Genre
              key={keyComponent}
              genre={genre}
              isSelected={selectedGenre === genre}
              onGenreClick={onGenreClick}
            />
          );
        })}
    </ul>
  );
};

export default GenreList;
