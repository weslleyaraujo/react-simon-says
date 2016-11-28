import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';

import Welcome from './screens/Welcome';
import Board from './screens/Board';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Welcome} />
      <Route path="/board" component={Board} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
