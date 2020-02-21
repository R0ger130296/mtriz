import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/tailwind.css";

import Login from "./pages/login";
import Registro from "./pages/register";
import Home from "./pages/home";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Registro} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
