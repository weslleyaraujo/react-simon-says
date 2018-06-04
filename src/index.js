import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import registerServiceWorker from "./registerServiceWorker";
import Welcome from "./screens/Welcome";
import Board from "./screens/Board";
import store from "./store";
import "./index.css";

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Welcome} />
      <Route path="/board/" component={Board} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
