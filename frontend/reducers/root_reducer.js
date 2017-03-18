import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import FilmReducer from './film_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  films: FilmReducer
});

export default RootReducer;
