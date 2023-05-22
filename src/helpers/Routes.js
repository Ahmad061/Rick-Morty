import React from "react";
import {
  Route,
  Router,
} from "react-router-dom";
import { history } from "../helpers";
import App from "../components/App";
import Gallery from "../components/gallery";
import { ToastAlert } from "../layouts/toastAlert";

export const Routes = () => {

  //============================ Return ===========================\\
  return (
    <Router history={history}>
      <ToastAlert />
      <Route exact path="/" component={App} />
      <Route exact path="/Rick-Morty" component={App} />
      <Route exact path="/Rick-Morty/gallery" component={Gallery} />
    </Router>
  );
};
