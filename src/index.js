import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, Routes } from "./helpers";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register(serviceWorker);
