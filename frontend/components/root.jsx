import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SessionContainer from './session/session_container';
import LogoutContainer from './session/logout_container';
import SearchContainer from './search/search_container';
import FilmDetailContainer from './films/film_detail_container';

import { requestFilm } from '../actions/film_actions';



const Root = ({store}) => {
  const ensureLogout = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const ensureLogin = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/auth');
    }
  };

  const requestFilmDetail = (nextState, replace, cb) => {
    store.dispatch(requestFilm(nextState.params.urlSlug)).then(() => cb());
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory} >
        <Route path='/auth' component={SessionContainer} onEnter={ensureLogout}/>
        <Route path='/' component={LogoutContainer} onEnter={ensureLogin}>
          <IndexRoute component={SearchContainer}/>
          <Route path='/film/:urlSlug'
                 component={FilmDetailContainer}
                 onEnter={requestFilmDetail}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
