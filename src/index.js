import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, Routes } from "./helpers";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  /*<Provider store={store}>
     <Routes />
    </Provider>, */

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//serviceWorker.register(serviceWorker);
