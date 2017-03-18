import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SessionContainer from './session/session_container';
import SearchContainer from './search/search_container';

const Root = ({store}) => {
  return(
    <Provider store={store}>
      <Router history={hashHistory} >
        <Route path='/' component={SessionContainer} />
        <Route path='/search' component={SearchContainer} />
      </Router>
    </Provider>
  );
};

export default Root;
