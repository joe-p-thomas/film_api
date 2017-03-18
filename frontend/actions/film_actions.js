import * as apiUtils from '../util/film_api_util';

export const RECEIVE_FILMS = 'RECEIVE_FILMS';
export const RECEIVE_FILM = 'RECEIVE_FILM';

export const receiveFilms = (films) => ({
  type: RECEIVE_FILMS,
  films
});

export const receiveFilm = (film) => ({
  type: RECEIVE_FILM,
  film
});

export const requestFilms = (title) => (dispatch) => (
  apiUtils.search(title).then(
    (res) => dispatch(receiveFilms(res))
  )
);

export const requestFilm = (urlSlug) => (dispatch) => (
  apiUtils.filmDetail(urlSlug).then(
    (res) => dispatch(receiveFilm(res))
  )
);
