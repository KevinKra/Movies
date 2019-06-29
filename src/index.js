import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import "normalize.css";

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(application, document.getElementById("root"));
