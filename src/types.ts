interface User {
  id: number;
  name: string;
}

export interface Comment {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
}

export interface Image {
  poster: string;
  posterAlt: string;
  preview: string;
  previewAlt: string;
  background: string;
  backgroundAlt: string;
}

export interface Video {
  link: {
    mp4: string;
    webm: string;
  };
  poster: string;
}

export interface Film {
  id: number;
  name: string;
  image: Image;
  backgroundColor: string;
  video: Video;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export interface Item {
  active: boolean;
  text: string;
}

export interface Button {
  iconName: string;
  classModifier: string;
  text: string;
}
