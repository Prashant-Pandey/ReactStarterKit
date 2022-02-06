import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { Router } from "./Router";
import ErrorBoundary from "./hoc/ErrorBoundary";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Router />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
