export default class Adapter {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._image = {
      poster: data.poster_image,
      posterAlt: data.name,
      preview: data.preview_image,
      previewAlt: data.name,
      background: data.background_image,
    };
    this._backgroundColor = data.background_color;
    this._video = {
      link: data.video_link,
      preview: data.preview_video_link,
    };
    this._description = data.description;
    this._rating = data.rating;
    this._scoresCount = data.scores_count;
    this._director = data.director;
    this._starring = data.starring;
    this._runTime = data.run_time;
    this._genre = data.genre;
    this._released = data.released;
    this._isFavorite = data.is_favorite;
  }

  static parseFilm(data) {
    return new Adapter(data).getFilm();
  }

  static parseFilms(data) {
    return data.map(Adapter.parseFilm);
  }

  toRAW() {
    return {
      'id': this._id,
      'name': this._name,
      'poster_image': this._image.poster,
      'preview_image': this._image.preview,
      'background_image': this._image.background,
      'background_color': this._backgroundColor,
      'video_link': this._video.link,
      'preview_video_link': this._video.preview,
      'description': this._description,
      'rating': this._rating,
      'scores_count': this._scoresCount,
      'director': this._director,
      'starring': this._starring,
      'run_time': this._runTime,
      'genre': this._genre,
      'released': this._released,
      'is_favorite': this._isFavorite,
    };
  }

  getFilm() {
    return {
      id: this._id,
      name: this._name,
      image: {
        poster: this._image.poster,
        posterAlt: this._image.posterAlt,
        preview: this._image.preview,
        previewAlt: this._image.previewAlt,
        background: this._image.background,
      },
      backgroundColor: this._backgroundColor,
      video: {
        link: this._video.link,
        preview: this._video.preview,
      },
      description: this._description,
      rating: this._rating,
      scoresCount: this._scoresCount,
      director: this._director,
      starring: this._starring,
      runTime: this._runTime,
      genre: this._genre,
      released: this._released,
      isFavorite: this._isFavorite,
    };
  }
}

