import React, { useEffect } from "react";
import {
  Route,
  Switch,
  Router,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import { history } from "../helpers";
import App from "../components/App";
import Gallery from "../components/gallery";
import { ToastAlert } from "../layouts/toastAlert";

export const Routes = () => {
  useEffect(() => {
    console.log(history.location.pathname);
  });

  useEffect(() => {
    console.log(history.location.pathname);
  }, [window.location.pathname]);
  //============================ Return ===========================\\
  return (
    <HashRouter history={history}>
      <ToastAlert />
      <Route exact path="/" component={App} />
      <Route exact path="/gallery" component={Gallery} />
    </HashRouter>
  );
};
