import { merge } from 'lodash';
import { RECEIVE_FILMS, RECEIVE_FILM } from '../actions/film_actions';

const defaultState = {
  films: [],
  film_detail: {}
};

const FilmReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_FILMS:
      newState = merge({}, state, action.films);
      return action.films;
    case RECEIVE_FILM:
      newState = merge({}, state, action.film);
      return action.film;
    default:
      return state;
  }
};

export default FilmReducer;
