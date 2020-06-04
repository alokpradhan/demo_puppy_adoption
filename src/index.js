import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { createStore } from "redux";
import puppiesApp from "./reducers";
import { Provider } from "react-redux";

const puppiesFromServer = [
  { name: "Sean", breed: "Terrier", avatar: "", available: true, id: 1 },
  { name: "Priscilla", breed: "Shepard", avatar: "", available: true, id: 2 },
  { name: "Harry", breed: "Hound", avatar: "", available: true, id: 3 }
];

let store = createStore(puppiesApp, {
  puppies: puppiesFromServer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
