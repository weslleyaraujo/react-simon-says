import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, hashHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Welcome from './screens/Welcome';
import Board from './screens/Board';
import store from './store';
import './index.css';

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Redirect from="/" to="/react-simon-says/" />
      <Route path="/react-simon-says/" component={Welcome}  />
      <Route path="/react-simon-says/board/" component={Board} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
