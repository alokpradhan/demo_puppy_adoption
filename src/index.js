import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import puppiesApp from "./reducers";
// Import action creators
import {
  createPuppy,
  adoptPuppy,
  updatePuppy,
  setAvailablityFilter
} from "./actions";

import { Provider } from "react-redux";

let store = createStore(puppiesApp);

let unsubscribe = store.subscribe(() => {
  // Log new state to console
  console.log(store.getState());
});

console.log("initial state: ", store.getState());

store.dispatch(
  createPuppy({
    name: "Sean C.",
    breed: "Terrier",
    available: true
  })
);

store.dispatch(
  createPuppy({
    name: "Priscilla Hanz",
    breed: "German Shepard",
    available: true
  })
);

store.dispatch(adoptPuppy(2));

store.dispatch(
  updatePuppy({
    id: 1,
    name: "Sean Connery",
    breed: "Terrier",
    available: true
  })
);

store.dispatch(setAvailablityFilter("SHOW_ADOPTED"));

unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
