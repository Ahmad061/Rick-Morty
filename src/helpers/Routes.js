import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { history } from "../helpers";
import App from "../components/App";
import Gallery from "../components/gallery";
import { ToastAlert } from "../layouts/toastAlert";

export const Routes = () => {
  //============================ Return ===========================\\
  return (
    <Router history={history}>
      <ToastAlert />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
    </Router>
  );
};
