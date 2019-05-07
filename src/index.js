import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import { Products } from "./Products";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
   <Products />
  </Provider>,
  rootElement
);
