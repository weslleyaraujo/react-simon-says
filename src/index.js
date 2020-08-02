import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Board from "./screens/Board";
import Welcome from "./screens/Welcome";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
