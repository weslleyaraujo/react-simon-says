import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Welcome from './screens/Welcome';
import Board from './screens/Board';
import store from './store';
import './index.css';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={Welcome} />
      <Route path="/board" component={Board} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
