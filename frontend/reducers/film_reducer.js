import { merge } from 'lodash';
import { RECEIVE_FILMS, RECEIVE_FILM } from '../actions/film_actions';

const defaultState = {
  films: [],
  filmDetail: {}
};

const FilmReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_FILMS:
      newState = merge({}, defaultState, action.films);
      return newState;
    case RECEIVE_FILM:
      newState = merge({}, defaultState, {filmDetail: action.film});
      return newState;
    default:
      return state;
  }
};

export default FilmReducer;
