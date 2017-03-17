import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

const hashHistory = createHashHistory();

const App = (props) => (
  <div>
    <h1>Hello World</h1>
    {props.children}
  </div>
);

const Root = ({store}) => {

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
