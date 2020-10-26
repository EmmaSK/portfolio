import React from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../public/style.scss";
import store from "./store";
import App from "./App.js";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
