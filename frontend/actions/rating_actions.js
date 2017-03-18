import * as apiUtil from '../util/rating_api_util';

import { receiveFilm } from './film_actions';

export const submitRating = (rating) => (dispatch) => (
  apiUtil.submitRating(rating).then(
    (res) => dispatch(receiveFilm(res))
  )
);

export const updateRating = (rating) => (dispatch) => (
  apiUtil.updateRating(rating).then(
    (res) => dispatch(receiveFilm(res))
  )
);
